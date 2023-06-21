<template>
    <body>
        <NavBar />
    <div class="container">
      <div class="content">
        <div class="text">
          <h2 class="title">CityFix</h2>
          <p class="description">
            Notre plateforme, CityFix, est conçue pour faciliter la communication entre les citoyens et les mairies. Nous croyons en l'importance de maintenir nos villes en bon état et de résoudre rapidement les problèmes qui surviennent. Avec CityFix, les citoyens peuvent signaler facilement et rapidement tout objet ou élément endommagé dans leur quartier ou leur environnement urbain. Que ce soit un banc cassé dans un parc, un lampadaire défectueux dans une rue, ou tout autre problème nécessitant l'attention des autorités locales, notre plateforme permet aux citoyens de faire entendre leur voix et de contribuer à l'amélioration de leur ville. En travaillant ensemble, nous pouvons créer un environnement plus sûr, plus agréable et plus fonctionnel pour tous.
          </p>
        </div>
        <div class="image">
          <img src="../assets/images/logo.png" alt="logo" class="logo" />
        </div>
      </div>
    </div>
</body>
  </template>
     <script lang="ts">
 
     import NavBar from './NavBar.vue'; 
     export default {
       components: {
         NavBar,
       }}
     
        
     </script>
  <style>
  body {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
  .container {
    margin-top: 60px;
  }
  
  .content {
    display: flex;
    align-items: center;
  }
  
  .text {
    flex: 1;
  }
  
  .title {
    margin: 60px;
    font-size: 60px;
    font-family: 'Lilita One';
  }
  
  .description {
    font-family: 'Didact Gothic';
    font-size: 20px;
    margin: 0px;
  }
  
  .image {
    margin-left: 80px;
  }
  
  .logo {
    height: 500px;
  }
  </style>
  
  
  
  
 
  