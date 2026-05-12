import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // Shim react/react-dom: reads from globalThis set by loadHMS() before the
      // dynamic room-exports chunk evaluates (so createContext/lazy/memo etc.
      // at module level inside roomkit-react always find the real React).
      'react/jsx-runtime': path.resolve(__dirname, 'src/shims/react-jsx-runtime.js'),
      'react-dom': path.resolve(__dirname, 'src/shims/react-dom.js'),
      'react': path.resolve(__dirname, 'src/shims/react.js'),
      // @mediapipe/selfie_segmentation ships as a pure IIFE (no ESM exports).
      // Rolldown errors on missing named exports, so we shim the class shape.
      // The actual WASM + model files load from CDN at runtime via locateFile().
      '@mediapipe/selfie_segmentation': path.resolve(__dirname, 'src/shims/selfie-segmentation.js'),
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
