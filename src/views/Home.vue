<template>
    <button v-if="!loginPressed" class="login-button">
      <router-link to="/login" @handleLogin="onHandleLogin" style="text-decoration: none;">Login</router-link>
    </button>
    <AirportHeader />
    <AirportDropdown />
</template>

<script setup>
  import AirportHeader from '../components/AirportHeader.vue'
  import AirportDropdown from '../components/AirportDropdown.vue'
  import { ref } from 'vue'

  const login = ref('');

  const onHandleLogin = (data) => {
    console.log('data', data)
  }



</script>