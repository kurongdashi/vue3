<script setup lang="ts">
import MySubTitle from '@/components/MySubTitle.vue'
import Button from '@/components/Button.vue'
import { ref, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 手动实现节流
const searchText = ref('')
const verifyCode = ref('')
const route = useRoute()
const router = useRouter()
/**
 * 节流：一段时间内只执行一次,场景：验证码获取，登录
 * 防抖：一段时间内只执行最后一次，input输入校验，搜索等等
 * 相同点：都是返回包装后的函数
 */
//
const jieliu = (fn, delay) => {
  let lastTime = 0
  return function (...args) {
    const newTime = Date.now()
    if (newTime - lastTime > delay) {
      // 只有上一次时间间隔超过设置时间，才执行fn()
      console.log('普通函数没有this，所以指向外层对象Vue', this)
      fn.apply(this, args)
      lastTime = newTime
    }
  }
}

const fangdou = (fn, delay) => {
  let timer: any = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 只有最后一次调用才执行fn()
      fn.apply(this, args)
    }, delay)
  }
}
const input = (e) => {
  const value = e.target.value
  console.log('输入=', value)
  searchText.value = value
}
const submit = () => {
  const val = String(Math.random() * 10000).substring(0, 4)
  verifyCode.value = val
}
const input2 = fangdou(input, 1000)
const submit2 = jieliu(submit, 1000)
const jump = () => {
  router.push({
    path: '/about/aa',
    query: { type: 'text' } // 拼接在路由地址?type=xxx
  })
}
</script>
<template>
  <div class="about">
    <MyTitle title="ES6常用考场"></MyTitle>
    <MySubTitle title="节流和防抖">
      <div>
        防抖-快速输入搜索：<input type="text" @input="(e) => input2(e)" />
        只会在最后输入停止或完成才执行一次,结果：{{ searchText }}
      </div>
      <div>
        节流-疯狂点击提交：<Button @on-click="(e) => submit2(e)">提交</Button>
        规定时间内只执行一次，验证码发送：{{ verifyCode }}
      </div>
      <Button @on-click="jump">jump 首页</Button>
    </MySubTitle>
  </div>
</template>
<style scoped>
.pd20 {
  padding-left: 20px;
  background-color: #f00;
}
.label {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
