<template>
  <div class="container">
    <form class="review-form" @submit.prevent="addNewReview">
        <button class="close-button" style="text-decoration: none;" @click="closeReview">✖️</button>
      <div class="item">
        <label class="review-label">Select a category:</label>
        <select class="login-selection" v-model="selectedCategory">
            <option>Security</option>
            <option>Restaurants</option>
            <option>Bathrooms</option>
            <option>Amenities</option>
            <option>Accessibility</option>
            <option>General</option>
        </select>
      </div>
      <div class="item-1">
        <label class="review-label">Write your review here:</label>
        <input 
        class="review-input"
        type="review"
        name="review"
        id="review"
        v-model="reviewValue"
      />
      <!-- <router-link to="/airport/:airportName"> -->
        <button type="submit" class="submit-review" style="text-decoration: none;" @click="addNewReview">Submit</button>
      <!-- </router-link> -->
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    showReviewForm: {
        type: Boolean,
        required: true
    },
    currentAirportId: {
        type: String,
        required: true
    },
    currentUser : {
        type: Object,
        required: false
    },
    airportName : {
        type: String,
        required: true
    }
})

const router = useRouter(); // Use useRouter to access Vue Router instance
const reviews = ref([]);

const reviewValue = ref('')
const selectedCategory = ref('')
const emit = defineEmits(['close'])

const closeReview = () => {
    emit('close')
}

const addNewReview = () => {
    const newReview = {
          "airport_id": props.currentAirportId,
          "comment": reviewValue.value,
          "category": selectedCategory.value
        }
    console.log(newReview, "newReview")
    submitReview(newReview)
}

const submitReview = (newReview) => {
    return fetch(`https://runwayreviewsbe-4165084ad9d0.herokuapp.com/user/${props.currentUser.id}/review/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(response => {
        if(!response.ok) {
          //ERROR IS HERE? Not making a post?? 
            console.log('err')
        }
        return response.json()
    })
    // .then(emit('close'))
    .then(() => {
       fetchReviews(); 
       closeReview(); // Close the review form after successfully submitting the review
    })
    // .then(() => {
    //   const routeParams = {
    //         name: 'airportName', // Name of the route
    //         params: {
    //             airportName: props.airportName // Pass airportName as a route parameter
    //         },
    //         query: {
    //             id: props.currentAirportId, // Pass currentAirportId as a query parameter
    //             review: reviewValue.value // Pass the review as a query parameter
    //         }
    //     };
    //     router.push(routeParams);
    // })
}

  const fetchReviews = (currentAirportId) => {
    return fetch(`https://runwayreviewsbe-4165084ad9d0.herokuapp.com/reviews`)
    .then(response => response.json())
    .then(data => {
      console.log(data, 'data in fetchReviews')
        reviews.value = data.filter(element => {
            return element.attributes.airport_id == currentAirportId.value
        });

        console.log(reviews, 'data in fetchReviews')
    })
  }

  // Fetch reviews when the component is mounted
  // onMounted(() => {
  //   fetchReviews();
  // });
</script>



<style>
.container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 20vh; 
}

.review-form {
  padding: 2em;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  margin-top: 250px;
}


  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 40vh;
    padding: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    position: relative;
    z-index: 5;
    border-radius: 2%;
    padding-bottom: 5em;

  }

  .item,
  .item-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-selection {
    margin-top: 0.6em;
    font-size: 1.2em;
  }

  .review-input {
    margin-top: 0.6em;
    font-size: 1.2em;
    height: 5em;
  }

  .submit-review {
    padding: 0.3em;
    margin: 15px;
    border-radius: 10px;
    width: 9em;
    height: 2em;
    border: 0;
    color: white;
    background-color: green;
    font-size: 1.2em;
  }

  .submit-review:hover {
      cursor: pointer;  
      transform:scale(1.1);
  }

  .review-label {
    font-size: 1.2em;
  }

  .close-button {
    position: absolute;
    top: 10px; 
    right: 10px; 
    font-size: 1.6em;
    height: 2em;
    width: 2em;
    background-color: rgb(34, 33, 33);
    border: 0;
    text-decoration: none;
  }

  .close-button:hover {
    cursor: pointer;
    transform:scale(1.1); 
  }
  
</style>
