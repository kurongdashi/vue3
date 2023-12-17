import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// pinia defineStore 定义store

export const useCounterStore = defineStore('counter', () => {
  // 在setup 环境下可以这样定义 变量，修改变量的方法
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    console.log('count.value===', count.value)
    count.value++
  }
  function subcount() {
    console.log('count.value===', count.value)
    count.value--
  }

  return { count, doubleCount, increment, subcount }
})
