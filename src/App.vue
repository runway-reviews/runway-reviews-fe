<template class="main">
  <Header />
  <AirportDropdown />
</template>


<script >
  import Header from './components/Header.vue'
  import AirportDropdown from './components/AirportDropdown.vue'

  export default {
    components: {
      Header,
      AirportDropdown,
    }
  }

</script>