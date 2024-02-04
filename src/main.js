//Every vue application starts by creating a new application instance with the createApp function:
import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')



//ROUTER 
//import router is step 2, use method imports the object in inex.js file 

//The mount method should always be called after all app configurations and asset registrations are done. Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance


//An application instance won't render anything until its .mount() method is called. It expects a 'container' argument, which can either be an actual DOM element or a selector string. The app.mount('#app') below is connected to the html file.


//The object we are passing into createApp is in fact a component ('App' just like in react). Every app requires a 'root component' that can contain other components as its children.
//If you are using single-file components (we are), we typically import the root component from another file (we do this on line 3)
// Note: Lines 2-4, 10, 13, and 15 were auto created when the vue app was created. 
// More Notes:
// The composition API, which is new to Vue 3 improves on reusability, organization and readability. It does this by giving us a new setup() function
// In vue 3, you can have multiple root elements side by side. Ex: 
//  <template>
//      <div>
//          <p>Hello world</p>
//      </div>
//      <div>
//          <p>Hello again</p>
//      </div>
//  </template>
// 
// when creating a click event handler, like in react onClick, in Vue, you can use two different syntaxes:
// <button v-on:click="handleClick">Click me </button> or <button @click="handleClick"></button>
// 
// 
// 
// 
// 
// 
