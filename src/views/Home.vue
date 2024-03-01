<template >
  <AirportHeader/>
    <img src="/Screenshot 2024-02-27 at 4.07.11 PM.png" alt="runway-logo" class="logo"/>
    <div class='buttons'>
        <button class="login-button" v-if="!showLoginForm && !showCreateAccountForm" @click="showLoginForm = true" style="text-decoration: none;">Login</button>
        <button class="createaccount-button" v-if="!showCreateAccountForm && !showLoginForm" @click='handleNewAccount' style="text-decoration: none;">Create New Account</button>
     </div>
    <h2 class="home-sentence">Authentic reviews from the nation's leading airports.</h2>
    <p>Discover Your Oasis: Choose Your Destination of Comfort</p>

    <Login class="login-words" v-if="showLoginForm" @handleLogin="onHandleLogin" @close="closeLoginForm" />
    <CreateAccount v-if="showCreateAccountForm" @close="closeCreateAccountForm"/>
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
let currentUser = ref(JSON.parse(localStorage.getItem('currentUser')));

//computed - any variable you want it to be reactive (has to have some sort of calculation) 
//ref - simple , true or false

const showAirportDropdown = computed(() => !showLoginForm.value);

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
                        currentUser = element;
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

const closeCreateAccountForm = () => {
  showCreateAccountForm.value = false
}

</script>

<style scoped>
/* scoped - means it only apply on this component */
    button, h2 {
        font-family: 'Source Serif 4', serif;
        font-weight: 500;
    }
    .buttons {
        position: fixed;
        top: 10px;
        right: 50px;
        display: flex;
        gap: 50px    
        }
    p {
        font-family: 'Source Serif 4', serif;
        font-size: 20px;
    }
</style>