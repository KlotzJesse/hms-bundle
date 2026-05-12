import { defineConfig } from 'vite'
import path from 'path'

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
    }
  }
})
