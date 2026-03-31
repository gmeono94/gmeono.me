import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import i18n from './i18n'
import App from './App.vue'

import 'primeicons/primeicons.css'
import './assets/styles/main.css'

const app = createApp(App)

app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false
    }
  }
})

app.mount('#app')
