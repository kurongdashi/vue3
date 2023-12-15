<script setup lang="ts">
// 定义子组件入参
const props = defineProps({
  title: String,
  addressList: Array<any>
})
// 方法1、在setup 内创建emit 抛出函数
const emit = defineEmits(['province-change', 'onClick'])
</script>
<template>
  <div class="title">
    {{ props.title }}
    <!--方法2、 在模板中直接使用$emit -->
    <select class="select" @change="$emit('province-change')">
      <option :value="address.value" v-for="address in props.addressList">
        {{ address.label }}
      </option>
    </select>
    <button
      class="btn"
      :class="{ 'btn-active': props.title == '北京' }"
      @click="() => emit('onClick')"
    >
      修改信息
    </button>
  </div>
  <slot></slot>
</template>
<style scoped>
.title {
  font-weight: bold;
  font-size: 20px;
}
.select {
  margin-left: 30px;
}
.btn {
  margin-left: 20px;
}
.btn-active {
  background-color: #189fff;
  color: #fff;
}
</style>
