<template>
    <body>
        <NavBar />
    <div v-if="this.user.NomComplet" class="container" style="display: flex; flex-direction: row; padding-top: 50px;">
      <div class="image-profile" style="flex: 1;">
        
      </div>
      <div :style="{ flex: 1 }">
        <img
        :src="`/${user.image}`"
 
  class="img-fluid rounded-circle"
  :style="{ width: '300px' }"
  alt=""
/>
  </div>
      <div style="flex: 2; padding-left: 20px;">
        <ul  style="list-style: none; padding-top: 10px;">
          <li style="padding-bottom: 30px;">
            <h1 class="text-4xl font-bold">
              {{ user.NomComplet }}
              
            </h1>
          </li>
          <li style="padding-bottom: 30px;">
            <font-awesome-icon icon="phone" style="color: #dc3545" />
            {{ user.Tel }}
          </li>
          <li style="padding-bottom: 30px;">
  <font-awesome-icon icon="envelope" style="color: #dc3545" />
 
  <a :href="'mailto:' +  user.Email">
    {{ user.Email }}
  </a>
  
</li>
          <li style="padding-bottom: 30px;">
            <font-awesome-icon icon="id-card" style="color: #dc3545" />
            {{ user.Cin}}
          </li>
          <li>
            <router-link :to="'/observations'">
              <button class="btn btn-outline-light">
                Voir les observations
              </button>
            </router-link>
          </li>
        </ul>
        <div>
          <router-link :to="'/edit'">
            <button class="btn btn-outline-light" >Modifier</button>
          </router-link>
        </div>
      </div>
    </div>
</body>
  </template>
  
  <script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar.vue'; 
import { ref } from 'vue';
import axios from 'axios';


library.add(faIdCard,faPhone ,faEnvelope)
  export default {
   
    setup() {
    const user = ref({
      NomComplet: "",
      Email: "",
      Password: "",
      Tel: "",
      Cin: "",
      image:""
    });
     

    

    return {
      user,
      
    };
  },
    components: {
     FontAwesomeIcon,
      NavBar,
     
    },
    
    
   
  async created() {
      debugger;
   await this.fetchCitizenData();
    debugger;
  },
    methods:{
      async fetchCitizenData() {
      try {
        
        const response = await axios.get("https://localhost:44382/citoyen/GetByToken", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const userData = response.data;
console.log(userData);
debugger;

this.user.NomComplet = userData.nomComplet;
this.user.Email = userData.email;
this.user.Password = userData.password;
this.user.Tel = userData.tel;
this.user.Cin = userData.cin;
this.user.image = userData.image;
debugger;
console.log(this.user);
debugger;

        
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des données du citoyen");
        console.log(error);
      }
    },
    }
    
  };
  </script>
  
  <style scoped>
  .btn-outline-light {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
  body {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
  </style>