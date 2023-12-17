<script setup lang="ts">
// 自定义组件在外部使用时会把class、id、style的没声明的属性透传到子组件内部
// onClick 事件也会透传
// slot 内可给默认值
</script>
<template>
  <!-- 多插槽通过name属性区分，外部使用v-slot=“name”,或#name 来使用渲染到对应位置 -->
  <div class="page">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page {
  .header {
    height: 30px;
  }
  .content {
    display: flex;
    > div {
      flex: 1;
    }
  }
}
</style>
