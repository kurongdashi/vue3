<script setup lang="ts">
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import UpcaseInput from '@/components/UpcaseInput.vue'
import { ref, watch, watchEffect } from 'vue'
const message = ref('hello')
const message2 = ref('hello2')
</script>
<template>
  <div class="about">
    <MyTitle title="深入Vue"></MyTitle>
    <div>
      <Input v-model="message" /> <span>组件的v-model 使用结果 {{ message }}</span>
    </div>
    <div>
      <UpcaseInput v-model:title.uppercase="message2" />
      <span>带修饰符的组件 使用结果 {{ message2 }}</span>
    </div>
    <Button class="my-btn">测试按钮</Button>
    <Button class="my-btn"></Button>
  </div>
</template>

<style scoped>
.my-btn {
  width: 200px;
}
</style>
