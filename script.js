// 将src/components 内的组件导出为公共组件库，方便其他项目远程引用
import fs from 'fs'
import path from 'path'
// vite和webpack不一样，不能直接使用 __dirname,__filename,module,require,exports 五个内置变量，因为这是common.js规范
import { URL, fileURLToPath } from 'node:url'
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
const { __dirname } = getDirName()
const pathDir = path.resolve(__dirname, './src/components')
console.log('pathDir=', pathDir)
fs.readdir(pathDir, function (err, files) {
  if (err) {
    console.log('找不到目录')
    return
  }
  //   时间戳为了每次都可以直接提交git commit 内容变化了
  let content = `/*${new Date()}*/`
  let ext = []
  files.forEach((item) => {
    const name = item.split('.')[0]
    ext.push(name)
    // 写导入脚本
    content = content + `import ${name} from './components/${item}';`
  })
  //   导出所有的导入组件
  content = content + `export {${ext.join(',')}}`
  //   在src下生成脚本 index.js
  fs.writeFile(path.resolve(__dirname, './src/index.js'), content, 'utf-8', function (err) {
    if (err) {
      throw err
    }
  })
})
