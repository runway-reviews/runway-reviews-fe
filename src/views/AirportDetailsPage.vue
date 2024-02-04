<template>
    <h1>{{ $route.params.airportName }} </h1>
    <router-link to="/add-review">
        <button id="add-review">Add Review</button>
    </router-link>
    <router-link to="/">
        <button class="home-button">Home</button>
    </router-link>
    <select v-model="categories" @change="filterByCategory">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
</template>

<script setup>

const categories = ['Security', 'Restaurants', 'General', 'Arrivals/Departures', 'Ammenities', 'Accessibility']

</script>

<style setup>
  .home-buton {
    border: 0px;
  }
</style>