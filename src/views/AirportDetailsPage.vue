<template>
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
        <div class="details-container">
          <div class="buttons-container">
            <router-link to="/add-review">
                <button class="link add-review" id="add-review">Add Review</button>
            </router-link>
            <router-link to="/">
                <button class="home-button-details-page link">Home</button>
            </router-link>
          </div>
            <select class="details-dropdown-menu" v-model="categories" @change="filterByCategory">
                <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup>

const categories = ['Security', 'Restaurants', 'General', 'Arrivals/Departures', 'Ammenities', 'Accessibility']

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