<template>
    <button class="login-button" @click="showLoginForm = true">Login</button>
    <Login class="login-words" v-if="showLoginForm" @handleLogin="onHandleLogin" />
    <AirportHeader v-if="showAirportHeader" />
    <AirportDropdown v-if="showAirportDropdown" />
</template>

<script setup>
import AirportHeader from '../components/AirportHeader.vue'
import AirportDropdown from '../components/AirportDropdown.vue'
import Login from '../components/Login.vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { ref, computed } from 'vue'

const login = ref('');
const showLoginForm = ref(false);
const toast = useToast();
let currentUser = ref({});

const showAirportHeader = computed(() => !showLoginForm.value);
const showAirportDropdown = computed(() => !showLoginForm.value);

const onHandleLogin = (userInputtedValues) => {
    return fetch('https://7deb554e-bb6e-4022-abe6-7d23f9c611bc.mock.pstmn.io/api/v0/users')
        .then(response => response.json())
        .then(data => {
            const userAndPasswordStorage = data.data;
            if (userInputtedValues.text === '' || userInputtedValues.password === '') {
                toast.error('Both inputs must be filled out');
            } else {
                let loggedIn = false; 
                userAndPasswordStorage.forEach(element => {
                    if (element.attributes.username === userInputtedValues.text && element.attributes.password === userInputtedValues.password) {
                        currentUser = element;
                        loggedIn = true;
                        console.log(currentUser)
                    }
                });
                if (loggedIn) {
                    toast.success('Successfully logged in!');
                } else {
                    toast.error('Username or Password is incorrect');
                }
            }
        });
}
</script>
