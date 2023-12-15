<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '标题1'
  },
  userInfo: {
    type: Object,
    // 对象类型的默认值，必须是一个函数返回值
    default(props) {
      return { name: '张三丰', age: 120, address: '武当山' }
    }
  }
})
</script>
<template>
  <!-- 使用组件时，添加的样式会自动渲染到组件内部第一层结构上 -->
  <div class="title">
    {{ props.title }}
    <span class="account"
      >当前账号：<span class="name">{{ props.userInfo.name }}</span></span
    >
  </div>
</template>
<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  .account {
    float: right;
    font-size: 14px;

    .name {
      color: #189fff;
    }
  }
}
</style>
