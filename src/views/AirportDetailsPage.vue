<template>
    <h1>{{ $route.params.airportName }} </h1>
    <div class="details-container">
    <router-link to="/add-review">
        <div id="add-review">Add Review</div>
    </router-link>
    <router-link to="/">
        <div class="home-button">Home</div>
    </router-link>
    <select class="details-dropdown-menu" v-model="categories" @change="filterByCategory">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
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
    outline: 2px solid black;
  }

  .details-dropdown-menu {
    width: 19em;
    height: 1.6em;
  }
</style>