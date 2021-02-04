import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/home/communes'
  },
  {
    path: '/home/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home/communes'
      },
      {
        path: 'communes',
        component: () => import('@/views/Communes.vue')
      },
      {
        path: 'departements',
        component: () => import('@/views/Departements.vue')
      },
      {
        path: 'regions',
        component: () => import('@/views/Regions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
