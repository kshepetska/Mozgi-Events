// main.js
import { createI18n } from 'vue-i18n'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import EN from '../public/locales/en/translation.json'
import RU from '../public/locales/ru/translation.json'

const i18n = createI18n({
  locale: 'RU',
  messages: {
    EN: EN,
    RU: RU,
  },
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
