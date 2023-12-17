import { ref, watchEffect } from 'vue'
// 创建一个异步请求函数，通过外部传入参数，发起请求返回数据
interface initObj {
  method?: 'get' | 'post'
  params?: any
}
export const useFetch = (url: string, obj?: initObj) => {
  const data = ref(null),
    error = ref(null)
  watchEffect(async () => {
    fetch(url, { mode: 'cors', ...obj })
      .then((res: any) => {
        data.value = res.data
      })
      .catch((e) => {
        error.value = e
      })
  })
  return { data, error }
}
