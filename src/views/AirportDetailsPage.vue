<template>
    <h1>{{ $route.params.airportName }} </h1>
    <button id="add-review">Add Review</button>
    <router-link to="/">
        <button>Back to Home</button>
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

<!-- view folder is where all out routes files live -->