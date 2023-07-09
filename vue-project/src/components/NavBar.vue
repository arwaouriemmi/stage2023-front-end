<template>
    <ul class="menu">
   <li
     v-if="token"
     class="menu-item"
   >
     <a
       href="/home"
       class="menu-link"
       
     >
       <i class="menu-icon" >
           <font-awesome-icon icon="house" />
       </i>
     
       <span>Home</span>
     </a>
   </li>
   <li
     class="menu-item"
   >
     <a
       href="/aboutus"
       class="menu-link"
       
     >
       <i class="menu-icon" >
        <font-awesome-icon icon="info-circle" />
       </i>
     
       <span>About Us</span>
     </a>
   </li>
   <li
     class="menu-item"
   >
     <a
     v-if="!token"
       href="/"
       class="menu-link"
       
     >
       <i class="menu-icon" >
           <font-awesome-icon icon="sign-in-alt" />
       </i>
     
       <span>Sign In </span>
     </a>
   </li>
   <li
     class="menu-item"
   >
     <a
     v-if="!token"
       href="/signup"
       class="menu-link"
       
     >
       <i class="menu-icon" >
           <font-awesome-icon icon="user-plus" />
       </i>
     
       <span>Sign Up</span>
     </a>
   </li>
   <li
     v-if="token"
     class="menu-item"
   >
     <a
       href="/profile"
       class="menu-link"
       
     >
       <i class="menu-icon" >
           <font-awesome-icon icon="user" />
       </i>
     
       <span>Profile</span>
     </a>
   </li>
   <li
     v-if="token"
     class="menu-item"
   >
     <a
     @click="deconnexion"
       href="/"
       class="menu-link"
       
     >
       <i class="menu-icon" >
        <font-awesome-icon icon="sign-out-alt" />
     

       </i>
     
       <span> Déconnexion</span>
     </a>
   </li>
 

 </ul>
 </template>
 
 <script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faSignOutAlt,faInfoCircle,faUser,faUserPlus,faSignInAlt,faHouse)
 
 export default {
  computed: {
    token() {
      return localStorage.getItem('token');
    },
  },
   components: {
     FontAwesomeIcon,
   },
   methods: {
  deconnexion() {
    debugger;
    localStorage.removeItem('token');
    debugger;
    window.location.href = '/'; 
  },
},
 };
 </script>
 
 <style >
:root {
 --link-text-color: #ffffff; 
 --menu-background-color: #dc3545; 
}

 .menu {
 padding: 0;
 margin: 0;
 position: relative;
 background-color: var(--menu-background-color);
 display: flex;
 justify-content: center; 
 align-items: center; 
 width: 100%;
 list-style-type: none;
 overflow: hidden;
}



 .menu-item {
   display: inline-flex;
 }
 

 .menu-link {
 padding: 1.5rem 1rem; 
 display: inline-flex;
 align-items: center;
 color: var(--link-text-color);
 text-decoration: none;
}

 
 .menu-link:hover{
   color: grey;
 }
 
 
 .menu-icon {
   height: 1.5rem;
   width: 1.5rem;
   justify-content: center;
   align-items: center;
   display: inline-flex;
   margin-right: 0.2rem;
 }

 </style>