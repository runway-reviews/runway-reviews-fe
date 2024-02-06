<template>
    <div>
      <select v-model="selectedAirport" @change="navigateToAirportDetails">
        <option v-for="airport in airports" :key="airport.code" :value="airport.name">
          {{ airport.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
  
    const selectedAirport = ref('')
    const router = useRouter()
  
    const airports = [
      { code: 'JFK', name: 'John F. Kennedy International Airport' },
      { code: 'DEN', name: 'Denver International Airport' },
      { code: 'DFW', name: 'Dallas Fort Worth International Airport' },
      { code: 'CUN', name: 'Cancun International Airport' },
      { code: 'LAX', name: 'Los Angeles International Airport' } 
    ]
  
    const navigateToAirportDetails = () => {
      if (selectedAirport.value) {
        // console.log(selectedAirport.value)
        router.push({ name: 'airportName', params: { airportName: selectedAirport.value } })
      }
    }

  </script>

<style>
  
</style>
