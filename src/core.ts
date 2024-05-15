/**
 * vue3 为什么使用proxy
 * 1、Proxy 可以对整个对象使用，不需要再遍历对象的属性了
 * 2、proxy 可以直接对数组、map/set 使用，原来的Object.definedProperty 处理数组是，重新和拦截了数组的方法
 *
 */
const arr = [
  ['a', 1],
  ['b', 2]
]
const user = {
  name: '张三',
  age: 20,
  address: '深圳',
  email: '123@qq.com'
}
const map = new Map(arr)

const handler = {
  set(target, key, value) {
    console.log('拦截：target, key, value=', target, key, value)
    return Reflect.set(target, key, value)
  },
  get(target, key, value) {
    console.log('拦截：target, key, value=', target, key, value)
    return Reflect.set(target, key, value)
  }
}
// 拦截map
const p1 = new Proxy(map, handler)
console.log(p1.a)
// 拦截数组
const p2 = new Proxy(arr, handler)
console.log(p2[0][0])
// 拦截对象,不需要再遍历对象的属性了
const p3 = new Proxy(user, handler)

console.log(p3.name)
console.log(p3.age)
// 1、defineProperty 需要遍历对象属性，
// 2、数组的操作方法定义在原型上，所以需要对数组增、删、查操作方法进行重写，直接操作数组下标无法获得响应（a[0]='xx'），所以有Vue.set 手动设置响应
// 总的来说没有proxy性能强大，可以直接对数组、map/set 进行监听
const newObj = Object.defineProperty({}, 'email', {
  set(value) {
    console.log('defineProperty set拦截', value)
    return
  },
  get() {
    console.log('defineProperty get拦截')
    return '456@qq'
  }
})
newObj.email = 'abc'
console.log('newObj.email', newObj.email)
// ======================函数柯里化==================================
function add1(x) {
  return function (y) {
    return x + y
  }
}
// 柯里化：将多参数的函数变成每层函数只接受单一参数，并且返回一个函数，多层处理多个参数的过程
console.log('柯里化后输出=', add1(3)(5))
// 好处可以分步处理复杂逻辑，例如计算一个数组元素的n次方

function calc1(n) {
  return function (list) {
    let arr = list.map((x) => Math.pow(x, n))
    return arr.reduce((a, b) => a + b)
  }
}

console.log('柯里化后输出=', calc1(2)([1, 2, 3, 4]))
