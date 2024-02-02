
<template>
  <div>
    <h1>Hello {{ airportName }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    airportName: {
      type: String,
      required: true
    }
  },
};
</script>



