import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/destination/:name',  // Ruta dinámica con el parámetro 'name'
    name: 'Destination',
    component: () => import('../components/ComponenteDestino.vue'),
    props: true,  // Hacer que el parámetro se pase como prop
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
