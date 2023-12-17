const routerList = [
  {
    path: '/',
    name: 'Vue基础',
    component: () => import('./Home.vue')
  },
  {
    path: '/about',
    name: '深入Vue组件',
    // vue路由懒加载
    component: () => import('./About.vue')
  },
  {
    path: '/about2',
    name: '深入Vue组件2',
    // vue路由懒加载
    component: () => import('./About2.vue')
  },
  {
    path: '/about3',
    name: '逻辑复用',
    // vue路由懒加载
    component: () => import('./About3.vue')
  },
  {
    path: '/about4',
    name: 'vue的内置组件',
    // vue路由懒加载
    component: () => import('./About4.vue')
  }
]
export default routerList
