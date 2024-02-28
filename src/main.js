import './assets/styles.css'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from "vue-toastification";


const app = createApp(App)
app.use(router)
app.use(Toast, {
    // Setting the global default position
    position: POSITION.BOTTOM_LEFT
});
app.mount('#app')

