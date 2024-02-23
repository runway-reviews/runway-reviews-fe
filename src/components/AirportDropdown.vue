<template>
  <div class="airport-dropdown">
    <select v-model="selectedAirport" @change="navigateToAirportDetails" class="airport-select-home">
      <option v-for="airport in airports" :key="airport.id" :value="airport.name">
        {{ airport.name }}
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
        const response = await fetch('https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/airports');
        if (!response.ok) {
            console.log('Error fetching airports data');
            return;
        }
        const data = await response.json();
        console.log(airports, 'airports')
        airports.value = data.data.map(element => element.attributes);
        // console.log(airports.value);
    } catch (error) {
        console.error('Error fetching airports data:', error);
    }
}

const navigateToAirportDetails = async () => {
    await fetchAirports(); 
    if (selectedAirport.value) {
        const airportObject = airports.value.find(airport => airport.name === selectedAirport.value);
        console.log(airportObject, 'airport object');
        localStorage.setItem('currentUser', JSON.stringify(props.currentUser)); 
        router.push({ name: 'airportName', params: { airportName: selectedAirport.value }, query: { id: airportObject.id } });
    }
}


onMounted(fetchAirports);
  </script>

