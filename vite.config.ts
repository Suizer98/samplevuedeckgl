import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({ typescript: true, vueTsc: true }),
    vuetify({
      autoImport: true
    })
  ],
  server: {
    port: 3000
  }
})
