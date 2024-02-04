<template>
    <div class="airport-details-page">
        <h1 class="airport-name">{{ $route.params.airportName }} </h1>
        <div class="details-container">
            <router-link to="/add-review">
                <button class="link" id="add-review">Add Review</button>
            </router-link>
            <router-link to="/">
                <button class="home-button link">Home</button>
            </router-link>
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
    height: 6em;
    justify-content: space-between;
  }

  .details-dropdown-menu {
    width: 19em;
    height: 1.6em;
  }

  .link {
    font-size: 1.2em;
  }
</style>