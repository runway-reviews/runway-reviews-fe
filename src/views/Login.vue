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
        <button>Login</button>
        <button>Create Account</button>
    </form>
    <router-link to="/">
        <button @click="handleLogin">Back to Home</button>
    </router-link>
</template>

<script setup>
import AirportHeader from '../components/AirportHeader.vue'
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
    handleLogin: {
        type: Function
    }
})

const text = ref('')
const password = ref('')

</script>