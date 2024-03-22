<template>
    <AirportHeader />
    <img src="/Screenshot 2024-02-27 at 4.07.11 PM.png" alt="runway-logo" class="logo"/>
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
        <div v-if="currentUser" class="airport-details-user">
            <div class="user-logo">
                <img src="/user.png" alt="User Logo" />
            </div>
            <p v-if="currentUser"> {{ currentUser.attributes.username }}</p>
        </div>
        <div class="details-container" :style="{height: showReviewForm ? '0vh' : '5em' }">
            <div class="buttons-container" v-if="!showReviewForm" >
                <button class="link add-review" id="add-review" style="text-decoration: none;" @click="handleAddReview" >
                    <img class="add-icon" src="/add.png" />
                    {{translateButtonText.addReview}}
                </button>
                <router-link to="/">
                    <button class="home-button-details-page link" style="text-decoration: none;">
                        <img src="/home.png" class="add-icon" />
                        {{translateButtonText.home}}
                    </button>
                </router-link>
                <div class="language-dropdown">
                    <select v-model="selectedLanguage" @change="translateText">
                        <option :key="en" :value="en">English</option>
                        <option :key="es" :value="es">Spanish</option>
                        <option :key="zh" :value="zh">Mandarin</option>
                        <option :key="vi" :value="vi">Vietnamese</option>
                        <option :key="tl" :value="tl">Tagalog</option>
                    </select>
                </div>
          </div >
        </div>
        <AddReview v-if="showReviewForm" @close="closeReviewForm" :currentAirportId="currentAirportId" :currentUser="currentUser && Object.keys(currentUser).length > 0 ? currentUser : null" />

        <div class="airport-reviews" v-if="reviewRender">
            <p v-for="data in reviewData" :key="data.id" 
            class="review-item">
                <span class="category" >{{ data.attributes.category }}</span>
                {{ data.attributes.comment}}
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
        const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || null);
        const toast = useToast();
        const currentAirportId = ref(null);
        const reviewData = ref([])
        const reviewRender = ref(false)
        const selectedLanguage = ref(''); 
        const en = 'en';
        const es = 'es';
        const zh = 'zh';
        const vi = 'vi';
        const tl = 'tl'; 
        const translateButtonText = ref({
            home: 'Home',
            addReview: 'Add Review',
        })

        const closeReviewForm = () => {
            showReviewForm.value = false
            renderReviews();
        }
        
        const handleAddReview = () => {
            console.log(currentUser, 'current user in handle review')
            if (currentUser.value && currentAirportId) {
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

        async function translateText() {
            if (selectedLanguage.value) { 
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
                    translatedData.data.translations.forEach((translation, index) => {
                        if (index % 2 === 0) {
                            translatedCategories.push(translation.translatedText);
                        } else {
                            translatedComments.push(translation.translatedText);
                        }
                    });
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
                            reviewData.value.forEach(element => {
                                element.translatedCategories = element.attributes.category;
                                element.translatedComments = element.attributes.comment;
                            });
                        }
                    }

        onMounted(async () => {
            await translateText();
            currentAirportId.value = router.currentRoute.value.query.id;
            renderReviews()
        });

        const renderReviews = () => {
            fetch('https://runwayreviewsbe-4165084ad9d0.herokuapp.com/reviews')
                .then(response => {
                    if (!response.ok) {
                        console.log('error');
                    }
                    return response.json();
                })
                .then(data => {
                    reviewData.value = data.filter(element => {
                        return element.attributes.airport_id == currentAirportId.value
                    });
                    reviewRender.value = true;
            });
        }


        return {
            reviewData, reviewRender, currentUser, showReviewForm, closeReviewForm, handleAddReview, currentAirportId, translateText, selectedLanguage, en, es, vi, tl, zh, translateButtonText, renderReviews
        }
    }
}
</script>

<style setup>

.language-dropdown {
    font-size: 1.4em;
    border: 0;
    background-color: white;
    margin: 10px;
}

.change-language {
    color: gray;
    font-size: 10px;
}

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
    font-size: 1.3em;
    border: none;
    background-color: rgb(228, 78, 106);
    margin: 10px;
    border-radius: 10px;
    width: 10vw;
    box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.5);
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
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.5);
}

.airport-reviews {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    background-color: rgb(0, 0, 0);
    width: 80vw;
    margin: auto;
    margin-top: 40px;
    height: 40vh;
    opacity: .8;   
    overflow-y: auto;
    font-family: 'Nunito Sans', sans-serif;
    padding-left: 20px;
    color: white;
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


.airport-details-user {
    position: absolute;
    top: 50px;
    right: 30px;
    display: flex;
    align-items: center;
    background-color: rgb(68, 111, 204);
    font-family: 'Nunito Sans', sans-serif;
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

.must-login-review {
    color: black;
    font-family: 'Nunito Sans', sans-serif;
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