import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: './src/bundle.ts',
      name: 'HMS',
      fileName: 'hms',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        banner: '(()=>{ const R=globalThis.React,RD=globalThis.ReactDOM; if(!globalThis.require){ globalThis.require=(m)=>{ if(m==="react")return R; if(m==="react-dom")return RD; throw new Error("Cannot require "+m); }; } })();'
      }
    }
  }
})
