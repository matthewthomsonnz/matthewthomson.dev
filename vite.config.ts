import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
    server: {
    watch: {
      usePolling: true
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
