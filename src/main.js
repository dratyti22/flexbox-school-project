import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/main.css'

const app = createApp(App)
app.use(store)
app.mount('#app')
app.config.devtools = true
window.__VUE_DEVTOOLS_GLOBAL_HOOK__?.emit?.('init', app)
