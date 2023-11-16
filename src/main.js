import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

const Cadastro = { template: '<div>Cadastro Component</div>' };
const Login = { template: '<div>Login Component</div>' };

const routes = [
    { path: '/', component: Cadastro },
    { path: '/about', component: Login },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


createApp(App).use(createPinia()).mount('#app').use(router)
