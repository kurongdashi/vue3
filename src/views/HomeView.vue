<script setup lang="ts">
import { onMounted, onUnmounted, computed, onUpdated, ref, watch, watchEffect, nextTick } from 'vue'
import Other from './Other.vue'
// 创建一个响应变量，可以是任意类型，等同于 useState
const address = ref('深圳')
const userInfo = ref({ name: '张三', age: 20 })
const userInfo1 = ref({ name: '张三封', age: 140 })
const addressList = ref([
  { label: '广东', value: 20 },
  { label: '福建', value: 21 },
  { label: '湖南', value: 22 },
  { label: '江西', value: 23 },
  { label: '北京', value: 24 }
])
const input = ref(null)
// 监听变量,返回一个卸载函数
const unWatch = watch(address, async (newVal, oldVal) => {
  console.log('address', newVal, oldVal)
})
// 监听对象变量，需要使用getter 取值后 ()=>state.a
watch(
  () => userInfo.value.name,
  async (newVal, oldVal) => {
    debugger
    if (newVal == '李四') {
      address.value = '北京'
    } else {
      address.value = '深圳'
    }
    // 变量更新调用，紧跟变量修改地方使用
    nextTick(() => {
      console.log('更新完成')
    })
  },
  { immediate: true } //初始化执行一遍
)

// 等于 useEffect,内部使用的变量会自动监听
watchEffect(() => {
  if (userInfo.value.name == '李四') {
    userInfo.value.age++
  }
})
const updateInfo = () => {
  debugger
  console.log(userInfo.value.name)
  if (userInfo.value.name == '张三') {
    userInfo.value.name = '李四'
  } else {
    userInfo.value.name = '张三'
  }
}
const onClickOther = () => {
  console.log('onClickOther-------')
}
onMounted(() => {
  console.log('组件初始化了onMounted')
  if (input.value) {
    // input.value?.focus()
  }
})
onUnmounted(() => {
  console.log('组件初始化了onUnmounted')
  unWatch()
})
onUpdated(() => {
  console.log('组件初始化了onUpdated')
})
const sum = computed(() => {
  return userInfo.value.age + userInfo1.value.age
})
</script>

<template>
  <header>
    <Other
      :title="address"
      :address-list="addressList"
      @province-change="updateInfo"
      @on-click="onClickOther"
    >
      <!-- 路由容器routerView -->
      <p class="info">
        <span>姓名：{{ userInfo.name }}</span>
        <span>年龄：{{ userInfo.age }}</span>
        <span>地址：{{ address }}</span>
        <span>总数：{{ sum }}</span>
      </p>
      <!-- 模板中会自动拆包不需要写完.value -->
      <p><input type="text" v-model="userInfo.name" ref="input" /></p>
      <button @click="updateInfo">修改用户信息</button>
    </Other>
  </header>
</template>
<style scoped>
.info > span {
  display: block;
  margin-top: 10px;
}
</style>
