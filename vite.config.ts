import{defineConfig}from'vite'
export default defineConfig({build:{lib:{entry:'./src/bundle.ts',name:'HMS',fileName:'hms',formats:['es']},rollupOptions:{external:['react','react-dom']}}})