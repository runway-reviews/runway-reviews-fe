<template>
  <div class="create-login-container">
    <form class="create-account-form">
      <!-- close button  -->
        <button @click="closeCreateLogin" class="close-login" style="text-decoration: none;">✖️</button>
      <div class="create-username-container">
        <div class="username-label-container">
          <label class="username-label">Create Username: </label>
        </div>
        <input 
          type="text"
          placeholder="Enter username"
          name="newUsername"
          v-model="newUsername"
          id="newUsername"
          class="input-box"
        />
      </div>
      <div class="create-password-container">
        <div class="password-label-container">
          <label>Create Password:</label>
        </div>
        <input 
          type="text"
          placeholder="**********************"
          name="newPassword"
          v-model="newPassword"
          id="newPassword"
          class="input-box"
        />
      </div>
      <div class="create-email-container">
        <div class="email-label-container">
          <label>Enter Email:</label>
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
      <!-- <button @click.prevent="login" class="login-on-page" style="text-decoration: none;">Submit</button> -->

      <router-link to="/">
            <button class="submit-account" style="text-decoration: none;" @click="addNewAccount">Submit</button>
        </router-link>
    </form>
  </div>
</template>


<script setup>
    // import { l } from 'vite/dist/node/types.d-jgA8ss1A'
import { ref, defineEmits, defineProps } from 'vue'
    import { useToast } from 'vue-toastification'
    import 'vue-toastification/dist/index.css'

    // const addUsers = ref([])
    const newUsername = ref('')
    const newPassword = ref('')
    const email = ref('')
    // const emit = defineEmits('createLogin') do I need emits?
    const emit = defineEmits(['close']);
    const toast = useToast();

    // const props = defineProps({
    //     showCreateAccountForm: {
    //         type: Boolean,
    //         required: true
    //     }
    // })

    // const newUserInformation = {
    //     newUsername: newUsername.value,
    //     newPassword: newPassword.value,
    //     email: email.value
    // }

    const addNewAccount = () => {
        const newAccount = {
                "username": newUsername.value,
                "email": email.value,
                "password": newPassword.value
            }
        console.log(newAccount, 'newAccount')
        submitAccount(newAccount);
        // closeCreateAccountForm();
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
        .then(newUserData => {
        console.log(newUserData, 'newUserData here 1st')
        // const newUserInfoStorage = data.data;
        if (newAccount.username === '' || newAccount.password === '' || newAccount.email === '') {
            toast.error('All inputs must be filled out');
        } else {
            closeLogin()
            toast.success('User account created successfully!');
            } 
        })
    }

    //where is close coming from?
    const closeLogin = () => {
        emit('close')
    }

    // const closeCreateAccountForm = () => {
    //     props.showCreateAccountForm.value = false;
    // }
</script>

<style>
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
    background-color: white;
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
    margin-top: -2em;
    }

    .create-password-container {
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
</style>