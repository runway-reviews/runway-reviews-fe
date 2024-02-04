import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AirportDetailsPage from '../views/AirportDetailsPage.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  //creates web history to click forward and back to go to previous routes
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
    }
  ]
})

export default router



