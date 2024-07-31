import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), checker({ typescript: true, vueTsc: true })],
  server: {
    port: 3000
  }
})
