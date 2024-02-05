<template>
    <AirportHeader />
    <form>
        <label>Username</label>
        <input 
            type="text"
            placeholder="JohnDoe316"
            name="username"
            v-model="text"
            id="username"
        />
        <label>Password</label>
        <input 
            type="text"
            placeholder="******"
            name="password"
            v-model="password"
            id="password"
        />
        <button @click="handleLogin">Login</button>
        <button>Create Account</button>
    </form>
    <router-link to="/">
        <button>Back to Home</button>
    </router-link>
</template>

<script setup>
import AirportHeader from '../components/AirportHeader.vue'
import { ref } from 'vue'
import { defineProps } from 'vue'

const text = ref('')
const password = ref('')
const emit = defineEmits(['handleLogin'])

const handleLogin = () => {
    console.log('hello')
    fetch('https://api.api-ninjas.com/v1/airports?name=Denver', {
        method: 'GET',
        headers: {
            'X-Api-Key': 'JPmU5d23wQY1nxwdk73ZUVzBW8zoPxLqSDqax8f0',
            'Content-Type': 'application/json'
        },
    })
      .then(response => response.json()) 
      .then(data => {
        defineEmits('login', data)
      })
  }

</script>