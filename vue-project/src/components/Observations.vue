<template>
  <body>
    <NavBar />
    <div class="row justify-content-center">
      <div v-for="observation in this.observations" :key="observation.id" class="col-sm-3">
        <div class="card bg-danger card my-3 custom-card">
          <div class="card-body text-white">
            <h5 class="card-title">{{ observation.date }}</h5>
            <div class="card-content">
              <div class="observation-info">
                <font-awesome-icon icon="map-marker" />
                {{ observation.longitude }} / {{ observation.latitude }}
              </div>
              <p class="card-text">{{ observation.text }}</p>
            </div> 
            <div class="button-container mt-auto">
              <router-link :to="`/images/${observation.id}`">
            <button class="btn btn-outline-light" >Voir les Images</button>
          </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
  
  <script lang="ts">
  import NavBar from './NavBar.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
import axios from 'axios';
library.add(faMapMarker )
  export default {
    setup() {
     
    const observations = ref([]);
     

    

    return {
      observations,
     
      
    };
  },
    components: {
      NavBar,
      FontAwesomeIcon ,
    },
    async created() {
     
      debugger;
   await this.fetchCitizenData();
    debugger;
  },
  methods:{
      async fetchCitizenData() {
      try {
        
        const response = await axios.get("https://localhost:44382/observation/ObservationsByCitoyenToken", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.observations = response.data;
console.log(this.observations);
debugger;



        
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des données du citoyen");
        console.log(error);
      }
    },
    },
   
  };
  </script>
  
  <style scoped>
  body {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .custom-card {
  height: 200px; 
}
.btn-outline-light {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
  </style>
  