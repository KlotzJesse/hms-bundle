import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: './src/bundle.ts',
      name: 'HMS',
      fileName: 'hms',
      formats: ['iife']
    },
    rollupOptions: {
      // react and react-dom are expected as globals (window.React / window.ReactDOM).
      // react/jsx-runtime is NOT externalized so it bundles inline and picks up the React global.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      }
    }
  }
})
