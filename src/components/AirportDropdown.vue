<template>
  <div class="airport-dropdown">
    <select v-model="selectedAirport" @change="navigateToAirportDetails" class="airport-select-home">
      <option v-for="airport in airports" :key="airport.id" :value="airport.name.name">
        {{ airport.name.name }}
      </option>
    </select>
  </div>
</template>
  
  <script setup>
    import { ref, defineProps, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

  
    const airports = ref([]);
    const selectedAirport = ref('');
    const router = useRouter();
    const props = defineProps({
        currentUser: {
            type: Object,
            required: false
        }
    })


const fetchAirports = async () => {
    try {
        const response = await fetch('https://runwayreviewsbe-4165084ad9d0.herokuapp.com/airports/');
        if (!response.ok) {
            console.log('Error fetching airports data');
            return;
        }
        const data = await response.json();
        airports.value = data.map(element => {
          return {
            name: element.attributes,
            id: element.id
          }
          } );
    } catch (error) {
        console.error('Error fetching airports data:', error);
    }
}

const navigateToAirportDetails = async () => {
    await fetchAirports(); 
    
    if (selectedAirport.value) {
        const airportObject = airports.value.find(airport => airport.name.name === selectedAirport.value);
        localStorage.setItem('currentUser', JSON.stringify(props.currentUser)); 
        router.push({ name: 'airportName', params: { airportName: selectedAirport.value }, query: { id: airportObject.id } });
    }
}

onMounted(fetchAirports);
  </script>
