import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //持久化

import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives/index' // 自定义指令

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
