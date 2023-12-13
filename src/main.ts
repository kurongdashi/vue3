import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Title from './views/Other.vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// 创建应用 createApp().mount('#app')
const app = createApp(App)
// 全局注册，减少使用，1、打包会打入不管是否被使用，2、父子关联性无法体现
app.component('Title', Title)
// use(createPinia) 使用全局store pinia
app.use(createPinia())
// use(router) 使用路由
app.use(router)
// 开启
app.mount('#app')
