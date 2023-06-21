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
  
                <div class="form-outline form-light mb-4">
                  <label class="form-label" for="typeEmailX">Email</label>
                  <input
                    type="email"
                    name="login"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                </div>
  
                <div class="form-outline form-light mb-4">
                  <label class="form-label" for="typePasswordX">Password</label>
                  <input
                    type="password"
                    id="typePasswordX"
                    name="password"
                    class="form-control form-control-lg"
                  />
                </div>
  
                <button class="btn btn-outline-light" :style="{ marginTop: '70px' }" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </template>
   <script lang="ts">
 
   import NavBar from './NavBar.vue'; 
   export default {
     components: {
       NavBar,
     }}
   
      
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

  .form-container {
    width: 100%;
    max-width: 400px; /* Adjust this value to increase or decrease the width of the form */
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
  
  /* Custom styles for the red edition */
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