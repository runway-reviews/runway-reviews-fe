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
        <button @click.prevent="login">Login</button>
        <button>Create Account</button>
    </form>
    <router-link to="/">
        <button>Back to Home</button>
    </router-link>
</template>

<script setup>
import AirportHeader from './AirportHeader.vue'
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
// import { defineProps } from 'vue'

const text = ref('')
const password = ref('')
const emit = defineEmits(['handleLogin']);
const toast = useToast();

const login = () => {
    // if(!text.value || !password.value) {
    //     console.log('should be toasting')
    //     toast.error('Both fields must be filled')
    // }

    const userInputtedValues = {
        text: text.value,
        password: password.value
    }
    emit('handleLogin', userInputtedValues)
  }

const createAccount = () => {
    return fetch('https://7deb554e-bb6e-4022-abe6-7d23f9c611bc.mock.pstmn.io/api/v0/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if(!response.ok) {
            console.log('error')
        } 
        return response.json()
    })
    .then(data, console.log(data))
}

</script>