import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '.', // This ensures relative paths are used for assets

  plugins: [react()],
})
