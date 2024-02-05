import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from "vue-toastification";

const app = createApp(App)
app.use(router)
app.use(Toast, {
    // Setting the global default position
    position: POSITION.TOP_LEFT
});
app.mount('#app')

