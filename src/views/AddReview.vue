<template>
  <div class="container">
    <form class="review-form">
        <button class="close-button link" style="text-decoration: none;" @click="closeReview">✖️</button>
      <div class="item">
        <label class="review-label">Select a category:</label>
        <select class="login-selection">
            <option>Security</option>
            <option>Restaurants</option>
            <option>Arrivals/Departures</option>
            <option>Amenities</option>
            <option>Accessibility</option>
        </select>
      </div>

        <div class="item-1">
          <label class="review-label">Write your review here:</label>
          <input 
            class="review-input"
            type="text"
            placeholder="review"
            name="review"
            id="review"
        />
        <router-link to="/">
            <button class="submit-review" style="text-decoration: none;" @click="addNewReview">Submit</button>
        </router-link>
        </div>
        
    </form>
  </div>
</template>


<script setup>
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps({
    showReviewForm: {
        type: Boolean,
        required: true
    },
    currentAirportId: {
        type: Number,
        required: true
    },
    currentUser : {
        type: Object,
        required: false
    }
})

const review = ref('')
const emit = defineEmits(['close'])

const closeReview = () => {
    emit('close')
}

const addNewReview = () => {
    console.log(props.currentUser, 'current user in add review')
    console.log(props.currentAirportId, 'airportId')
    // const newReview = {
    //     id: Date.now(),
    //     type: "review",
    //     attributes: {
    //         user_id: currentUser.id,
    //         airport_id: currentAirport.id,
    //         comment: review.value,
    //         category
    //     },
    //     relationships: {
    //         user: {
    //             data: {
    //                 id: currentUser.id,
    //                 type: 'user'
    //             }
    //         }
    //     }
    // }
}


const submitReview = (newReview) => {
    return fetch('https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(response => {
        if(!response.ok) {
            console.log('err')
        }
        return response.json()
    })
}


</script>



<style>

.container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 80vh; 
}

.review-form {
  padding: 2em;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}


  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    height: 50vh;
    padding: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    position: relative;
    z-index: 5;
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
    background-color: white;
    border: 0;
    text-decoration: none;
  }
</style>
