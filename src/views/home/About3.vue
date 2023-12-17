<script setup lang="ts">
import MySubTitle from '@/components/MySubTitle.vue'
import { useMouse, useFetch } from '@/utils'

const { x, y } = useMouse()
// const { data, error } = useFetch('http://127.0.0.1:3000')
</script>
<template>
  <div class="about">
    <MyTitle title="逻辑复用"></MyTitle>
    <MySubTitle title="组合函数复用">
      <div>1、组合式函数就相当于react 自定义hooks ,使用use开头函数</div>
      <div>2、组合式函数只能在setup 环境下才能使用，其他环境不能使用</div>
      <div>例子：监听鼠标移动位置：x={{ x }},y={{ y }}</div>
      <!-- <div>例子2：使用异步函数获取数据：data={{ data }},error={{ error }}</div> -->
    </MySubTitle>
    <MySubTitle title="自定义指令">
      <div v-color="{ color: '#1890ff' }">1、全局注册自定义指令 app.directive()</div>
    </MySubTitle>
    <MySubTitle title="使用插件">
      <div>
        1、 自定义插件，当需要app做很多操作时，可以将其放到插件去实现，插件导出对象中必须有install()
        方法
        <span v-hello="{ str: '你好world' }"></span>
      </div>
    </MySubTitle>
  </div>
</template>
