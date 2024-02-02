<template>
  <div>
    <select id="airport-dropdown" v-model="selectedAirport" @change="handleAirportChange">
      <option disabled value="">Select an airport</option>
      <option value="Denver International Airport">Denver International Airport</option>
      <option value="Dallas Fort Worth">Dallas Fort Worth</option>
      <option value="Los Angeles International Airport">Los Angeles International Airport</option>
      <option value="JFK International Airport">JFK Airport</option>
      <option value="Cancun International Airport">Cancun International Airport</option>
      <!-- Add other options with their respective names -->
    </select>
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAirport: ''
    };
  },

  methods: {
    handleAirportChange() {
      console.log('Selected Airport:', this.selectedAirport);
    },

    search() {
      if (this.selectedAirport) {
        this.$router.push({
          name: 'airport-details',
          params: { airportName: this.selectedAirport }
        });
      }
    }
  }
};
</script>

