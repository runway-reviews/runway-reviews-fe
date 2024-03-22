<template >
    <AirportHeader/>
      <img src="/Screenshot 2024-02-27 at 4.07.11 PM.png" alt="runway-logo" class="logo"/>
      <div v-if="currentUser" class="user-info">
           <div class="user-logo">
               <img src="/user.png" alt="User Logo" />
           </div>
           <p v-if="currentUser" class="current-user-info"> {{ currentUser.attributes.username }}</p>
       </div>
      <div class='buttons'>
          <button class="login-button" v-if="!showLoginForm && !showCreateAccountForm && !currentUser" @click="showLoginForm = true" style="text-decoration: none;">Login</button>
          <button class="createaccount-button" v-if="!showCreateAccountForm && !showLoginForm && !currentUser" @click='handleNewAccount' style="text-decoration: none;">Create New Account</button>
          <button v-if="currentUser" class="logout-button" @click="logout">Log Out</button>
       </div>
      <h2 class="home-sentence">Authentic reviews from the nation's leading airports.</h2>
      <p v-if="!showLoginForm && !showCreateAccountForm">Select an airport from the dropdown below: </p>
      <Login class="login-words" v-if="showLoginForm" @handleLogin="onHandleLogin" @close="closeLoginForm" />
      <CreateAccount v-if="showCreateAccountForm" @close="closeCreateAccountForm"
      />
      <AirportDropdown v-if="showAirportDropdown && !showCreateAccountForm" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null"/>
      <CarouselImages v-if="!showLoginForm && !showCreateAccountForm" />

  </template>
  
  <script setup>
  import AirportHeader from '../components/AirportHeader.vue'
  import AirportDropdown from '../components/AirportDropdown.vue'
  import Login from '../components/Login.vue'
  import CreateAccount from './CreateAccount.vue'
  import CarouselImages from '../components/CarouselImages.vue'
  import { useToast } from 'vue-toastification'
  import 'vue-toastification/dist/index.css'
  import { ref, computed } from 'vue'
  
  
  const showLoginForm = ref(false);
  const showCreateAccountForm = ref(false);
  const toast = useToast();
  let currentUser = ref(JSON.parse(localStorage.getItem('currentUser' || null)));
  
  const showAirportDropdown = computed(() => !showLoginForm.value);
  
  const logout = () => {
    localStorage.removeItem('currentUser')
    currentUser.value = null; 
    toast.success('Successfully logged out!')
  }
  
  const onHandleLogin = (userInputtedValues) => {
      return fetch('https://runwayreviewsbe-4165084ad9d0.herokuapp.com/user')
          .then(response => response.json())
          .then(data => {
              console.log(data, 'data in handleLogin')
              const userAndPasswordStorage = data
              if (userInputtedValues.text === '' || userInputtedValues.password === '') {
                  toast.error('Both inputs must be filled out');
              } else {
                  let loggedIn = false; 
                  userAndPasswordStorage.forEach(element => {
                      if (element.attributes.username === userInputtedValues.text && element.attributes.password === userInputtedValues.password) {
                          currentUser.value = element;
                          loggedIn = true;
                          closeLoginForm();
                          localStorage.setItem('currentUser', JSON.stringify(currentUser.value))
                      }
                  });
                  if (loggedIn) {
                      toast.success('Successfully logged in!');
                      localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
                  } else {
                      toast.error('Username or Password is incorrect');
                  }
              }
          });
  }
  
  const closeLoginForm = () => {
    showLoginForm.value = false
  }
  
  const handleNewAccount = () => {
      showCreateAccountForm.value = true;
  }
  
  </script>

  
  <style scoped>
      button, h2 {
          font-family: 'Source Serif 4', serif;
          font-weight: 500;
      }
      .buttons {
          position: fixed;
          top: 10px;
          right: 50px;
          display: flex;  
          flex-direction: column;
          }
      p {
          font-family: 'Source Serif 4', serif;
          font-size: 20px;
      }




  </style>