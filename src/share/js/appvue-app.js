import { createApp } from 'vue';

import { createWebHistory, createRouter } from 'vue-router'


import App from '../components/App.vue';
const HomeView = () =>  import('../../module/Home/components/home.vue');

const routes = [
  { path: '/', component: HomeView },
  { path: '/ciclistas', component: () => import('../../module/Ciclistas/componets/ciclistas.vue')},
  { path: '/tres-grandes', component: () => import('../../module/TresGrandes/components/tresgrandes.vue')},
  { path: '/contactenos', component: () => import('../../module/Contactenos/contactenos.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app');
