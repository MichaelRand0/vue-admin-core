import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import '@fontsource/roboto'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/600.css'

const app = createApp(App)

app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
