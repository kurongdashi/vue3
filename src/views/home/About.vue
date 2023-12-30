<script setup lang="ts">
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import MySubTitle from '@/components/MySubTitle.vue'
import UpcaseInput from '@/components/UpcaseInput.vue'
import { onMounted, onUnmounted, onUpdated, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const message = ref('hello')
const message2 = ref('hello2')
const counter = useCounterStore()
const route = useRoute()
onMounted(() => {
  console.log('route.state=', route.state)
  console.log('route.query=', route.query)
  console.log('route.params=', route.params)
})
// 被keep-alive缓存的组件，下次进入只调用onupdated
onUpdated(() => {
  console.log('onUpdated route=', route)
})
onUnmounted(() => {
  console.log('onUnmounted route=', route)
})
// 可以通过 storeToRefs 保持响应，直接结构将失去响应
const { count, doubleCount } = storeToRefs(counter)
</script>
<template>
  <div class="about">
    <MyTitle title="深入Vue"></MyTitle>
    <MySubTitle title="store的使用">
      <div>
        store中的count:{{ count }},doubleCount:{{ doubleCount }}
        <Button @on-click="() => counter.increment()">count+=</Button>
      </div>
    </MySubTitle>
    <MySubTitle title="组件全局注册">
      <div>1、使用app.component('MyTitle',MyTitle) 实现组件全局</div>
    </MySubTitle>
    <MySubTitle title="组件Props">
      <div>1、在组件中定义props 可以在函数中使用对象指定组件属性</div>
    </MySubTitle>
    <MySubTitle title="组件事件交互">
      <div>1、在组件中定义事件emit('click',val) 或 $emit('click',val)，父组件@监听事件</div>
    </MySubTitle>
    <MySubTitle title="组件attributes 穿透">
      <div>1、直接对子组件添加的class id @click 等会传递到子组件模板上</div>
      <Button class="my-btn">测试按钮</Button>
      <Button class="my-btn"></Button>
    </MySubTitle>
    <MySubTitle title="组件实现v-model效果">
      <div>
        <Input v-model="message" /> <span>组件的v-model 使用结果 {{ message }}</span>
      </div>
      <div>
        <UpcaseInput v-model:title.uppercase="message2" />
        <span>带修饰符的组件 使用结果 {{ message2 }}</span>
      </div>
    </MySubTitle>
  </div>
</template>

<style scoped>
.my-btn {
  width: 200px;
}
</style>
