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

## vite 的优势

```
vite 将模块分成依赖+源码 分开加载
依赖：将使用esbuild（Go语言编写比js快） 预构建
源码：使用懒加载 + es6的导入方式交给浏览器去解析 + http缓存加载

vite是按需加载所以不建议编译时进行eslint检查，而是单独配置一条命令

```

- 浏览器缓存 [浏览器缓存](https://blog.csdn.net/qq_38290251/article/details/131702482)

```
按优先级排序如下：
1、serveice worker 是一种js拦截脚本，拦截请求并返回缓存内容（拦截优先级最高）
2、强缓存 cache-control 和expires 响应头实现，让浏览器从本地缓存中读取资源不发起请求
3、协商缓存 last-modified 和 eTag 响应头，发起请求如果服务器返回304，则直接使用本地资源
4、web storage 缓存 sessionStorage localStorage
```

### element-plus

- 完整导入

```
// 完整导入
import ElementPlus from 'element-plus'
// 完整导入使用
app.use(ElementPlus)
```

- 按需导入

```
安装插件

```

### vite 静态资源处理

- 定义静态资源类型在 ts 中，创建.d.ts 文件

```
// .d.ts文件
/// <reference types="vite/client" />

// 定义一些环境变量，可以在ts中支持快捷输入，不定义则不支持提示
interface ImportMetaEnv {
  readonly VITE_MY_NAME: string;
}

```

### vite 环境变量在根目录下定义不同环境配置

```
在 build 命令中 --mode prod 配置打包环境（默认是production）
--- .env
--- .env.prod
--- .env.prev
```

[vue3文档](https://cn.vuejs.org/guide/essentials/event-handling.html)
[vue-router](https://router.vuejs.org/zh/)
[vite](https://cn.vitejs.dev/guide/why.html)
[pinia](https://pinia.vuejs.org/zh/core-concepts/)
[ts文档](https://typescript.p6p.net/typescript-tutorial/intro.html)
