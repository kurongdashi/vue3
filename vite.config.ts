import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImports from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    assetsInlineLimit: 2 * 1024, //资源限制小于此值则内联到代码里
    chunkSizeWarningLimit: 5 * 1024,
    cssCodeSplit: false, //禁用则会单独提取css到 style.css
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // 分割chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // node_modules 单独打包 获取名称
            return id.split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  plugins: [
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
