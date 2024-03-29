import { createRouter, createWebHistory } from 'vue-router';
// import { createStore } from 'vuex'
import AirportDetailsPage from '../views/AirportDetailsPage.vue';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import AddReview from '../views/AddReview.vue';
import CreateAccount from '../views/CreateAccount.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/create-account',
      name: 'createAccount',
      component: CreateAccount
    }
  ]
})

export default router



