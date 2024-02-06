<template>
    <form>
      <div class="home-create-account-container">
        <router-link to="/">
          <button @click="login" class="home-login">Home</button>
        </router-link>
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
        <button @click.prevent="login" class="login-on-page">Log In</button>
    </form>
</template>

<script setup>
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

<style>
  form {
    display: flex;
    align-items: center;
    background-color: white;
    outline: 2px solid black;
  }

  .home-login {
    display: flex;
    font-size: 1.2em;
    height: 2em;
    width: 4em;
    background-color: white;
    border: 0;
    text-decoration: underline;
  }

  .create-account {
    display: flex;
    border: 0;
    background-color: white;
    text-decoration: underline;
    font-size: 1.2em;
  }

  .home-login:hover, .create-account:hover {
    cursor: pointer;
    color: white;
    background-color: green;
    text-decoration: underline;
    transform:scale(1.3); 
  }

 .input-box {
  width: 15em;
  height: 2em;
 }

.username-container {
  display: flex;
  justify-content: space-between;
  width: 20em;
  margin-top: -2em;
}

.password-container {
  display: flex;
  justify-content: space-between;
  width: 20em;
  margin-top: -4em;
}

.home-create-account-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 16em;
}

.username-label-container {
 display: flex;
 flex-direction: column;
 justify-content: center;
}

.password-label-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-on-page {
  width:  10em;
  font-size: 1.2em;
  height: 2em;
  color: white;
  background-color: green;
  text-decoration: underline;
  border-radius: 6px;
  border: 0;
}

.login-on-page:hover {
  cursor: pointer;
  transform:scale(1.3); 
}

</style>