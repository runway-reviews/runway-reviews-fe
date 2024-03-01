

<template>
  <div id="nav">
    <router-link :to="{name: airportName}"></router-link>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
const airportName = ref('');

</script>