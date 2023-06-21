import './assets/main.css'
import App from './App.vue'
import SignInForm from './components/SignInForm.vue'
import SignUpForm from './components/SignUpForm.vue'
import NavBar from './components/NavBar.vue'
import Profile from './components/Profile.vue'
import test from './components/test.vue'
import { createApp } from 'vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

library.add(faIdCard,faPhone,faEnvelope,faUser,faUserPlus,faSignInAlt,faHouse)



const app = createApp(App);
app.use(router);
app.mount('#app');