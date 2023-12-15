<script setup lang="ts">
// 自定义组件在外部使用时会把class、id、style的没声明的属性透传到子组件内部
// onClick 事件也会透传
// slot 内可给默认值
</script>
<template>
  <button class="btn">
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
  &:hover {
    background-color: #1834ff;
    border: 1px solid #1834ff;
  }
}
</style>
