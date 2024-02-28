<!-- We want to move the invocation of translateText to be invoked when a dropdown is selected, so we create a dropdown with selected languages: English ('en'), Spanish ('es'), Mandarin (''), Tagalog (''), Vietnamese () These are the top most spoken languages in the US and since we are doing US airports... 
Create a dropdown, in the textTranslate function we need to add a parameter that acts as the language being translated
We also need to replace the airport api with a list of airports. 
-->

<template>
    <AirportHeader />
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
         <!-- Language dropdown for translation -->
        <div class="language-dropdown">
            <select v-model="selectedLanguage" @change="translateText">
                <!-- The values assigned to the :key and :value bindings in the <option> elements are referencing the constants en, es, zh, vi, and tl. -->
                <option :key="en" :value="en">English</option>
                <option :key="es" :value="es">Spanish</option>
                <option :key="zh" :value="zh">Mandarin</option>
                <option :key="vi" :value="vi">Vietnamese</option>
                <option :key="tl" :value="tl">Tagalog</option>
            </select>
        </div>

        <!-- Display user information if available -->
        <div v-if="currentUser" class="user-info">
            <div class="user-logo">
                <img src="/user.png" alt="User Logo" />
            </div>
                <p v-if="currentUser" class="current-user-info"> {{ currentUser.attributes.username }}</p>
        </div>

        <!-- Details container with buttons and review form -->
        <div class="details-container" :style="{height: showReviewForm ? '0vh' : '5em' }">
          <div class="buttons-container" v-if="!showReviewForm" >
            <!-- Button to add a review -->
            <button class="link add-review" id="add-review" style="text-decoration: none;" @click="handleAddReview" >
                <img class="add-icon" src="/add.png" />
                 {{translateButtonText.addReview}}
            </button>

             <!-- Router link to navigate back to the home page -->
            <router-link to="/">
                <button class="home-button-details-page link" style="text-decoration: none;">
                    <img src="/public/home.png" class="add-icon" />
                    {{translateButtonText.home}}
                </button>
            </router-link>
          </div >
        </div>

         <!-- AddReview component, shown when showReviewForm is true -->
        <AddReview v-if="showReviewForm" @close="closeReviewForm" :currentAirportId="currentAirportId" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null" />

        <div class="airport-reviews" v-if="reviewRender">
            <p v-for="data in reviewData" :key="data.id" 
            class="review-item">
            {{console.log(data, 'data in reviewData')}}
            {{console.log(reviewData, 'reviewData up here')}}
                <span class="category" >{{ data.attributes.category }}</span>
                {{ data.attributes.comment}}
                <!-- {{console.log(data, 'reviewData up here')}} -->
            </p>
        </div>
    </div>
</template>

<script>
import AddReview from './AddReview.vue';
import AirportHeader from '../components/AirportHeader.vue'
import { ref, watch, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default {
    components : {
        AddReview,
        AirportHeader
    },
    setup() {
        const router = useRouter();

        const showReviewForm = ref(false);
        const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')));
        const toast = useToast();
        const currentAirportId = ref(null);
        const reviewData = ref([])
        const reviewRender = ref(false)
        const selectedLanguage = ref(''); //falsy
        const en = 'en';
        const es = 'es';
        const zh = 'zh';
        const vi = 'vi';
        const tl = 'tl'; 
        const translateButtonText = ref({
            home: 'Home',
            addReview: 'Add Review',
        })

        // Close review form function
        const closeReviewForm = () => {
            showReviewForm.value = false
        }
        
        // Handle add review button click
        const handleAddReview = () => {
            if (currentUser && currentAirportId) {
                showReviewForm.value = true;
                reviewRender.value = false;
            } else {
                toast.warning('You must be logged in to add a review!');
            }
        }

         watch(selectedLanguage, async (newLanguage) => {
            if (newLanguage) {
                const apiKey = 'AIzaSyDIeM718Vp5-kwx6SM83aVOma6MTOueXzg';
                const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            q: ['Home', 'Add Review'], 
                            target: newLanguage,
                        }),
                    });

                    const buttonData = await response.json();
                    translateButtonText.value = {
                        home: buttonData.data.translations[0].translatedText,
                        addReview: buttonData.data.translations[1].translatedText,
                    };
                } catch (error) {
                    console.error('Error translating text:', error);
                    }
                } 
        });

        //I removed the invocation of this for now since we don't want to waste the characters
        async function translateText() {
    if (selectedLanguage.value) { //if user selects a language
        const apiKey = 'AIzaSyDIeM718Vp5-kwx6SM83aVOma6MTOueXzg';

        const textToTranslate = reviewData.value.map(element => ({
            category: element.attributes.category,
            comment: element.attributes.comment
        }));
        console.log(textToTranslate, 'input text')
        const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: textToTranslate.map(item => [item.category, item.comment]).flat(),
                    target: selectedLanguage.value,
                }),
            });
            const translatedData = await response.json();

            const translatedCategories = [];
            const translatedComments = [];

            console.log("translatedData",translatedData)
            translatedData.data.translations.forEach((translation, index) => {
                if (index % 2 === 0) {
                    translatedCategories.push(translation.translatedText);
                } else {
                    translatedComments.push(translation.translatedText);
                }
            });

            // Update the reviewData with translated categories and comments
            reviewData.value = translatedCategories.map((category, index) => {
                return {
                    attributes: {
                        category,
                        comment: translatedComments[index]
                    }
                };
            });
        } catch (error) {
            console.error('Error translating text:', error);
        }
    } else {
        // Set default language to English
        reviewData.value.forEach(element => {
            element.translatedCategories = element.attributes.category;
            element.translatedComments = element.attributes.comment;
        });
    }
}
        onMounted(async () => {
            await translateText();
            currentAirportId.value = router.currentRoute.value.query.id;

            fetch('https://runwayreviewsbe-4165084ad9d0.herokuapp.com/reviews')

                .then(response => {
                    if (!response.ok) {
                        console.log('error');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data, 'review data')
                    reviewData.value = data.filter(element => {
                        return element.attributes.airport_id == currentAirportId.value
                    });
                    reviewRender.value = true;
                });
        });


        return {
            reviewData, reviewRender, currentUser, showReviewForm, closeReviewForm, handleAddReview, currentAirportId, translateText, selectedLanguage, en, es, vi, tl, zh, translateButtonText
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