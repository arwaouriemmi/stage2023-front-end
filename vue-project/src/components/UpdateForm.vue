<template>

    <body>
        <NavBar />
    <div class="d-flex align-items-center justify-content-center">
      <div>
        <form @submit="onSubmit">
          <div>
        <label for="nomcomplet-input" class="form-label">Nom Complet:</label>
        <input id="nomcomplet-input" type="text" class="form-control" v-model="user.NomComplet" ref="nomCompletInput" @blur="validateNomComplet"
    />
        <p v-if="nomCompletError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ nomCompletError }}
  </p>
      </div>
      <div>
        <label for="tel-input" class="form-label">Tel:</label>
        <input id="tel-input" type="text" class="form-control" v-model="user.Tel" ref="telInput" @blur="validateTelephone" />
        <p v-if="telError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ telError }}
  </p>
      </div>
      <div>
        <label for="email-input" class="form-label">Email:</label>
        <input id="email-input" type="email" class="form-control" v-model="user.Email" ref="emailInput" @blur="validateEmail" />
        <p v-if="emailError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ emailError }}
  </p>
      </div>

      <div>
        <label for="cin-input" class="form-label">CIN:</label>
        <input id="cin-input" type="text" class="form-control" v-model="user.Cin" ref="cinInput" @blur="validateCin" />
        <p v-if="cinError" class="error-message">
    <font-awesome-icon icon="exclamation-circle" />
    {{ cinError }}
  </p>
      </div>
       <div>
        <label for="cin-input" class="form-label">Image:</label>
        <input id="cin-input" type="file" class="form-control" ref="imageInput"  />
       </div>

        <button type="submit" class="btn btn-outline-light" :style="{ marginTop: '20px' }"  :disabled="!isFormComplete">
                    Enregistrer
                  </button>
                </form>
      </div>
     
    </div>
</body>
  </template>
  <script lang="ts">
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
  import NavBar from './NavBar.vue'; 
  import axios from 'axios';
  import { ref } from 'vue';
  library.add(faExclamationCircle)
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
   data() {
   return {
    isFormComplete:true,
     isNomCompletValid: true,
     isEmailValid: true,
     isPasswordValid: true,
     isTelValid: true,
     isCinValid: true,
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
    async created() {
      debugger;
   await this.fetchCitizenData();
    debugger;
  },
    methods: {
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
debugger;
console.log(this.user);
debugger;

        
      } catch (error) {
        console.log("Une erreur s'est produite lors de la récupération des données du citoyen");
        console.log(error);
      }
    },
     validateTelephone() {
     
       const telInput = this.$refs.telInput as HTMLInputElement;
       const tel = telInput.value.trim();
      
       
       if (tel.length !== 8) {
         this.telError = 'Tel should contain  8 characters.'; 
         this.isTelValid= false;
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
         this.isPasswordValid= false ;
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
         this.isCinValid= false;
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
       this.isEmailValid= false;
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
       this.isNomCompletValid= false;
     } else {
       this. nomCompletError = ''; 
       this.isNomCompletValid= true;
     }
     this.isFormComplete= this.isNomCompletValid && this.isEmailValid && this.isPasswordValid && this.isTelValid && this.isCinValid;
   },
   async  onSubmit(event) {
    event.preventDefault();
     
const form = new FormData();

const imageInput = this.$refs.imageInput as HTMLInputElement;
console.log('imageInput:', imageInput);
console.log('imageInput.files:', imageInput.files);
const imageFile = imageInput.files?.[0];

console.log(imageFile);
    
      if (imageFile) {
        form.append('img', imageFile);
      }
      form.append('citoyenJson', JSON.stringify({
        NomComplet: this.$refs.nomCompletInput.value.trim(),
        Email: this.$refs.emailInput.value.trim(),
        Cin: this.$refs.cinInput.value.trim(),
        Tel: this.$refs.telInput.value.trim()
      }));
      form.forEach((value, key) => {
        console.log(key + ': ' + value);
      });
      
      
      console.log(form);
      debugger;
  try {
  debugger;
  const response = await axios.patch('https://localhost:44382/citoyen/update', form, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
  debugger;
  window.location.href = '/profile'; 


 
} catch (error) {

  console.log('Error occurred while submitting the form:', error);
  
  

   

}

    }
   
 },
   }
  
     
  </script>
  <style scoped>
   .btn-outline-light {
    background-color: #dc3545;
    color: white;
  }
  .error-message {
  color: #dc3545;
}
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
</style>
  
  