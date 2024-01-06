const routerList = [
  {
    path: '/',
    name: 'Vue基础',
    component: () => import('./Home.vue')
  },
  {
    path: '/about/:id',
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
  },
  {
    path: '/about5',
    name: 'vue的原理',
    // vue路由懒加载
    component: () => import('./About5.vue')
  },
  {
    path: '/about6',
    name: 'js考点',
    // vue路由懒加载
    component: () => import('./About6.vue')
  },
  {
    path: '/about7',
    name: '远程公共组件库使用',
    // vue路由懒加载
    component: () => import('./About7.vue')
  }
]
export default routerList
