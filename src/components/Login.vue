<template>
    <div class="login-container">
        <form>
            <router-link to="/" class="close-login-router">
                <button @click="closeLogin" class="close-login" style="text-decoration: none;" >✖️</button>
            </router-link>
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
            <button @click.prevent="login" class="login-on-page" style="text-decoration: none;">Log In</button>
        </form>
    </div>
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

const closeLogin = () => {
    emit('close')
}


</script>

<style>

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

  form {
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 150px;
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

  .close-login:hover, .create-account:hover {
    cursor: pointer;
    transform:scale(1.1); 
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
  border-radius: 6px;
  border: 0;
}

.login-on-page:hover {
  cursor: pointer;
  transform:scale(1.1); 
}

@media screen and (max-width: 540px) {
  .username-container {
    display: flex;
    justify-content: space-between;
    width: 115%;
  }

  form {
    width: 70%;
  } 

  .password-container {
    width: 115%;
  }

  .input-box {
    width: 60%;
  }
}
</style>