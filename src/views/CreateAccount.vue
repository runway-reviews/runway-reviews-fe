<template>
  <div class="create-login-container">
    <form class="create-account-form">
        <button @click="closeCreateLogin" class="close-login" style="text-decoration: none;">✖️</button>
      <div class="create-username-container">
        <div class="username-label-container">
          <label class="username-label">Username: </label>
        </div>
        <input 
          type="text"
          placeholder="Enter username..."
          name="newUsername"
          v-model="newUsername"
          id="newUsername"
          class="input-box"
        />
      </div>
      <div class="create-password-container">
        <div class="password-label-container">
          <label>Password:</label>
        </div>
        <input 
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter Password..."
          name="newPassword"
          v-model="newPassword"
          id="newPassword"
          class="input-box"
        />
      </div>
      <div class="create-email-container">
        <div class="email-label-container">
          <label>E-mail:</label>
        </div>
        <input 
          type="text"
          placeholder="Enter valid email..."
          name="email"
          v-model="email"
          id="email"
          class="input-box"
        />
      </div>
      <div id="showPasswordContainer">
        <input type="checkbox" id="showPassword" v-model="showPassword">
        <label for="showPassword">Show Password</label>
      </div>
      <router-link to="/">
        <button class="submit-account-button" style="text-decoration: none; cursor: pointer;" @click="addNewAccount">Submit</button>
        </router-link>
        <!-- <button @click.prevent='toggleShowPassword' class="show-password-button">Show Password</button> -->
    </form>
  </div>
</template>


<script setup>
import { ref, defineEmits } from 'vue'
    import { useToast } from 'vue-toastification'
    import 'vue-toastification/dist/index.css'
    const newUsername = ref('')
    const newPassword = ref('')
    const showPassword = ref(false)
    const email = ref('')
    const emit = defineEmits(['close']);
    const toast = useToast();

    const addNewAccount = () => {
        const newAccount = {
                "username": newUsername.value,
                "email": email.value,
                "password": newPassword.value
            }
        submitAccount(newAccount);
    }

    const submitAccount = (newAccount) => {
        return fetch('https://runwayreviewsbe-4165084ad9d0.herokuapp.com/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAccount),
        })
        .then(response => {
        if(!response.ok) {
            console.log('err')
        }
        return response.json()
        })
        .then(() => {
        if (newAccount.username === '' || newAccount.password === '' || newAccount.email === '') {
            toast.error('All inputs must be filled out');
        } else {
            closeLogin()
            toast.success('User account created successfully!');
            } 
        })
    }

    const closeLogin = () => {
        emit('close')
    }

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    }

</script>

<style>

  #showPasswordContainer {
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

    .create-login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }

  .close-login {
      position: absolute;
      top: 10px; 
      right: 10px; 
      font-size: 1.6em;
      height: 2em;
      width: 2em;
      background-color: rgb(34, 33, 33);
      border: 0;
      text-decoration: none;
  }

  .close-login:hover, .create-account:hover {
    cursor: pointer;
    transform:scale(1.1); 
  }

    .create-username-container {
      display: flex;
      justify-content: space-between;
      width: 20em;
      margin-top: 2em;
    }
    
    .create-password-container, 
    .create-email-container  {
      display: flex;
      justify-content: space-between;
      width: 20em;
    }

    .username-label-container, .password-label-container, 
    .email-label-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    form {
      display: flex;
      align-items: center;
      margin-top: auto;
      border: 3px rgba(0, 0, 0, 0.85);
      background-color: rgba(0, 0, 0, 0.85);
      color: #F8F7F4;
    }

    .username-label-container, .password-label-container, 
    .email-label-container, input, button {
      font-family: 'Source Serif 4', serif;
    }

    .input-box {
      width: 15em;
      height: 2em;
    }

    button {
      margin-left: 100px;
    }

    .show-password-button, .submit-account-button {
      width: 10em;
      font-size: 1.2em;
      height: 2em;
      color: white;
      background-color: green;
      border-radius: 6px;
      border: 0;
      margin-top: 2em !important;
    }

     .show-password-button:hover, .submit-account-button:hover {
        cursor: pointer;
        transform:scale(1.1); 
     }

    @media screen and (max-width: 540px) {
      .create-username-container {
        display: flex;
        justify-content: space-between;
        width: 115%;
      }

      form {
        width: 70%;
      } 

      .create-password-container {
        width: 115%;
      }

      .input-box {
        width: 60%;
      }
    }

</style>