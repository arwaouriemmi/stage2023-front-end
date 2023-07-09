import { createRouter, createWebHistory } from 'vue-router';
import NavBar from './components/NavBar.vue' ;
import SignInForm from './components/SignInForm.vue' ;
import SignUpForm from './components/SignUpForm.vue' ;
import Profile from './components/Profile.vue' ;
import Home from './components/Home.vue' ;
import AboutUs from './components/AboutUs.vue' ;
import UpdateForm from './components/UpdateForm.vue' ;
import Observations from './components/Observations.vue' ;
import Image from './components/Image.vue' ;

const routes = [
    {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs, 
      },
      {
        path: '/images/:id',
        name: 'images',
        component: Image, 
      },
      {
        path: '/observations',
        name: 'observations',
        component: Observations, 
      },
      {
        path: '/edit',
        name: 'edit',
        component: UpdateForm, 
      },
      
     
    {
        path: '/home',
        name: 'Home',
        component: Home, 
      },
    {
      path: '/navbar',
      name: 'NavBar',
      component: NavBar, 
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile, 
      },
      
      
      
      {
        path: '/',
        name: 'SignIn',
        component: SignInForm, 
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUpForm, 
      }

  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;