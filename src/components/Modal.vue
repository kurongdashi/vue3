<script setup lang="ts">
import Button from '@/components/Button.vue'
import { ref } from 'vue'
const showModal = ref(false)
// 可以是teleport 将dom渲染到指定标签下，在modal中可以将触发按钮，和modal放在同一个组件中
const toggle = () => (showModal.value = !showModal.value)
</script>
<template>
  <Teleport to="body">
    <div class="modal" v-show="showModal">
      <div class="modal-box">
        <div class="title">标题 <span class="close" @click="toggle">关闭</span></div>
        <div class="content">这里是弹出的内容</div>
        <div class="footer">
          <button @click="toggle">确定</button>
          <button @click="toggle">取消</button>
        </div>
      </div>
    </div>
  </Teleport>
  <Button @on-click="toggle">点击弹出</Button>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  .modal-box {
    margin: auto;
    z-index: 100;
    width: 300px;
    background-color: #fff;
    border-radius: 8px;
    .title {
      padding-left: 20px;
      font-size: 18px;
      font-weight: bold;
      line-height: 30px;
      .close {
        float: right;
        font-size: 12px;
      }
    }
    .content {
      padding: 30px;
      font-size: 14px;
    }
    .footer {
      padding-right: 20px;
      float: right;
      > button {
        margin-right: 20px;
      }
    }
  }
}
</style>
