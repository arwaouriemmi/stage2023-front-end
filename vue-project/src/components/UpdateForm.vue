<template>

    <body>
        <NavBar />
    <div class="d-flex align-items-center justify-content-center">
      <div>
        <label for="nomcomplet-input" class="form-label">Nom Complet:</label>
        <input id="nomcomplet-input" type="text" class="form-control" v-model="user.nom" />
       
        <label for="tel-input" class="form-label">Tel:</label>
        <input id="tel-input" type="text" class="form-control" v-model="user.tel" />
        <label for="email-input" class="form-label">Email:</label>
        <input id="email-input" type="email" class="form-control" v-model="user.email" />
        <label for="cin-input" class="form-label">CIN:</label>
        <input id="cin-input" type="text" class="form-control" v-model="user.cin" />
        <button class="btn btn-outline-light" :style="{ marginTop: '20px' }" type="submit" >
                    Enregistrer
                  </button>
      </div>
     
    </div>
</body>
  </template>
  
  <style scoped>
   .btn-outline-light {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
</style>
  
  <script lang="ts">
  import NavBar from './NavBar.vue'; 
  export default {
    components: {
      
      NavBar,
     
    },
    props: {
      user: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        isValidate: false,
        errors: {},
      };
    },
  };
  </script>
  
  