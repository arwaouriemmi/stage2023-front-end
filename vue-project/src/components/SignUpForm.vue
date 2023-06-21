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
                    />
                  </div>
                  
                  
  
                  <div class="form-outline form-light">
                    <label class="form-label" for="typeEmailX">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      required
                    />
                  </div>
  
                  <div class="form-outline form-light">
                    <label class="form-label" for="typePasswordX">Password</label>
                    <input
                      type="password"
                      id="typePasswordX"
                      name="password"
                      class="form-control form-control-lg"
                      required
                    />
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
                    />
                  </div>
  
                  <div class="form-outline form-light">
                    <label class="form-label" for="typetelX">TEL</label>
                    <input
                      type="tel"
                      id="typetelX"
                      name="tel"
                      pattern="[0-9]{10}"
                      class="form-control form-control-lg"
                      required
                    />
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
                  
  
                  <button class="btn btn-outline-light" :style="{ marginTop: '10px' }" type="submit"> <!-- Adjusted margin top here -->
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
  
  .btn-outline-light {
    color: #ffffff !important;
    border-color: #ffffff !important;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff !important;
    color: #dc3545 !important;
  }
  </style>
  
  
  
  