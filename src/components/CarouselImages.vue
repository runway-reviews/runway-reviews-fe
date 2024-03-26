<template>
  <div>
    <Carousel :itemsToShow="slidesPerPage" :autoplay="autoplayInterval" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index" >
        <img :src="image.src" :alt="image.alt" class="carousel-images" style="object-fit: cover;">
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = [
  { src: './annie-spratt-qyAka7W5uMY-unsplash.jpg', alt: 'Map and camera image' },
  { src: './arthur-edelmans-u9QuzlImpzA-unsplash.jpg', alt: 'Suitcases under globe image' },
  { src: './artur-tumasjan-KZSNMN4VxR8-unsplash.jpg', alt: 'Silhouetted window image' },
  { src: './caroline-selfors-r2jpr8MDw0I-unsplash.jpg', alt: 'Colorful suitcases image' },
  { src: './jeshoots-com-mSESwdMZr-A-unsplash.jpg', alt: 'Man sitting at airport image' },
  { src: './josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg', alt: 'Airplane taking off image' },
  { src: './nick-fewings-l5fDJ3I-9Uk-unsplash.jpg', alt: 'Airport gates image' },
];
const autoplayInterval = ref(2000);
const slidesPerPage = ref(4); 

</script>


<style scoped>
.carousel-images {
  border-radius: 10px;
  width: 300px;
  height: 30vh;
}

@media (max-width: 1200px) {
  .carousel-images{
    width: 250px;
  }
}

@media (max-width: 1020px) {
  .carousel-images{
    width: 220px;
  }
}

@media (max-width: 890px) {
  .carousel-images{
    width: 200px;
    height: 25vh;
  }
}

@media (max-width: 810px) {
  .carousel-images{
    width: 180px;
    height: 23vh;
  }
}

@media (max-width: 725px) {
  .carousel-images{
    width: 150px;
    height: 23vh;
  }
}

@media (max-width: 615px) {
  .carousel-images{
    width: 120px;
    height: 20vh;
  }
}

@media (max-width: 490px) {
  .carousel-images{
    width: 110px;
    height: 18vh;
  }
}

@media (max-width: 490px) {
  .carousel-images{
    width: 95px;
    height: 15vh;
  }
}

@media (max-width: 390px) {
  .carousel-images{
    width: 90px;
    height: 13vh;
  }
}

</style>