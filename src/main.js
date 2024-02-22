
// Import the main styles for the application
import './assets/styles.css'

// Import the createApp function from Vue 3
import { createApp } from 'vue/dist/vue.esm-bundler'

// Import the root component of the application (App.vue)
import App from './App.vue'

// Import the router for handling navigation
import router from './router'

// Import Toast from vue-toastification for displaying toasts:
// hese lines import the Toast plugin from vue-toastification for displaying notifications/toasts. It also destructures the POSITION constant for specifying the default position of toasts.
import Toast, { POSITION } from "vue-toastification";

// Create a new Vue app instance linking it to the App component
const app = createApp(App)

// Use the Vue router in the app
app.use(router)

// Use the Toast plugin with global default position set to BOTTOM_LEFT
app.use(Toast, {
    // Setting the global default position
    position: POSITION.BOTTOM_LEFT
});

// Mount the app to the element with the id 'app' in the DOM
//
app.mount('#app')


//Vue Instance:

// A Vue instance is a essential/fundamental part of Vue.js applications.

//Vue Instance Creation:
// Vue instances are created using the createApp function provided by Vue 3.

// It's a way of creating reactive values (like state changes) that can be manipulated by data that's fetched in and functions we create that manipulate and update the reactive values to be used and displayed on the DOM. 

//Reactivity System:
// - A Vue instance is the heart of Vue.js applications, providing a way to reactively manage data changes.
// - Vue's reactivity system lets you define and watch data properties. When these properties change, connected components and the DOM automatically update.

//Data Management:
//  - In a Vue instance, you define data properties that represent the application's state.
// - Reactive values, like variables or objects, are created using ref or reactive from the Vue reactivity API.

//Functions and Methods:

//- Vue instances can have methods for performing actions or computations. These methods can modify data properties.
// - Lifecycle hooks in a Vue instance let you run code at specific stages of a component's life.

//Interaction with the DOM:

//- Vue instances are mounted to specific HTML elements using app.mount('#app').
// - Once mounted, the Vue instance makes the associated template reactive, updating it dynamically as data changes.

// The instance is mounted to a specific element in the HTML DOM using the app.mount('#app') syntax. In this case, the element with the id 'app' is specified as the mounting point for the Vue instance.