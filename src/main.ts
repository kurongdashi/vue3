import { createApp, createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createPinia } from 'pinia'
import Title from '@/components/MyTitle.vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import myPlugin from './myPlugin'
/**
 * SSR 即服务端渲染，在对首屏加载有要求的时候，并且是静态页面时
 */
// const app1 = createSSRApp(App)
// renderToString(app1).then((res) => {
//   console.log(res)
// })

// 创建应用 createApp().mount('#app')
const app = createApp(App)
// 全局注册，减少使用，1、打包会打入不管是否被使用，2、父子关联性无法体现
app.component('MyTitle', Title)
// use(createPinia) 使用全局store 0pinia
app.use(createPinia())
// use(router) 使用路由
app.use(router)
// 使用插件
app.use(myPlugin as any)
// 开启
app.mount('#app')
