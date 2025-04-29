import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/', // <- Asegúrate que sea '/' o elimina esta línea si existe con otro valor
})