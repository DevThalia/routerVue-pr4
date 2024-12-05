import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/destination/:name',  
    name: 'Destination',
    component: () => import('../components/ComponenteDestino.vue'),
    props: true,  
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
