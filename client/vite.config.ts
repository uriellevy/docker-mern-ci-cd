import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/_mantine";`,
      },
    },
  },
  //docker compose hot reload config:
  server: {
    watch: {
      usePolling: true, // Enables polling
    },
    host: true, // Allows the server to be accessible externally
    port: 5173,
  },
})
