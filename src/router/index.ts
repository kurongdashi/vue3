import { createRouter, createWebHistory } from 'vue-router'
import HomeRouter from '@/views/home/router'
export const routerList = [...HomeRouter]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerList
})

export default router
