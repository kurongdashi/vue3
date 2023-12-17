<script setup>
const props = defineProps({
  mode: {
    type: String
  }
})
</script>
<template>
  <Transition name="fead" :mode="props.mode">
    <slot></slot>
  </Transition>
</template>

<style scoped>
/* 
fead 是name ，如果不加则默认为 v  
enter-active 和leave-active 是同一个状态
fead-move 移动中

*/
.fead-move,
.fead-enter-active,
.fead-leave-active {
  opacity: 1;
  transition: opacity 0.5s linear;
}
/* 
fead 是name ，如果不加则默认为 v  
enter-from 和leave-to 是同一个状态
fead-move 移动中

*/
.fead-enter-from,
.fead-leave-to {
  opacity: 0;
}
.fead-leave-active {
  position: absolute;
}
</style>
