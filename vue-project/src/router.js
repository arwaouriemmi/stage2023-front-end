import { createRouter, createWebHistory } from 'vue-router';
import NavBar from './components/NavBar.vue' ;
import test from './components/test.vue' ;
import TestUpdate from './components/TestUpdate.vue' ;
import SignInForm from './components/SignInForm.vue' ;
import SignUpForm from './components/SignUpForm.vue' ;
import Profile from './components/Profile.vue' ;
import Home from './components/Home.vue' ;
import AboutUs from './components/AboutUs.vue' ;
import UpdateForm from './components/UpdateForm.vue' ;
import Observations from './components/Observations.vue' ;
import Image from './components/Image.vue' ;
import TestObservations from './components/TestObservations.vue' ;
import TestImage from './components/TestImage.vue' ;
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
        path: '/observations/:id',
        name: 'observations',
        component: Observations, 
      },
      {
        path: '/edit/:id',
        name: 'edit',
        component: UpdateForm, 
      },
      {
        path: '/testobservations',
        name: 'testobservations',
        component: TestObservations, 
      },
      {
        path: '/testimage',
        name: 'testimage',
        component: TestImage, 
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
        path: '/profile/:id',
        name: 'Profile',
        component: Profile, 
      },
      {
        path: '/testprofile',
        name: 'testprofile',
        component: test, 
      },
      {
        path: '/testupdate',
        name: 'testupdate',
        component: TestUpdate, 
      },
      
      {
        path: '/signin',
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