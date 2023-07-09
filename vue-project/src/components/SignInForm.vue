<template>
  <body>
    <NavBar />
    <section class="vh-100 gradient-custom">
      <div class="container py-5 d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5 form-container centered-form">
          <div class="card bg-danger text-light" :style="{ borderRadius: '1rem' }">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Connexion</h2>
                <p class="text-light-50 mb-5">
                  Entrez votre login et votre mot de passe !
                </p>
                <form @submit="onSubmit">
                <div class="form-outline form-light mb-4">
                  <label class="form-label" for="typeEmailX">Email</label>
                  <input
                  type="email"
  name="email"
  id="typeEmailX"
  class="form-control form-control-lg"
  required
  @blur="validateEmail"
  ref="emailInput"
                  />
                  <p v-if="emailError" class="error-message">
  <font-awesome-icon icon="exclamation-circle" />
  {{ emailError }}
</p>
                </div>
  
                <div class="form-outline form-light mb-4">
                  <label class="form-label" for="typePasswordX">Password</label>
                  <input
                   

    type="password"
    id="typePasswordX"
    name="password"
    class="form-control form-control-lg"
    required
    @blur="validatePassword"
    ref="passwordInput"
                  />
                  <p v-if="passwordError" class="error-message">
  <font-awesome-icon icon="exclamation-circle" />
  {{ passwordError }}
</p>
                </div>
  
                <button class="btn btn-outline-light" :style="{ marginTop: '20px' }"  type="submit"
  :disabled="!isFormComplete">
                  Login
                </button>
</form>
                <div class="form-outline form-light mb-4">
                  <p>Créer un nouveau compte</p>
          <router-link :to="'/signup'">
            <button class="btn btn-outline-light" >Sign Up</button>
          </router-link>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </template>
   <script lang="ts">
 
 import { library } from "@fortawesome/fontawesome-svg-core";
   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
   import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
   import NavBar from './NavBar.vue'
   import axios from 'axios';
   import router from "../router.js";
   library.add(faExclamationCircle)
   export default {
    data() {
    return {
      isFormComplete: false,
      isEmailValid: false,
      isPasswordValid: false,
      passwordError: '',
      emailError: '',
     
    };
  },
     components: {
      FontAwesomeIcon,
       NavBar,
     },
     methods: {
     
      validatePassword() {
        const passwordInput = this.$refs.passwordInput as HTMLInputElement;
        const password = passwordInput.value.trim();
    
        if (password.length < 8) {
          this.passwordError = 'Password should contain at least 8 characters.'; 
        } else {
          this.passwordError = ''; 
          this.isPasswordValid= true ;
        }
        this.isFormComplete= this.isEmailValid && this.isPasswordValid ;
      },
     
    validateEmail() {
      const emailInput = this.$refs.emailInput as HTMLInputElement;
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === '' || !emailPattern.test(email)) {
        this.emailError = 'Please enter a valid email address.';
      } else {
        this.emailError = ''; 
        this.isEmailValid= true;
      }
      this.isFormComplete= this.isEmailValid && this.isPasswordValid ;
    },
  
    async  onSubmit(event) {
    event.preventDefault();
    const LoginCredentials = {
    Login: this.$refs.emailInput.value.trim(),
    Password: this.$refs.passwordInput.value.trim()
  };

  try {
   debugger;
    const response = await axios.post('https://localhost:44382/auth/login',LoginCredentials);
    debugger;
    console.log(response.data);
    debugger;
    const token = response.data; 
    localStorage.setItem("token", token);
    debugger;
  
   window.location.href = '/profile'; 

  } catch (error) {
    debugger;
    console.log('Catch block executed');
    debugger;
    console.log(error);
    alert('An error occurred while submitting the form. Please try again later.');
   
  }

     
},
  },
    }
   
      
   </script>

  <style scoped>
body {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('../src/assets/images/background.png');
}
.container{
    margin-top: 5px;
  }
.error-message {
  color: yellow;
}

  .form-container {
    width: 100%;
    max-width: 400px; 
    margin: 0 auto;
 
   
  }
  .navbar-custom {
 
  width: 100%;

}
  .centered-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .gradient-custom {
    background-size: cover;
    background-position: center;
  }
  
 
  .bg-danger {
    background-color: #dc3545 !important;
  }
  
  .text-light {
    color: #ffffff !important;
  }
  
  .text-light-50 {
    color: rgba(255, 255, 255, 0.5) !important;
  }
  
  .form-outline.form-light .form-label {
    color: #ffffff !important;
  }
  
  .btn-outline-light {
    color: #ffffff !important;
    border-color: #ffffff !important;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
  </style>