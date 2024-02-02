<template class="main">
  <div>
    <!-- <Header /> -->
    <router-view></router-view>
     <AirportDropdown />
    <!-- <AirportDetailsPage /> -->
  </div>
</template>


<script >
  import Header from './components/Header.vue';
  import AirportDropdown from './components/AirportDropdown.vue';
  import AirportDetailsPage from './components/AirportDetailsPage.vue';

  export default {
    components: {
      Header,
      AirportDropdown,
      AirportDetailsPage
    }
  }

</script>