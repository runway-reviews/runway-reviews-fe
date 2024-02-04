<template>
  <div id="nav">
    <router-link :to="{name: airportName}"></router-link>
    <button v-if="!loginPressed">
      <router-link to="/login" @click="handleLogin" :handleLogin="handleLogin">Login</router-link>
    </button>
  </div>
  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue'


const airportName = ref('');
const login = ref('');
const loginPressed = ref(false);

//This function removes the Login button from the login page otherwise it will show up 
const handleLogin = () => {
  if(loginPressed === true) {
    loginPressed.value = false
  } else {
    loginPressed.value = true

  }

}


//create a ref for an empty string for airportName
//Modal - how to make a modal in vue for add review popup or use router to navigate to a route
</script>