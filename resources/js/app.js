import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import Index from './Index.vue'
import './bootstrap'

createApp(Index).use(router).use(store).mount('#app')
