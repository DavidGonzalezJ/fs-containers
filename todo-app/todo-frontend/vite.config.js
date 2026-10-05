import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['app', 'localhost', 'app-frontend'],
    watch: {
      usePolling: true, // los eventos de archivos no llegan al contenedor desde Windows
    },
  },
})
