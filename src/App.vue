<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { routerList } from '@/router'

onMounted(() => {
  console.log('组件初始化了onMounted')
})
</script>

<template>
  <header class="header">系统后台</header>
  <div class="app-wrapper">
    <nav class="nav">
      <p v-for="route in routerList">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </p>
    </nav>
    <div class="wrapper">
      <RouterView />
    </div>
  </div>
</template>
<style scoped lang="less">
.header {
  background-color: #1890ff;
  height: 80px;
  line-height: 80px;
  padding-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.app-wrapper {
  display: flex;
  height: calc(100% - 80px);
  .nav {
    width: 240px;
    border-right: 1px solid #ccc;
    padding-top: 20px;
    p {
      margin-bottom: 10px;
      padding-left: 20px;
    }
  }
  .wrapper {
    flex: 1;
    padding: 24px;
  }
}
</style>
