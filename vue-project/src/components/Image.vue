<template>
    <body>
        <NavBar />
    <div class="image-gallery">
      
      <div class="image-container">
        <div v-for="(image, index) in this.images" :key="index" class="image-wrapper">
          <img :src="`/${image.src}`" alt="Observation Image" class="observation-image" />
        </div>
      </div>
    </div>
</body>
  </template>
  
  <script lang="ts">

  import NavBar from './NavBar.vue'; 
  import { ref } from 'vue';
import axios from 'axios';
    export default {
      components: {
   
        NavBar,
       
      },
      setup() {
     
     const images = ref([]);
      
 
     
 
     return {
       images,
      
       
     };
   },
   async created() {
   const observationId = this.$route.params.id;
   console.log(observationId);
   debugger;
  const response = await axios.get(`https://localhost:44382/image/ImagesByObservationId/${observationId}`);
  this.images=response.data ;
  console.log(this.images);
  debugger;

 
 },
      
      
    };
    </script>
  <style scoped>
  .image-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .image-wrapper {
    width: 33.33%;
    padding: 10px;
  }
  
  .observation-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
  </style>
  