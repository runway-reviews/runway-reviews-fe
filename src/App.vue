<template>
  <div id="nav">
    <router-link :to="{name: airportName}"></router-link>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
const airportName = ref('');
//create a ref for an empty string for airportName
//Modal - how to make a modal in vue for add review popup or use router to navigate to a route
</script>