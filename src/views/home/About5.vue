<script setup lang="ts">
import MySubTitle from '@/components/MySubTitle.vue'
import Button from '@/components/Button.vue'
import { onMounted, onUpdated, onUnmounted, onRenderTracked, onRenderTriggered, ref, h } from 'vue'
const count = ref(0)
onRenderTracked(() => {
  debugger
})
onRenderTriggered(() => {
  debugger
})
const vNode = h('div', { id: 'hello' }, ['world', h('span')])
</script>
<template>
  <div class="about">
    <MyTitle title="Vue的内部原谅"></MyTitle>
    <MySubTitle title="Vue的安全性">
      {{ vNode }}
      <div>1、html内容通过dom.textContent 属性获取dom内容,会自动将js 代码转义</div>
      <div>2、attribute内容通过setAttribute()</div>
    </MySubTitle>
    <MySubTitle title="组合式API">
      <div>
        1、通过组合式API能像函数式写vue组件，优点是逻辑相同的代码在一个方法里或在一起，不用来回切换
      </div>
      <div>2、通过组合式API能更好搭配typescript 类型推导</div>
      <div>3、代码体积小</div>
      <div>4、组合式API更适合大型项目，vue2的选项式API适合中小型项目</div>
    </MySubTitle>
    <MySubTitle title="响应式原理">
      <div>1、vue3采用Proxy 拦截对象创建响应式，Vue2采用 getter/setter es5只是读取、修改</div>
      <div>
        2、在第一次找到响应设置时track()，将这些更新函数全部存储起来，当触发trigger()
        找到所有订阅的更新函数，依次调用
      </div>
      <div>
        3、组件响应式调试钩子函数onRenderTracked, onRenderTriggered,
        <p>
          例如：count:{{ count }}
          <Button @on-click="() => count++">加</Button>
        </p>
      </div>
    </MySubTitle>
    <MySubTitle title="渲染机制">
      <div>1、虚拟DOM 即将原始dom转换为js对象 ，有模板和渲染函数可以使用</div>
      <div>
        2、渲染线程： 编译创建返回虚拟dom=>
        挂载（遍历虚拟dom跟踪响应式依赖，存储更新函数也称副作用函数）=>
        触发依赖生成新的虚拟dom,并对比而后更新到实际HTML中
      </div>
      <div>
        3、虚拟DOM缺点： 即使某个部分没有变化，也会每次都会遍历整个dom，vue做了优化，
        <p>(1)、静态dom提升，就是模板中没有使用依赖的dom会单独提出，不在遍历</p>
        <p>
          (2)、更新类型标记，每种依赖属性 :class :id, :value
          都有不同的标记，当触发依赖更新时，使用位运算确认更新标记
        </p>
        <p>组件多层结构中的静态dom会忽略，只会把使用到依赖的变成虚拟dom,减少变量计算量</p>
      </div>
    </MySubTitle>
    <MySubTitle title="渲染函数">
      <div>1、渲染函数h()</div>
    </MySubTitle>
  </div>
</template>
<style scoped>
.pd20 {
  padding-left: 20px;
  background-color: #f00;
}
.label {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
