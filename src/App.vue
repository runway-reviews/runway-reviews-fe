
<template class="main">
  <Header />
  <AirportDropdown />
  <AirportDetailsPage />
</template>


<script >
  import Header from './components/Header.vue';
  import AirportDropdown from './components/AirportDropdown.vue';
  import AirportDetailsPage from './components/AirportDetailsPage.vue';

  export default {
    components: {
      Header,
      AirportDropdown,
      AirportDetailsPage,
    }
  }

</script>