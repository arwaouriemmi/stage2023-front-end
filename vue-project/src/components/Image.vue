<template>
    <body>
        <NavBar />
    <div class="image-gallery">
      
      <div class="image-container">
        <div v-for="(image, index) in images" :key="index" class="image-wrapper">
          <img :src="image" alt="Observation Image" class="observation-image" />
        </div>
      </div>
    </div>
</body>
  </template>
  
  <script lang="ts">

  import NavBar from './NavBar.vue'; 
  
    export default {
      components: {
   
        NavBar,
       
      },
      props: {
        images: {
          type: Object,
          required: true,
        },
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
    width: 100%;
    height: auto;
  }
  </style>
  