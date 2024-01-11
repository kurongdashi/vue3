<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { routerList } from '@/router'
import { Suspense } from 'vue'
onMounted(() => {
  console.log('组件初始化了onMounted')
})
</script>

<template>
  <header class="header">系统后台</header>
  <div class="app-wrapper">
    <nav class="nav">
      <p v-for="route in routerList" :key="route.path">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </p>
    </nav>
    <div class="wrapper">
      <!-- <RouterView /> -->
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <template #fallback>加载中...</template>
              <component :is="Component" />
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView>
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
  overflow-y: auto;
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
