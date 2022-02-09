import { createRouter, createWebHistory } from 'vue-router'
import Currencies from '../views/Currencies.vue'

const routes = [
  {
    path: '/',
    name: 'Currencies',
    component: Currencies
  },
  {
    path: '/converter',
    name: 'Converter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Converter" */ '../views/Converter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
