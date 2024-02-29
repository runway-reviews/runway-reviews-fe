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
                    placeholder="Enter Username..."
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
             <!-- :type: shorthand syntax for v-bind:type. It is used for dynamic binding of attributes in Vue.js. :type binds type attribute to the result of the expression on the right side of the equal sign. -->
            <!-- If showPassword is true, the type is set to 'text', revealing the actual characters in the password. If showPassword is false, the type is set to 'password', hiding the actual characters with asterisks. -->
            <input 
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter password..."
                name="password"
                v-model="password"
                id="password"
                class="input-box"
            />
        </div>
            <button @click.prevent="login" class="login-on-page" style="text-decoration: none;">Log In</button>
            <button @click.prevent='toggleShowPassword' class="login-on-page">Show Password</button>
        </form>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const text = ref('')
const password = ref('')
const showPassword = ref(false)
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

//when clicked, changes boolean value
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
}

</script>

<style>
.username-label,
.password-label, 
input, button {
  font-family: 'Source Serif 4', serif;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38vh;
}

  form {
    display: flex;
    align-items: center;
    margin-top: auto;
    border: 3px rgba(0, 0, 0, 0.85);
    background-color: rgba(0, 0, 0, 0.85);
    color: #F8F7F4;
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
    background-color: rgba(0, 0, 0, -0.3);
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
  width: 10em;
  font-size: 1.2em;
  height: 2em;
  color: white;
  background-color: green;
  border-radius: 6px;
  border: 0;
  margin-top: -66px !important;
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