<template>
    <body>
      
    
      <UpdateForm :user="user" />
    </body>
  </template>
  
  <script lang="ts">
  
  import UpdateForm from './UpdateForm.vue';
 
  export default {
    components: {
      
      
      UpdateForm,
    },
    data() {
      return {
        user: {
          id: 1,
          nom: 'Oueriemmi Arwa',
          tel:28431054,
          email:'arwaouriemmi@gmail.com',
          cin:135431054,
          image:"https://via.placeholder.com/150",
          observations: [
          { id: 1, date: '11-06-2023',localisation:"L1", text: 'Il y a un lampadaire cassé sur la rue principale. Veuillez le réparer.' },
          { id: 2, date: '12-06-2023',localisation:"L2", text: 'Le passage piéton près de l école est mal éclairé. Il est difficile de traverser en toute sécurité' },
          { id: 3, date: '13-06-2023', localisation:"L3",text: 'La signalisation routière à l intersection de la rue A et de la rue B est défectueuse. Cela crée une confusion parmi les conducteurs' },
        ]
          
        },
      };
    },
  };
  </script>
  <style scoped>
  body {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>