<template>
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
        <p v-if="currentUser">Current User: {{ currentUser.attributes.username }}</p>
        <div class="details-container" :style="{height: showReviewForm ? '0vh' : '5em' }">
          <div class="buttons-container" v-if="!showReviewForm" >
            <button class="link add-review" id="add-review" style="text-decoration: none;" @click="handleAddReview"  >Add Review</button>
            <router-link to="/">
                <button class="home-button-details-page link" style="text-decoration: none;">Home</button>
            </router-link>
          </div >
            <select class="details-dropdown-menu" v-model="categories" @change="filterByCategory" v-if="!showReviewForm">
                <option v-for="category in categories" :key="category" :value="category" >
                    {{ category }}
                </option>
            </select>
        </div>
        <AddReview v-if="showReviewForm" @close="closeReviewForm"/>
    </div>
</template>

<script setup>
import AddReview from './AddReview.vue';
import { ref } from 'vue'
import { useToast } from 'vue-toastification'



const categories = ['Security', 'Restaurants', 'General', 'Arrivals/Departures', 'Ammenities', 'Accessibility']
const showReviewForm = ref(false);
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const toast = useToast();



const closeReviewForm = () => {
    showReviewForm.value = false
}

const handleAddReview = () => {
    if (currentUser) {
        showReviewForm.value = true;
    } else {
        toast.warning('You must be logged in to add a review!');
    }
}

</script>

<style setup>
  
  .details-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5em;
    justify-content: space-between;
  }

  .details-dropdown-menu {
    width: 20em;
    height: 2.2em;
  }

  .link {
    font-size: 1.2em;
    border: 0;
    font-size: 1.3em;
  }
 
.buttons-container {
  display: flex;
  width: 16.4em;
  justify-content: space-between;
}

.home-button-details-page {
  width: 6em;
}

.link:hover {
  cursor: pointer;  
  transform:scale(1.3); 
  text-decoration: underline;
}

</style>