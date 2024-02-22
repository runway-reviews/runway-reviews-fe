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
                <!-- v-model = (like updating state) two-way binding directive that creates a binding on an input, textarea, or select element. It allows you to bind the value of an input element to a variable in the Vue instance. With v-model, changes to the input element are reflected in the associated variable, and changes to the variable are reflected in the input element. -->
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
            <!-- @click.prevent="login": This attaches an event listener to the button's click event. The .prevent modifier is used to call event.preventDefault() internally. It prevents the browser's default behavior for the click event, which can be useful, for example, when submitting forms to prevent the page from reloading.  -->
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

//define reactive variables
const text = ref('')
const password = ref('')

// Define the emit function for custom events:
// This line defines the emit function, which is used to emit custom events. In this case, it specifies that the component can emit two events: 'handleLogin' and 'close' which is used in Home.vue in Login component calling: @handleLogin="onHandleLogin" @close="closeLoginForm
const emit = defineEmits(['handleLogin', 'close']);
// Use the Toast plugin for notifications

const toast = useToast();

//// Define props for the component
// Prop Typing in Vue:
// Yes, you are correct. The line const props = defineProps({ showLoginForm: { type: Boolean, required: true } }) is a way of defining props for a component in Vue. In Vue 3, the defineProps function is used in the <script setup> block to declare and type-check the props that a component expects to receive.

// In this case:

// showLoginForm is a prop of type Boolean.
// required: true indicates that the prop is required, meaning that the parent component must provide a value for this prop.
// This helps with type-checking and ensures that the component is used correctly by the parent, providing clear documentation on the expected props.
const props = defineProps({
    showLoginForm: {
        type: Boolean,
        required: true
    }
})


//Emits =  emit function is a way to trigger custom events from a child component that can be listened to by a parent component. It's part of the communication between child and parent components in Vue.js.

const login = () => {
  //creates userInputtedValues object
    const userInputtedValues = {
        text: text.value,
        password: password.value
    }
    // Emits the 'handleLogin' event with userInputtedValues
    emit('handleLogin', userInputtedValues)
  }

const closeLogin = () => {
  //  Emits the 'close' event
    emit('close')
}
//login function gathers user-inputted values, creates an object (userInputtedValues), and emits the 'handleLogin' event with that object as the payload ("payload" typically refers to the data or information that is transmitted over a network or passed as an argument to a function.)
// closeLogin function emits the 'close' event without any payload.

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