export default {
  install(app: any, options: any) {
    // 自定义插件，当需要app做很多操作时，
    app.directive('hello', (el, binding) => {
      // binding 包含了指令的入参
      console.log('binding=', binding)
      el.innerHTML = binding.value.str
    })
    // 在mounted 和updated 下执行的自定义指令
    app.directive('color', (el, binding) => {
      // binding 包含了指令的入参
      console.log('binding=', binding)
      el.style.color = binding.value.color
    })
  }
}
