<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '标题1'
  }
})
</script>
<template>
  <!-- 使用组件时，添加的样式会自动渲染到组件内部第一层结构上 -->
  <div>
    <div class="title">{{ props.title }}</div>
    <div class="content"><slot></slot></div>
  </div>
</template>
<style scoped>
.title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}
.content {
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;

  border-bottom: 1px solid #ccc;
}
</style>
