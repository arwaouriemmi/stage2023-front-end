<template>
    <body>
      
    
      <Image :images="images" />
    </body>
  </template>
  
  <script lang="ts">
  import Image from './Image.vue';
  
 
  export default {
    components: {
     Image
    },
    data() {
      return {
        images: [
        'https://via.placeholder.com/150',  
        'https://via.placeholder.com/150',  
        'https://via.placeholder.com/150',  
       
      ],
      };
    },
  };
  </script>
  <style scoped>
  body {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>