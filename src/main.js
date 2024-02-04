//Every vue application starts by creating a new application instance with the createApp function:
import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')

