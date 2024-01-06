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

- 根目录下创建script.js 脚本用来生成（将项目src 下的components 目录读取为组件目录，自动生成导出文件）

```
 // 执行脚本,将在src下生产一个index.js 打包入口文件，文件内容为将所有需要共享的组件全部打包到my-components 目录下作为公共库引用
 node script
```

- 组件项目中需要再package.json中配置如下

```
 "main": "my-components/index.js",//指定项目的入口,为组件
  "scripts": {
    "dev": "vite",
    "lib": "vite build  --out-dir my-components --ssr src/index.js", // 打包需要共享的组件
    "push": "node script && yarn lib && git add . && git commit -m 'commit' && git push", // 上传到git
  },
```

[vue3文档](https://cn.vuejs.org/guide/essentials/event-handling.html)
[vue-router](https://router.vuejs.org/zh/)
[vite](https://cn.vitejs.dev/guide/why.html)
[pinia](https://pinia.vuejs.org/zh/core-concepts/)
[ts文档](https://typescript.p6p.net/typescript-tutorial/intro.html)
