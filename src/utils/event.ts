import { onMounted, onUnmounted, ref } from 'vue'

// 事件全生命周期处理函数
/**
 *
 * @param target 事件监听对象
 * @param eventName 监听事件名称
 * @param callback 执行事件回调
 */
export const useEventListener = (target: any, eventName: string, callback: (e: any) => void) => {
  onMounted(() => target.addEventListener(eventName, callback))
  onUnmounted(() => target.addEventListener(eventName, callback))
}
// 类似自定义hooks
export const useMouse = () => {
  const x = ref(0),
    y = ref(0)
  const update = (event: any) => {
    x.value = event.pageX
    y.value = event.pageY
  }
  useEventListener(window, 'mousemove', update)
  return { x, y }
}
