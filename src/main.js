import './assets/styles.css'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from "vue-toastification";
import { Carousel, Slide  } from 'vue3-carousel';
// import VueCarousel from 'vue-carousel';


const app = createApp(App)
app.use(router)
app.use(Toast, {
    // Setting the global default position
    position: POSITION.BOTTOM_LEFT
});
// app.use(VueCarousel);
app.component('Carousel', Carousel);
app.component('Slide', Slide);
app.mount('#app')

