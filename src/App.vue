<template class="main">
  <Header />
  <AirportDropdown />
  <div id="lottie-container"></div>
</template>


<script >
  import lottie from 'lottie-web'
  import Header from './components/Header.vue'
  import AirportDropdown from './components/AirportDropdown.vue'

  export default {
    components: {
      Header,
      AirportDropdown,
    },
    mounted() {
    lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './src/assets/runway.json', 
    });
  },
  }

</script>