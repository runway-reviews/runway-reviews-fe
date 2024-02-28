<template>
  <AirportHeader  />
    <img src="/Screenshot 2024-02-27 at 4.07.11 PM.png" alt="runway-logo" class="logo"/>
    <button class="login-button" v-if="!showLoginForm" @click="showLoginForm = true" style="text-decoration: none;">Login</button>
    <p class="home-sentence">Honest reviews from the most popular airports in the country</p>
    <Login class="login-words" v-if="showLoginForm" @handleLogin="onHandleLogin" @close="closeLoginForm" />
    <AirportDropdown v-if="showAirportDropdown" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null"/>
    <CarouselImages />
</template>

<script setup>
import AirportHeader from '../components/AirportHeader.vue'
import AirportDropdown from '../components/AirportDropdown.vue'
import Login from '../components/Login.vue'
import CarouselImages from '../components/CarouselImages.vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { ref, computed } from 'vue'


const showLoginForm = ref(false);
const toast = useToast();
let currentUser = ref(JSON.parse(localStorage.getItem('currentUser')));


// const showAirportHeader = computed(() => !showLoginForm.value);
const showAirportDropdown = computed(() => !showLoginForm.value);

const onHandleLogin = (userInputtedValues) => {
    return fetch('https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .then(data => {
            const userAndPasswordStorage = data.data;
            if (userInputtedValues.text === '' || userInputtedValues.password === '') {
                toast.error('Both inputs must be filled out');
            } else {
                let loggedIn = false; 
                userAndPasswordStorage.forEach(element => {
                    if (element.attributes.username === userInputtedValues.text && element.attributes.password_digest === userInputtedValues.password) {
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

</script>
