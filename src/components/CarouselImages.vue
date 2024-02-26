<template>
  <div>
    <carousel :slides-per-page="slidesPerPage">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt">
      </slide>
    </carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { Carousel, CarouselSlide } from 'vue3-carousel';

const images = [
  { src: '/annie-spratt-qyAka7W5uMY-unsplash.jpg', alt: 'Map and camera image' },
  { src: '/arthur-edelmans-u9QuzlImpzA-unsplash.jpg', alt: 'Suitcases under globe image' },
  { src: '/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg', alt: 'Silhouetted window image' },
  { src: '/caroline-selfors-r2jpr8MDw0I-unsplash.jpg', alt: 'Colorful suitcases image' },
  { src: '/jeshoots-com-mSESwdMZr-A-unsplash.jpg', alt: 'Man sitting at airport image' },
  { src: '/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg', alt: 'Airplane taking off image' },
  { src: '/nick-fewings-l5fDJ3I-9Uk-unsplash.jpg', alt: 'Airport gates image' },
];

const slidesPerPage = ref([[0, 3], [768, 2], [1024, 3]]);
</script>








<!-- <template>
    <div>
      <carousel :perPageCustom="[[0, 1], [768, 2], [1024, 3]]">
        <slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt">
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  
  export default {
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        images: [
          { src: '/annie-spratt-qyAka7W5uMY-unsplash.jpg', alt: 'Map and camera image' },
          { src: '/arthur-edelmans-u9QuzlImpzA-unsplash.jpg', alt: 'Suitcases under globe image' },
          { src: '/artur-tumasjan-KZSNMN4VxR8-unsplash.jpg', alt: 'Silhouetted window image' },
          { src: '/caroline-selfors-r2jpr8MDw0I-unsplash.jpg', alt: 'Colorful suitcases image' },
          { src: '/jeshoots-com-mSESwdMZr-A-unsplash.jpg', alt: 'Man sitting at airport image' },
          { src: '/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg', alt: 'Airplane taking off image' },
          { src: '/nick-fewings-l5fDJ3I-9Uk-unsplash.jpg', alt: 'Airport gates image' },
        //   { src: '', alt: '' },
        ],
        Carousel, Slide
      };
    },
  };
  </script> -->
  
  <!--
    - need to: npm install vue-carousel
    - <carousel> is a component provided by the vue carousel library
    - perPageCustom prop allows you to specify how many items should be displayed per page at different screen width. In this case, it's configured to display 1 item when the screen width is less than 768 
    - slide used to represent each slide in the carousel 
    
-->