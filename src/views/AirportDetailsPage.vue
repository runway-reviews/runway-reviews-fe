<template>
    <AirportHeader />
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
        <div class="user-info">
            <div class="user-logo">
                <img src="/public/user.png" alt="User Logo" />
            </div>
                <p v-if="currentUser" class="current-user-info"> {{ currentUser.attributes.username }}</p>
        </div>
        <div class="details-container" :style="{height: showReviewForm ? '0vh' : '5em' }">
          <div class="buttons-container" v-if="!showReviewForm" >
            <button class="link add-review" id="add-review" style="text-decoration: none;" @click="handleAddReview" >
                <img class="add-icon" src="/public/add.png" />
                Add Review
            </button>
            <router-link to="/">
                <button class="home-button-details-page link" style="text-decoration: none;">
                    <img src="/public/home.png" class="add-icon" />
                    Home
                </button>
            </router-link>
          </div >
        </div>
        <AddReview v-if="showReviewForm" @close="closeReviewForm" :currentAirportId="currentAirportId" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null" />
        <div class="airport-reviews" v-if="reviewRender">
            <p v-for="data in reviewData" :key="data.id" class="review-item">
                <span class="category">{{ data.attributes.category }}</span>
                {{ data.attributes.comment }}
            </p>
        </div>
    </div>
</template>

<script>
import AddReview from './AddReview.vue';
import AirportHeader from '../components/AirportHeader.vue'
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default {
    components : {
        AddReview,
        AirportHeader
    },
    setup() {
        const router = useRouter();
    
        const categories = ['Security', 'Restaurants', 'General', 'Arrivals/Departures', 'Ammenities', 'Accessibility']
        const showReviewForm = ref(false);
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const toast = useToast();
        const currentAirportId = ref(null);
        const reviewData = ref([])
        const reviewRender = ref(false)
            
        const closeReviewForm = () => {
            showReviewForm.value = false
        }
        
        const handleAddReview = () => {
            if (currentUser && currentAirportId) {
                showReviewForm.value = true;
                reviewRender.value = false;
            } else {
                toast.warning('You must be logged in to add a review!');
            }
        }
        
        onMounted(() => { 
            currentAirportId.value = router.currentRoute.value.query.id
            fetch('https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/reviews')
                .then(response => {
                    if(!response.ok) {
                        console.log('error')
                    }
                    return response.json()
                })
                .then(data => {
                    reviewData.value = data.data.filter(element => element.attributes.airport_id == currentAirportId.value)
                    reviewRender.value = true
            })
        })
        return {
            reviewData, reviewRender, currentUser, showReviewForm, categories, closeReviewForm, handleAddReview, currentAirportId
        }
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
    font-size: 1.4em;
    border: 0;
    font-size: 1.3em;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    width: 10vw;
  }
 
.buttons-container {
  display: flex;
  justify-content: space-between;
}

.home-button-details-page {
  width: 6em;
}

.link:hover {
  cursor: pointer;   
  background-color: green;
  box-shadow: 0px 0px 10px 3px rgba(248, 246, 246, 0.5);
}

.airport-reviews {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    background-color: white;
    width: 80vw;
    margin: auto;
    margin-top: 40px;
    height: 40vh;
    opacity: .7;   
    overflow-y: auto;
    font-family: 'Nunito Sans', sans-serif;
    padding-left: 20px;
}

.add-icon {
    height: 2vh;
}

.add-icon:hover {
    color: white;
}

.review-item {
    text-align: left;
}


.user-info {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    background-color: rgb(187, 81, 63);
    color: rgb(0, 0, 0);
    width: 15vw;
    height: 5vh;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 3px rgba(248, 246, 246, 0.5);
}

.user-logo img {
    width: 30px;
    height: 30px;
    margin-right: 5px; 
    padding-left: 7px;
}

.current-user-info {
    margin: 0;
    font-size: 16px;
}

.category {
    font-weight: bold;
    background-color: rgb(0, 85, 50);
    color: white;
    padding: 4px;
    border-radius: 5px;
}

@media  screen and (max-width: 375px) {
  .airport-reviews {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    background-color: white;
    width: 80vw;
    margin: auto;
    margin-top: 40px;
    height: 100%;
  }
}

@media(max-width: 1400px ) {
    .add-review {
        width: 13vw;
    }
}

@media(max-width: 1110px ) {
    .add-review {
        width: 17vw;
    }
    .user-info {
        width: 21vw;
    }
}

@media(max-width: 850px ) {
    .add-review {
        width: 21vw;
    }
    .user-info {
        width: 20vw;
    }
}

@media(max-width: 768px ) {
    .user-info {
        width: 25vw;
        font-size: 14px;
    }
}


@media(max-width: 680px ) {
    .add-review {
        width: 28vw;
    }
    .user-info {
        font-size: 10px;
    }
}

@media(max-width: 720px) {
    .user-info {
        width: 24vw;
    }
    .current-user-info {
        margin: 0;
        font-size: 13px;
}
}

@media (max-width: 435px) {
    .user-info {
       height: 3vh;
       width: 35vw;
 
    }
    .current-user-info {
        font-size: 10px;
    }
    .add-review {
        width: 36vw;
        font-size: 20px;
    }
    .user-logo img {
        height: 2vh;
        width: 4vw;
    }
}

</style>