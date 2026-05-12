import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // Replace react/react-dom with shims that read from globalThis.React /
      // globalThis.ReactDOM at access time.  loadHMS() sets these globals
      // before room-exports (the dynamic chunk containing roomkit-react) is
      // imported, so all module-level React calls (createContext, lazy, …)
      // inside roomkit-react find the real React already on globalThis.
      'react/jsx-runtime': path.resolve(__dirname, 'src/shims/react-jsx-runtime.js'),
      'react-dom': path.resolve(__dirname, 'src/shims/react-dom.js'),
      'react': path.resolve(__dirname, 'src/shims/react.js'),
    }
  },
  build: {
    lib: {
      entry: './src/bundle.ts',
      name: 'HMS',
      fileName: () => 'hms.mjs',
      formats: ['es']
    }
  }
})
