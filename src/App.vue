

<template>
<!-- The template section defines the structure of the component's HTML
 -->

 <!-- this includes an id 'nav' containing a router-link and a router-view. The router-link: is dynamically bound to the airportName variable using :to="{name: airportName}". This means the route navigation will be to the route with the name equal to the value of airportName. -->
  <div id="nav">
    <!-- Line 11: is a Vue Router component called router-link. It is used for navigation within app. The :to attribute is a binding that determines the target route for the link. In this case, it's using an object syntax with name: airportName. Similar to Route for react!-->
    <router-link :to="{name: airportName}"></router-link>
  </div>
  <!-- placeholder (where the content associated with the current route will be rendered) -->
  <router-view />

  <!-- 
//section is where you define the behavior and logic of your component. It contains the JavaScript code that determines how the component functions.

// script setup section is part of the new SFC in Vue 3 (more concise and organized code)
//In Vue 3, the script setup syntax simplifies the way components are written by combining the setup function and component options into a more concise structure. With script setup, you don't need to explicitly define and return options like data, methods, etc. Instead, the properties defined within the script setup are automatically exposed to the template:
//Vue 2:
//<script>
// export default {
//   data() {
//     return {
//       airportName: '',
//     };
//   },
// };
// </script>

//creating a state with Vue (aka a reactive reference to a value) syntax
 -->
</template>

<script setup>
  import { ref } from 'vue'

  const airportName = ref('');
</script>
