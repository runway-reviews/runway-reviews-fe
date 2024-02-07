<template>
    <form>
      <div class="home-create-account-container">
    <!-- <button class="create-account">Create Account</button> -->
     <router-link to="/" class="close-login-router">
      <button @click="closeLogin" class="close-login">✖️</button>
    </router-link>
      </div>
    <div class="username-container">
      <div class="username-label-container">
        <label class="username-label">Username</label>
      </div>
      <input 
            type="text"
            placeholder="username"
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
import { ref, defineEmits, defineProps } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const text = ref('')
const password = ref('')
const emit = defineEmits(['handleLogin', 'close']);
const toast = useToast();

const props = defineProps({
    showLoginForm: {
        type: Boolean,
        required: true
    }
})

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


const closeLogin = () => {
    // console.log(props.showLoginForm)
    emit('close')
}

</script>

<style>
  form {
    display: flex;
    align-items: center;
    background-color: white;
    outline: 2px solid black;
  }

  .close-login {
    position: absolute;
    top: 10px; 
    right: 10px; 
    font-size: 1.6em;
    height: 2em;
    width: 2em;
    background-color: white;
    border: 0;
    text-decoration: none;
  }

  .close-login-router {
    text-decoration: none;
  }

  .create-account {
    display: flex;
    border: 0;
    background-color: white;
    text-decoration: underline;
    font-size: 1.2em;
    margin-left: 48%;
  }

  .close-login:hover, .create-account:hover {
    cursor: pointer;
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
  width: 100%;
  text-decoration: none;
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