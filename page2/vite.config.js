import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  base: "/page2/",
  plugins: [react()],
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
})
