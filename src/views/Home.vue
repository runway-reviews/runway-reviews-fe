<template>
    <button v-if="!loginPressed" class="login-button">
      <router-link to="/login" @click="handleLogin" :handleLogin="handleLogin" class="login-words">Login</router-link>
    </button>
    <AirportHeader />
    <AirportDropdown />
</template>

<script setup>
  import AirportHeader from '../components/AirportHeader.vue'
  import AirportDropdown from '../components/AirportDropdown.vue'
  import { ref } from 'vue'

  const login = ref('');

</script>
