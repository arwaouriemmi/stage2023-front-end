<template>
    <body>
        <NavBar />
    <div class="container" style="display: flex; flex-direction: row; padding-top: 50px;">
      <div class="image-profile" style="flex: 1;">
        
      </div>
      <div :style="{ flex: 1 }">
    <img
      :src="user.image"
      class="img-fluid rounded-circle"
      :style="{ width: '300px' }"
      alt=""
    />
  </div>
      <div style="flex: 2; padding-left: 20px;">
        <ul style="list-style: none; padding-top: 10px;">
          <li style="padding-bottom: 30px;">
            <h1 class="text-4xl font-bold">
              {{ user.nom}} 
              
            </h1>
          </li>
          <li style="padding-bottom: 30px;">
            <font-awesome-icon icon="phone" style="color: #dc3545" />
            {{ user.tel }}
          </li>
          <li style="padding-bottom: 30px;">
  <font-awesome-icon icon="envelope" style="color: #dc3545" />
  <a :href="'mailto:' + user.email">
    {{ user.email }}
  </a>
</li>
          <li style="padding-bottom: 30px;">
            <font-awesome-icon icon="id-card" style="color: #dc3545" />
            {{ user.cin }}
          </li>
          <li>
            <router-link :to="'/testobservations'">
              <button class="btn btn-outline-light">
                Voir les observations
              </button>
            </router-link>
          </li>
        </ul>
        <div>
          <router-link :to="'/testupdate'">
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
library.add(faIdCard,faPhone ,faEnvelope)
  export default {
    components: {
     FontAwesomeIcon,
      NavBar,
     
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    
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