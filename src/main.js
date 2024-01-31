//Every vue application starts by creating a new application instance with the createApp function:
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//The object we are passing into createApp is in fact a component ('App' just like in react). Every app requires a 'root component' that can contain other components as its children.
//If you are using single-file components (we are), we typically import the root component from another file (we do this on line 3)
// Note: Lines 2-4, 10, 13, and 15 were auto created when the vue app was created. 
const app = createApp(App)


app.use(router)

app.mount('#app')
