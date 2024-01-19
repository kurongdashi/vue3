import { createRouter, createWebHistory } from 'vue-router'
import HomeRouter from '@/views/home/router'
export const routerList = [
  ...HomeRouter,
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/other/Other.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: routerList
})

export default router
