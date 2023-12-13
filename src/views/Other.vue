<script setup lang="ts">
// 定义子组件入参
const props = defineProps({
  title: String,
  addressList: Array<any>
})
const emit = defineEmits(['province-change'])
</script>
<template>
  <div class="title">
    {{ props.title }}
    <select class="select" @change="$emit('province-change')">
      <option :value="address.value" v-for="address in props.addressList">
        {{ address.label }}
      </option>
    </select>
  </div>
  <slot></slot>
</template>
<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
  padding-left: 20px;
}
.select {
  margin-left: 30px;
}
</style>
