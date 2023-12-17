<script setup lang="ts">
import MySubTitle from '@/components/MySubTitle.vue'
import MyTransition from '@/components/MyTransition.vue'
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'
const showText = ref(true)
const list = ref([1, 2, 3])
const status = ref('A')
</script>
<template>
  <div class="about">
    <MyTitle title="内置组件"></MyTitle>
    <MySubTitle title="Transition组件">
      <div>
        <div>
          1、Transition组件包裹元素后，当元素出现或隐藏都会增加过渡class

          <Button @on-click="() => (showText = !showText)"
            >点击{{ showText ? '隐藏' : '显示' }}</Button
          >
        </div>

        <MyTransition name="fead">
          <span v-show="showText"
            >这里是添加的过渡的文字描述，当显示或隐藏时需要再style增加对应的过渡动画</span
          >
        </MyTransition>
      </div>
    </MySubTitle>
    <MySubTitle title="TransitionGroup组件">
      <div>
        <div>
          1、TransitionGroup组件包裹list列表后，当元素出现或隐藏都会增加过渡class

          <Button @on-click="() => list.push(list.length + 1)">点击增加一个元素</Button>
          <Button @on-click="() => list.shift()">点击删除第一个元素</Button>
        </div>
        <!-- tag 指定渲染为ul元素 -->
        <TransitionGroup name="list" tag="ul" class="pd20">
          <li v-for="item in list" :key="item">{{ item }}</li>
        </TransitionGroup>
      </div>
    </MySubTitle>
    <MySubTitle title="KeepAlive组件">
      <div>
        1、KeepAlive组件用于在切换组件时保留上一组件的状态，再次切换回来时不重置(组件内部有自己的状态维护，默认切回去时会重置)
      </div>
    </MySubTitle>
    <MySubTitle title="Teleport组件">
      <div>1、Teleport组件将modal渲染到指定位置</div>
      <Modal />
    </MySubTitle>
    <MySubTitle title="Suspense组件">
      <div>1、Suspense异步加载包裹组件，在加载过程中fallback 可以指定渲染loading</div>
    </MySubTitle>
  </div>
</template>
<style scoped>
.pd20 {
  padding-left: 20px;
}
.label {
  margin-right: 20px;
  margin-bottom: 20px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
