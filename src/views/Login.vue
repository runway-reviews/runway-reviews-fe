<template>
    <AirportHeader />
    <form>
      <div class="home-create-account-container">
        <router-link to="/">
        <button @click="handleLogin" class="home-login">Home</button>
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
        <button class="login-on-page">Login</button>
    </form>
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

<style>
  form {
    display: flex;
    align-items: center;
    outline: 2px solid red;
   transform: translate(25%, -10%);
   background-color: white;
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
  outline: 2px solid red;
  width: 20em;
  margin-top: -5em;
}

.password-container {
  display: flex;
  justify-content: space-between;
  outline: 2px solid red;
  width: 20em;
  margin-top: -5em;
}

.home-create-account-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 16em;
}

.username-label-container {
 outline: 2px solid purple;
 display: flex;
 flex-direction: column;
 justify-content: center;
}

.password-label-container {
  display: flex;
  outline: 2px solid green;
  flex-direction: column;
  justify-content: center;
}


</style>