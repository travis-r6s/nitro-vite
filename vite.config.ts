import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173
  },
  appType: 'mpa',
  build: {
    manifest: true,
    rollupOptions: {
      input: './app/main.tsx',
    },
  },
  plugins: [
    react({}),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})
