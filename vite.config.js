import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Expose to all interfaces
    port: process.env.PORT || 5173, // Use Render's port or default to 5173
    allowedHosts: ['ajportfolio-4.onrender.com'], // Add your allowed host here
  },
})
