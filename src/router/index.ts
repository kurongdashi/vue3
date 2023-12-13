import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export const routerList = [
  {
    path: '/',
    name: 'Vue基础',
    component: HomeView
  },
  {
    path: '/about',
    name: '深入Vue',
    // vue路由懒加载
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerList
})

export default router
