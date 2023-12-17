<script setup lang="ts">
import { ref } from 'vue'
const value = ref('hello')
const text = ref('world')
// 外部使用v-slot 时可以结构一个对象 参数{value,text}
</script>
<template>
  <!-- 定义作用域插槽，插槽内绑需要使用到的值,就可以在使用组件时可以访问到子组件内部属性 name为 保留字段不能占用 -->
  <slot :value="value" :text="text"></slot>
</template>
<style scoped></style>
