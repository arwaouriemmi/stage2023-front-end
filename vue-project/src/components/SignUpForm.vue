<template>
    <body>
        <NavBar />
    <section class=" gradient-custom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-danger text-light" :style="{ borderRadius: '1rem' }">
              <div class="card-body p-5 text-center">
                <div>
                    <h2 class="text-uppercase">Inscription</h2>
                  <div class="form-outline form-light ">
                    <label class="form-label" for="typeEmailX">Nom Complet</label>
                    <input
                      type="text"
                      name="nom"
                      id="typenNomX"
                      class="form-control form-control-lg"
                      required
    @blur="validateNomComplet"
    ref="nomCompletInput"
                    />
                    <p v-if="nomCompletError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ nomCompletError }}
  </p>
                  </div>
                  
                  
  
                  <div class="form-outline form-light">
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
  
<div class="form-outline form-light">
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

  
                  <div class="form-outline form-light">
                    <label class="form-label" for="typeCINX">CIN</label>
                    <input
                      type="text"
                      id="typeCINX"
                      name="CIN"
                      pattern="[0-9]{8}"
                      class="form-control form-control-lg"
                      required
    @blur="validateCin"
    ref="cinInput"
                    />
                    <p v-if="cinError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ cinError }}
  </p>
                  </div>
  
                  <div class="form-outline form-light">
  <label class="form-label" for="typetelX">TEL</label>
  <div class="input-group">
    <span class="input-group-text">+216</span>
    <input
      type="tel"
      id="typetelX"
      name="tel"
      pattern="[0-9]{10}"
      class="form-control form-control-lg"
      required
    @blur="validateTelephone"
    ref="telInput"
  
    />
  </div>
  <p v-if="telError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ telError }}
  </p>
</div>

                  <div class="form-outline form-light">
                    <label class="form-label" for="typeFileX">Image</label>
                    <input
                      type="file"
                      id="typeFileX"
                      name="image"
                      class="form-control form-control-lg"
                      accept="image/*"
                      required
                    />
                  </div>
                  
  
                  <button
  class="btn btn-outline-light"
  :style="{ marginTop: '10px' }"
  type="submit"
  :disabled="!isFormComplete"
>
  Sign Up
</button>
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
   import NavBar from './NavBar.vue'; 
   library.add(faExclamationCircle)
   export default {
    data() {
    return {
      isFormComplete: false,
      isNomCompletValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isTelValid: false,
      isCinValid: false,
      passwordError: '',
      emailError: '',
      telError: '',
      cinError: '',
      nomCompletError: '',
    };
  },
     components: {
      FontAwesomeIcon,
       NavBar,
     },
     methods: {
      validateTelephone() {
      
        const telInput = this.$refs.telInput as HTMLInputElement;
        const tel = telInput.value.trim();
       
        
        if (tel.length !== 8) {
          this.telError = 'Tel should contain  8 characters.'; 
        } else {
          this.telError = ''; 
          this.isTelValid= true;
        }
      
       this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
       
      
       
      },
      validatePassword() {
        const passwordInput = this.$refs.passwordInput as HTMLInputElement;
        const password = passwordInput.value.trim();
    
        if (password.length < 8) {
          this.passwordError = 'Password should contain at least 8 characters.'; 
        } else {
          this.passwordError = ''; 
          this.isPasswordValid= true ;
        }
        this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
      },
      validateCin() {
        const cinInput = this.$refs.cinInput as HTMLInputElement;
        const cin = cinInput.value.trim();
    
        if (cin.length !== 8) {
          this.cinError = 'cin should contain 8 characters.'; 
        } else {
          this.cinError = ''; 
          this.isCinValid= true;
        }
        this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
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
      this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
    },
    validateNomComplet() {
      const nomCompletInput = this.$refs.nomCompletInput as HTMLInputElement;
      const nomComplet = nomCompletInput.value.trim();
     

      if (nomComplet === '') {
        this. nomCompletError = 'Please enter a valid complete name .';
      } else {
        this. nomCompletError = ''; 
        this.isNomCompletValid= true;
      }
      this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
    },
    onSubmit() {
      
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
  .gradient-custom {
    background-size: cover;
    background-position: center;
  }
  .container{
    margin-top: 5px;
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
  .error-message {
  color: yellow;
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
  
  
  
  