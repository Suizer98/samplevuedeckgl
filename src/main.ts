// src/main.ts
import { createApp } from 'vue'

import App from './App.vue'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
