import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutkristof',
      name: 'aboutkristof',
      component: () => import('../views/Kristofv.vue')
    },
    {
      path: '/aboutferenc',
      name: 'aboutferenc',
      component: () => import('../views/Feriv.vue')
    }
  ]
})

export default router
