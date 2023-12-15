<script setup lang="ts">
// 自定义表单组件实现外部的v-model 默认需要定义modelValue属性和， 更新事件update:modelValue
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event as any).target.value)"
  />
</template>
<style scoped>
.input {
  width: 220px;
  height: 32px;
  padding-left: 8px;
}
</style>
