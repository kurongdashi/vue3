# vue3

## SSR [文档](https://cn.vuejs.org/guide/scaling-up/ssr.html#what-is-ssr)

```
 SSR static-site-render 即服务端渲染，在对首屏加载有要求的时候，并且是静态页面时

```

## 多项目共用组件库实现 [实现方案](https://juejin.cn/post/6844904184156782600)

- vite 中和webpack不一样的地方 [内置变量不同](https://blog.csdn.net/u014752296/article/details/128614229)

```
import { URL, fileURLToPath } from 'node:url'
 // vite和webpack不一样，不能直接使用 __dirname,__filename,module,require,exports 五个内置变量，因为这是common.js规范
    function getDirName() {
  //   import.meta.url 是file:///D:/code/.../script.js
  const urlobj1 = new URL('.', import.meta.url)
  //   urlobj1 是一个url对象，里面有href,pathname等属性
  //   fileURLToPath 获取路径
  const __dirname = fileURLToPath(urlobj1)
  const __filename = fileURLToPath(import.meta.url)
  console.log('__dirname=', __dirname)
  console.log('__filename=', __filename)
  return { __dirname, __filename }
}
```

[vue3文档](https://cn.vuejs.org/guide/essentials/event-handling.html)
[vue-router](https://router.vuejs.org/zh/)
[vite](https://cn.vitejs.dev/guide/why.html)
[pinia](https://pinia.vuejs.org/zh/core-concepts/)
[ts文档](https://typescript.p6p.net/typescript-tutorial/intro.html)
