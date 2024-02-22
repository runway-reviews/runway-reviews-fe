<template>
  <div class="airport-dropdown">
    <!-- it's not an emit, it's like onChange, then navigate to airport details: @change="navigateToAirportDetails": The navigateToAirportDetails method is called when the selected option changes.-->
    <select 
      v-model="selectedAirport" @change="navigateToAirportDetails" class="airport-select-home">
      <!-- for loop, for q aiport in airports array... airport array is coming from below with the fetch: it's saying for every airport, create a key (just so that the page doesn't completely re-render when the value changes) and update the value to the airport.name -->
      <!-- Adding :key="airport.id" helps Vue.js identify each option uniquely in the list, making it more efficient to update the DOM when the list changes.
      It helps to avoid unnecessary re-renders of the entire list and improves performance. -->
      <!-- :value is for setting the value associated with each option in the dropdown. -->
      <option v-for="airport in airports" :key="airport.id" :value="airport.name">
        {{ airport.name }}
      </option>
    </select>
  </div>
</template>
  
  <script setup>
    import { ref, defineProps, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

  //d
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
        //to update a reactive variable or state, you ahve to always use .value in vue
        airports.value = data.data.map(element => element.attributes);
        // console.log(airports.value);
    } catch (error) {
        console.error('Error fetching airports data:', error);
    }
}

// Method to navigate to the details page of the selected airport
const navigateToAirportDetails = async () => {
    await fetchAirports(); // Ensure airports data is up to date
    // Check if an airport is selected
    if (selectedAirport.value) {
        // Find the selected airport object in the airports array
        const airportObject = airports.value.find(airport => airport.name === selectedAirport.value);
        console.log(airportObject, 'airport object');
        // Save the currentUser to localStorage (if provided)
        localStorage.setItem('currentUser', JSON.stringify(props.currentUser)); 
        // Navigate to the airport details page with the selected airport's name and ID
        router.push({ name: 'airportName', params: { airportName: selectedAirport.value }, query: { id: airportObject.id } });
    }
}

// Fetch airports data on component mount
// onMounted is a lifecycle hook provided by Vue.js, and it's used in the Composition API. 
  onMounted(fetchAirports);
</script> 