
<template>
  <AirportHeader  />
    <button class="login-button" v-if="!showLoginForm" @click="showLoginForm = true" :showLoginForm="showLoginForm" style="text-decoration: none;">Login</button>
       <!-- 
        - v-if="!showLoginForm": This is a conditional rendering directive. It means that the button will only be rendered if showLoginForm is false.
        so if true:
        - @click="showLoginForm = true": This is an event handler. When the button is clicked, it sets the value of showLoginForm to true.
        - :showLoginForm="showLoginForm": This is a binding that binds the value of showLoginForm to the showLoginForm property of the button so if that value changes, it updates and binds it to the button. However, in this case, it seems unnecessary, and you can remove it without affecting the functionality. -->

    <Login class="login-words" v-if="showLoginForm" @handleLogin="onHandleLogin" @close="closeLoginForm" />
         <!-- 
            v-if="showLoginForm": Another conditional rendering directive. It means that the Login component will only be rendered if showLoginForm is true.

            @handleLogin="onHandleLogin": This is a custom event binding. It listens for the handleLogin event emitted by the Login component and calls the onHandleLogin method when the event occurs.

            @close="closeLoginForm": Another custom event binding. It listens for the close event emitted by the Login component and calls the closeLoginForm method when the event occurs.
         -->

        <!-- In vue you can custom your own events and choose their names:
         In Vue.js, you can create custom events and choose the names for both the event listener in the template (using @eventListenerName or v-on:eventListenerName) and the method that handles the event in the script setup block. The convention is to prefix the method name with "on" followed by the event name, but you have flexibility in choosing names that make sense for your application.
         -->
         <!-- @handleLogin:
         @handleLogin: Shorthand for v-on:handleLogin in the template, listening for the custom event.

        onHandleLogin: The method in the script setup block that handles the "handleLogin" event.
        However, you could choose other names that make sense in the context of your application. The important thing is to be consistent and make your code readable and maintainable.
          -->

    <AirportDropdown v-if="showAirportDropdown" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null"/>
       <!-- 
        - if showAirportDropdown is true (!showLoginForm.value which is false)
        - :currentUser - bind the value of currentUser to the currentUser prop of AirportDropdown
        -  if currentUser is defined and not an empty object, it is passed as a prop to AirportDropdown. Otherwise, null is passed.
        -->
</template>

<script setup>
import AirportHeader from '../components/AirportHeader.vue'
import AirportDropdown from '../components/AirportDropdown.vue'
import Login from '../components/Login.vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { ref, computed } from 'vue'

const showLoginForm = ref(false);
const toast = useToast();
let currentUser = ref({});

// computed: function provided by Vue.js to create a computed property. 
// - Computed properties are used to derive a value based on other reactive properties, and they automatically update when those dependencies change.
//If showLoginForm.value is true, then !showLoginForm.value is false.

const showAirportHeader = computed(() => !showLoginForm.value);
const showAirportDropdown = computed(() => !showLoginForm.value);

const onHandleLogin = (userInputtedValues) => {
    return fetch('https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .then(data => {
            const userAndPasswordStorage = data.data;
            // it's an object.. how is it passed in?
            if (userInputtedValues.text === '' || userInputtedValues.password === '') {
                //toast is just a way to alert user 
                toast.error('Both inputs must be filled out');
            } else {

                let loggedIn = false; 
                userAndPasswordStorage.forEach(element => {
                    if (element.attributes.username === userInputtedValues.text && element.attributes.password_digest === userInputtedValues.password) {
                        currentUser = element;
                        loggedIn = true;
                        closeLoginForm();
                    }
                });
                if (loggedIn) {
                    toast.success('Successfully logged in!');
                    localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
                    //localStorage is a way to persist data locally in the user's browser. It's part of the Web Storage API, providing a simple key-value store that allows you to store data on the client-side.


                    // uses the localStorage Web Storage API to store the currentUser data in the browser's local storage.
                    //localStorage - webpage API in javascript - a way to sstore key/value pairs in web browser witho no expiration time. Data here persists even when browser closes and reopens.

                    // - setItem: This method is used to add a key-value pair to the local storage.
                    // - 'currentUser': This is the key under which the data will be stored. In this case, the key is set to 'currentUser'.
                    // - JSON.stringify(currentUser.value): This is the value associated with the key. It converts the JavaScript object currentUser.value to a JSON string.
                    // Local storage can only store string key-value pairs, so using JSON.stringify is a common practice to serialize objects before storing them.
                } else {
                    toast.error('Username or Password is incorrect');
                }
            }
        });
}


//why is showLoginForm.value turning to false? to not show the log in form
const closeLoginForm = () => {
  showLoginForm.value = false
}

</script>
