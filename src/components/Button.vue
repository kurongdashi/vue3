<script setup lang="ts">
import { ref, inject } from 'vue'
const focus = ref(false)
// 1、自定义组件在外部使用时会把class、id、style的没声明的属性透传到子组件内部
const emit = defineEmits(['onClick'])
// emit('onClick') <==> $emit('onClick')
const click = () => {
  focus.value = !focus.value
  emit('onClick')
}
const info = inject('userInfo', { name: '默认' })
console.log('inject 获取info', info)
</script>
<template>
  <button class="btn" @click="click">
    <!-- 在子组件内部能通过inject()获取父组件注入的内容 -->
    {{ info.name }}
    <slot>按钮</slot>
  </button>
</template>
<style scoped>
.btn {
  line-height: 32px;
  background-color: #189fff;
  border: 1px solid #189fff;
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  &:active {
    background-color: #1834ff;
    border: 1px solid #1834ff;
  }
  /* &:hover {
    background-color: #18aaff;
    border: 1px solid #18aaff;
  } */
}
.desc {
  margin-left: 20px;
  color: #189fff;
}
</style>
