import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // Listens on all network interfaces inside the container
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,     // Enables file watching across VM / Docker boundaries
    },
    // Fixes HMR WebSocket connection from your host browser to the VM
    hmr: {
      host: '10.0.1.207',
      clientPort: 5173,
    },
    // Allows accessing via the VM's specific IP without Vite blocking the Host header
    allowedHosts: [
      '10.0.1.207',
      'localhost',
      '127.0.0.1',
    ],
  },
})