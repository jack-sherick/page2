import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    //outDir: '../dist',
  },
  base: "/page2/",
  server: {
    port: 8080
  }
})
