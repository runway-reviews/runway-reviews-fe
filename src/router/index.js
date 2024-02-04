import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AirportDetailsPage from '../views/AirportDetailsPage.vue'


const router = createRouter({
  //creates web history to click forward and back to go to previous routes
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/airport/:airportName',
      name: 'airportName',
      component: AirportDetailsPage
    }
  ]
})

export default router

//this is where we setup all our different routes, so step 1 of setting up route
//why doesthe guys have folders of View

//Why are there duplicates on the home page?

