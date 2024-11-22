import { createApp, defineAsyncComponent } from 'vue';

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/App.vue';
// const Ciclistas =  defineAsyncComponent(() => await import('../components/App.vue'));

const routes = [
  { path: '/', component: HomeView },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app');
