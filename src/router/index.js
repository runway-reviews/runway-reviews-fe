// Import necessary functions from Vue Router
//createRouter: This function is used to create a new router instance.
//createWebHistory: This function is used to create a history mode that leverages the browser's history.pushState API to achieve navigation without page reloads (so when you push a new state using history.pushState, it doesn't trigger a full page reload)
//In the context of Vue Router and createWebHistory, this means that the router is using the browser's history.pushState API to manage navigation. Instead of traditional full-page reloads when navigating between pages.

//Pushing State:
// When you navigate to a new route using Vue Router's push method or by clicking on links with router-link, it uses history.pushState to add a new entry to the browser's history stack.


import { createRouter, createWebHistory } from 'vue-router';

// Import Vue components for each route
import AirportDetailsPage from '../views/AirportDetailsPage.vue';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import AddReview from '../views/AddReview.vue';

// Create a new router instance
const router = createRouter({
  // Create web history to enable navigation with browser history:
  //createRouter function creates a router instance, and the options passed to it configure how the router will behave. The history option, in particular, determines the mode of history management, and in this case, it's set to createWebHistory for navigation without page reloads using the browser's history.pushState API.
  history: createWebHistory(import.meta.env.BASE_URL),

  // history: This is an option in the configuration object passed to createRouter. It specifies the mode of history management for the router.

  // createWebHistory: This is a function provided by Vue Router for creating a history instance that uses the browser's History API. It enables navigation without full page reloads.

  // import.meta.env.BASE_URL: This is an expression that provides the base URL for the application. It is used as the base for all relative URLs in your application. For example, if your application is hosted at https://example.com/myapp/, import.meta.env.BASE_URL will be /myapp/.
  // Define the routes for the application

  //The term "configure" is used because you are setting up the configuration for the router. The history option is being configured with the createWebHistory function, and the import.meta.env.BASE_URL is part of that configuration, specifying the base URL for the application.
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/airport/:airportName',
      name: 'airportName',
      component: AirportDetailsPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-review',
      name: 'addReview',
      component: AddReview
    }
  ]
});

// Export the router instance to be used in the main.js file
export default router;
