import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// Element-plus 需要按需加载
import AutoImports from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 提供vue3单文件支持
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { name } from './package.json'
// 通过 process.env.NODE_ENV获取当前打包环境,在window 系统中 set NODE_ENV=xx vite build
console.log('env=', process.env.NODE_ENV)
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? '/dist' : '/',
  define: {
    __API__: JSON.stringify('https://www.baidu.com')
  },

  build: {
    // assetsInlineLimit: 2 * 1024, //资源限制小于此值则内联到代码里
    // chunkSizeWarningLimit: 5 * 1024,
    // cssCodeSplit: false, //禁用则会单独提取css到 style.css
    // minify: 'esbuild', //terser压缩代码但是打包没有esbuild 模式快，默认为esbuild
    sourcemap: false,
    rollupOptions: {
      // external: ['vue'],
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        // assetFileNames: 'assets/[name]-[hash].[ext]',
        // 分割chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // node_modules 单独打包 获取名称
            // return id.split('node_modules/')[1].split('/')[0].toString()
            return 'vendor'
          }
        }
        // globals: { vue: 'Vue' }
      }
    }
  },
  plugins: [
    // 打包分析插件，类似bundle-analyzer
    visualizer({
      open: true,
      projectRoot: '/dist'
    }),
    // 提供vue3单文件支持
    vue(),
    // element 按需引入需要插件服务
    AutoImports({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    port: 8000,
    cors: true,
    open: true,
    strictPort: false, //端口被占用，也可启动服务
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/node_modules': fileURLToPath(new URL('./node_modules', import.meta.url))
    },
    extensions: ['.ts', '.js', '.json']
  }
})
