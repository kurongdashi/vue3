<script setup lang="ts">
import MySubTitle from '@/components/MySubTitle.vue'
import Page from '@/components/Page.vue'
import Button from '@/components/Button.vue'
import Provider from '@/components/Provider.vue'
import { ref, provide, readonly, defineAsyncComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

//1、 组件属性的深层传递使用 Provide-传,inject-取，类似react 的 Context useContext
const userInfo: any = ref({
  name: '张无忌',
  age: 23,
  address: '明教'
})
provide(
  'userInfo',
  //   使用readonly 让子组件无法修改属性
  readonly(userInfo)
)
//2、 异步组件，使用defineAsyncComponent,类似懒加载，搭配Suspense 使用
const AsyncInput = defineAsyncComponent(() => import('@/components/Input.vue'))
</script>
<template>
  <Page class="about2">
    <!-- 具名插槽v-slot='name' 的简写 #name -->
    <template #header> <MyTitle title="深入Vue组件"></MyTitle></template>
    <template #left>
      <MySubTitle title="store使用">
        1、使用store count:{{ counter.count }}
        <Button @on-click="() => counter.subcount()">count-=</Button>
      </MySubTitle>
      <MySubTitle title="slot插槽left">
        <div>
          1、slot 不使用name 属性等于 #default 插槽

          <Button @on-click="() => console.log('按钮点击了~')"></Button>
        </div>

        <div>
          2、v-slot
          可以接受一个对象参数(子组件上的属性结构到上面)，变成作用域插槽，可以在插槽内使用子组件的值
          <div>
            <Provider v-slot="{ value, text }">{{ value }} {{ text }}</Provider>
          </div>
        </div>
      </MySubTitle>
    </template>
    <template #right>
      <MySubTitle title="slot插槽right">
        <div>1、使用defineAsyncComponent 加载组件变成异步组件 <AsyncInput /></div>
        <div>2、使用provide() inject() 可以实现react 的useContext() 效果</div>
      </MySubTitle>
    </template>
  </Page>
</template>

<style scoped>
.my-btn {
  width: 200px;
}
</style>
