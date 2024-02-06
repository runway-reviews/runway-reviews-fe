<template>
    <AirportHeader />
    <form>
      <div class="home-create-account-container">
        <!-- <router-link to="/">
          <button @click="login" class="home-login">Home</button>
        </router-link> -->
    <button class="create-account">Create Account</button>
      </div>
    <div class="username-container">
      <div class="username-label-container">
        <label class="username-label">Username</label>
      </div>
      <input 
            type="text"
            placeholder="JohnDoe316"
            name="username"
            v-model="text"
            id="username"
            class="input-box"
        />
    </div>
    <div class="password-container">
      <div class="password-label-container">
        <label>Password</label>
      </div>
      
        <input 
            type="text"
            placeholder="**********************"
            name="password"
            v-model="password"
            id="password"
            class="input-box"
        />
    </div>
        <button @click.prevent="login" class="login-on-page">Login</button>
    </form>
</template>

<script setup>
import AirportHeader from './AirportHeader.vue'
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const text = ref('')
const password = ref('')
const emit = defineEmits(['handleLogin']);
const toast = useToast();

const login = () => {

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