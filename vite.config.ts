import { defineConfig } from 'vite'
import path from 'path'

// Banner installed at the very top of hms.mjs (before any bundle code runs).
//
// Problem: Framer production never sets window.React — React is a scoped module.
// Our shims do `const R = globalThis.React` at module-eval time, which is
// inlined by Rolldown as `p = globalThis.React` inside the lazy-init call P().
// When globalThis.React is undefined, `p.Children` immediately throws.
//
// Fix: install a lazy Proxy as globalThis.React before the bundle evaluates.
// The proxy defers all property/function access to the real React, which is
// injected later via globalThis.__hmsSetReact (called by our exported setReact()).
// At render time _r is already set, so every React call resolves correctly.
//
// Fragment handling: React's reconciler does strict === comparison against
// Symbol.for('react.fragment').  When createElement/jsx receive a lazy proxy
// as the `type` argument (because g = p.Fragment was captured at init time),
// the apply trap resolves it via __hmsGetReal() to the real Symbol before
// forwarding the call to the real React.createElement.
const hmsBanner = `(function(){
'use strict';
var _r=null,_rd=null,hmsR,hmsRD;
function lazy(get){
  return new Proxy(function(){},{
    get:function(_,k){
      if(k==='__hmsGetReal')return function(){return get();};
      if(k==='prototype'){var v=get();return v?v.prototype:void 0;}
      var v=get();
      if(v==null)return lazy(function(){var vv=get();return vv!=null?vv[k]:null;});
      var r=v[k];
      if(typeof r==='function'||(typeof r==='object'&&r!==null))
        return lazy(function(){var vv=get();return vv!=null?vv[k]:null;});
      return r;
    },
    set:function(_,k,v){var r=get();if(r)r[k]=v;return true;},
    apply:function(_,t,a){
      var r=get();
      if(!r)throw new Error('[HMS] React not ready. Call setReact(React,ReactDOM) before rendering HMSPrebuilt.');
      var args=Array.prototype.slice.call(a);
      // Resolve lazy-proxy types (e.g. Fragment) to their real React values
      // so React.createElement / jsx receive the actual Symbol/class.
      if(args.length>0&&args[0]!=null&&typeof args[0].__hmsGetReal==='function'){
        var resolved=args[0].__hmsGetReal();
        if(resolved!=null)args[0]=resolved;
      }
      return r.apply(t,args);
    },
    construct:function(_,a,n){
      var r=get();
      if(!r)throw new Error('[HMS] React not ready. Call setReact(React,ReactDOM) before rendering HMSPrebuilt.');
      return Reflect.construct(r,a,n);
    },
    getPrototypeOf:function(){var r=get();return r?Object.getPrototypeOf(r):Function.prototype;},
    has:function(_,k){var r=get();return!!r&&k in r;}
  });
}
hmsR=lazy(function(){return _r;});
hmsRD=lazy(function(){return _rd;});
if(!globalThis.React)globalThis.React=hmsR;
if(!globalThis.ReactDOM)globalThis.ReactDOM=hmsRD;
// Guard: only the FIRST chunk to evaluate installs __hmsSetReact.
// All chunks share banner code (Rolldown applies output.banner to every chunk).
// Deps evaluate before their importers, so the deepest dep wins.
// Every chunk's lazy proxies close over that first chunk's _r/_rd refs —
// so setReact() calling __hmsSetReact() fills the right closure.
if(!globalThis.__hmsSetReact)globalThis.__hmsSetReact=function(React,ReactDOM){
  _r=React;_rd=ReactDOM;
  if(globalThis.React===hmsR)globalThis.React=React;
  if(globalThis.ReactDOM===hmsRD)globalThis.ReactDOM=ReactDOM;
};
})();`

export default defineConfig({
  resolve: {
    alias: {
      // Replace react/react-dom with shims that read from globalThis.React /
      // globalThis.ReactDOM, so no bare-specifier ESM imports end up in the
      // output while the named export HMSPrebuilt is still preserved.
      'react/jsx-runtime': path.resolve(__dirname, 'src/shims/react-jsx-runtime.js'),
      'react-dom': path.resolve(__dirname, 'src/shims/react-dom.js'),
      'react': path.resolve(__dirname, 'src/shims/react.js'),
    }
  },
  build: {
    lib: {
      entry: './src/bundle.ts',
      name: 'HMS',
      fileName: 'hms',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        banner: hmsBanner
      }
    }
  }
})
