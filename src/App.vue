<template class="main">
  <Header />
  <AirportDropdown />
  <div id="nav">
    <router-link :to="{name: airportName}"></router-link>
  </div>
  <router-view />
</template>


<script setup>
  import Header from './components/Header.vue'
  import AirportDropdown from './components/AirportDropdown.vue'

</script>
