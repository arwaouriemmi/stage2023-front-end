<template>
    <body>
      <NavBar />
    
     Home
    </body>
  </template>
  
  <script lang="ts">

  import NavBar from './NavBar.vue'; 
  export default {
    components: {
      NavBar,
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