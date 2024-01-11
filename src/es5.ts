// es5对象和new 命令
// 1、对象函数如果不使用new命令则变成普通函数，那是内部没有this,则this指向外层对象，this.变量 变成全局变量
// 严格模式，不使用new命令会报错
function Person(name = '') {
  // new.targe指向当前函数，当使用new命令时，否则为undefined
  //   if (!new.target) {
  //     throw '你应该使用new命令'
  //   }
  this.name = name
  //   构造函数是否有返回
  //   return this // 默认会返回this,不写也可
  //   return { a: 100 } //如果返回了其他对象，那么就变成其他对象了
  //   return 1000 // 如果不返回对象，则会忽略返回值
}
// 任何对象都可以成为别人的原型对象，不要随意修改原型对象，原型对象的constructor要一起改
Person.prototype = { a: '11' }
// js规定每个函数都有prototype，只有在创建对象时才有用，用于共享属性
Person.prototype.eat = function (food) {
  console.log('正在吃:' + food)
}

// Person('使用')
const my = new Person('老王')
my.eat()
// 输出my只会显示my自身属性，但实际上可以调用my继承的属性
console.log('my:', my, JSON.stringify(my))

// 3、prototype.constructor 属性，原型对象的构造函数是谁，由于原型对象可以被实例继承，所以实例上也可以访问constructor
console.log(
  'prototype.constructor 属性',
  my.constructor === Person.prototype.constructor,
  my.constructor === Person // 由于修改了原型所以不相等了
)

//2、模拟new
function _new(constructor, ...args) {
  console.log('constrct.prototype:', constructor.prototype)
  //   根据构造函数的原型对象创建一个空对象
  const empty = Object.create(constructor.prototype)
  console.log('empty:', empty)
  // 执行构造函数
  const result = constructor.apply(empty, args)
  //   返回执行后的结果
  if (typeof result === 'object' && result) {
    return result
  } else {
    return empty
  }
}
const zhangsan = _new(Person, '张三')
console.log('zhangsan:', zhangsan)
zhangsan.eat('米饭')
