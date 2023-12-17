<script setup lang="ts">
import { ref } from 'vue'
const isFocus = ref(false)
// 自定义表单组件实现外部的v-model, 默认需要定义modelValue 值，可修改名称

const props: any = defineProps({
  title: String,
  // titleModifiers 如果有参数，修饰符也同步修改，无参数时默认为modelModifiers
  titleModifiers: {
    default: () => ({})
  }
})
const emit = defineEmits(['update:title'])
const inputChange = (e: any) => {
  let value = e.target.value
  if (props.titleModifiers.uppercase) {
    value = value?.toUpperCase()
  }
  emit('update:title', value)
}
const toggleFocus = () => {
  isFocus.value = !isFocus.value
}
</script>
<template>
  <input
    class="input"
    @focus="toggleFocus"
    @blur="toggleFocus"
    :class="{ focus: isFocus }"
    :value="title"
    @input="inputChange($event)"
  />
</template>
<style scoped>
.input {
  width: 220px;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid #ccc !important;
  border-radius: 4px;
  outline: none;
  margin: 5px 0;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #189fff !important;
  }
  &.focus {
    border: 1px solid #189fff !important;
  }
}
</style>
