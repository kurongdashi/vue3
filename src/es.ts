// es6 说明
function Console(str) {
  console.log(`================${str}=====================`)
}
// 1、Proxy和Reflect 是影子对象且都是 Object 升级对象
let userInfo = {
  name: '张三',
  age: 20,
  address: '广东',
  city: '深圳'
}
// 拦截器可以有13种方法
let handler = {
  get(target, key) {
    console.log('get--')
    if (key == 'address') {
      return target['name'] + '在' + target['address'] + target['city']
    }
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    console.log('set--')
    if (key == 'age') {
      value = value * 2
    }
    return Reflect.set(target, key, value)
  },
  apply(target, thisBindObj, args) {
    debugger
    return arge[0]
  },

  deleteProperty(target, key) {
    if (key !== 'name') {
      return Reflect.deleteProperty(target, key)
    } else {
      throw new Error('不能删除' + key + '属性')
    }
  }
}
// proxy 是object的专属拦截对象有13个方法
// Reflect 是Object 的升级版，和Proxy对象方法一一对应
let proxy = new Proxy(userInfo, handler)
console.log('name=', proxy.name)
console.log('address=', proxy.address)
proxy.age = 33
console.log('address=', proxy.age)
delete proxy.age
console.log('proxy=', proxy)
// delete proxy.name
Console('JS class')
// 装饰器@类 、@类函数 给类和类的函数增加装饰
// @decorateClass('123@qq.com')
class Person {
  constructor() {
    console.log('创建Person实例了~')
  }
  // 静态代码块，用于初始化静态变量,类中的变量不可枚举，但可以使用Reflect.oweKeys() 获取静态方法（属性）
  static weakUpTime = 10
  static {
    try {
      this.weakUpTime += 100
    } catch (error) {}
  }
  // 私有属性（方法） 使用# ES2022提出，只能在当前类里面使用，子类无法继承私有方法（属性）
  #money = 1000
  name = '张三'
  // 私有属性（方法） 使用#
  #work(m = 100) {
    console.log('私有方法work')
    this.#money += m
    return this.#money
  }
  eat(food = '饭') {
    console.log('eat', food)
  }
  static sleep(time = 10) {
    console.log('sleep time is', time)
  }
  gaoqian() {
    return this.#work()
  }
}
// 因为要保证子类在父类后，所以类不存在提升
// @decorateClass
class Teacher extends Person {
  // 子类如果使用construct 那必须调用super(),因为es6是先创建父类，然后才创建子类，（而es5是先创建子类然后将父类指向其），所以this必须在super()后
  // construct() 默认会有一个隐藏

  goUp() {
    console.log('去上课了~~')
  }
}
// 默认装饰器只有一个target 目标对象参数，不能接受其他参数
function decorateClass(target) {
  target.isMan = true
}
// 可以在外层封装一层，变成可接受参数的装饰器
function decorateClass2(args) {
  return function (target) {
    target.email = args
  }
}
function Greeter(value, context) {
  if (context.kind === 'class') {
    value.prototype.greet = function () {
      console.log('你好')
    }
  }
}

// @Greeter
type decorator = (
  value,
  content: {
    name: string | symbol
    kind: string
    access: {
      get?(): unknown
      set?(value: unknown): void
    }
    private?: boolean
    statice?: boolean
    addInitializer?(initializer: () => void): void
  }
) => output | void
const person = new Person()
const teacher = new Teacher()
person.eat('hello')
Person.sleep(12)
// console.log(person instanceof Person)
// 但可以使用Reflect.oweKeys() 获取静态方法属性
console.log('Person oweKeys', Reflect.ownKeys(Person))
console.log('Teacher oweKeys', Reflect.ownKeys(Teacher))
teacher.goUp()
console.log(teacher instanceof Person)
console.log('实例person.name', person.name)
console.log('对象的Person.name', Person.name)
console.log('weak', Person.weakUpTime)
console.log('isMan=', person.isMan)
console.log('#money=', person.gaoqian())

//================ 类的ts写法====================
Console('ts基础')
// 1、unknown 类型是any 的严格版，unknown不能赋值给其他类型，不能直接调用子属性,
// 2、unknown 只有通过typeof 明确类型后才可以使用对应方法，属性
let hello: unknown = { a: 1 }
if (typeof hello == 'object') {
  console.log('hello.a', hello.a) // hello.a 1
}
// 空类型：不能赋值的类型，所有类型都不是的情况下就是空类型
// let world: never = 1
function add(): never {
  throw new Error('never表示没有返回')
}
Console('ts8种基本类型,string,number,boolean,undefine,null,symbol,object,bigint')
// 大写的Object：代表所有可以包装为对象的类型包括（string,number,boolean） ，小写的object：只能是对象类型，所以建议使用小写
let obj: Object = 1
// undefine,null 可以赋值给其他类型，如果不想这么做，可开启校验
// tsconfig.js  scriptNullChecks:true
let obj1: object = undefined || null
// 单个值也是一种类型
// let str: 'hello'
// 'www' 是string类型，而hello 类型是string类型的子类，父类不能赋值给子类型，但子类型可以赋值给父类型，
// str = 'www'
// str = 'hello'
// 交叉类型：两种类型交集 类型A & 类型B 一般用于对象合并
type A = { x: number }
type B = { y: number }
let c: A & B = { x: 10, y: 20 }
type Lang = 'english' | 'chinaess' | 'french'
function speek(lg: Lang) {
  console.log('i can speek', lg)
}
const str = 'english' // str 被推断为string 类型，是Lang 的父类，直接使用const 定义变量
speek(str)

Console('ts 数组')
let arr: (number | string)[] = [1],
  arr2: Array<number> = [2]
//================ 函数 接口写法(对象写法)====================
Console('函数 接口写法(对象写法)')

// 函数写法
type Test2<T> = (t: T) => T
// 函数接口写法
interface Test<T> {
  (t: T): T
}

interface ToArr<T extends Array<U>> {
  (t: T): T
}
// 定义时有类型，函数体就可以不写类型，反之函数体有类型，定义就可以不写，因为可以推断出类型
const newFn: Test<number> = function (t) {
  return t * 2
}
// 函数重载就是，根据传入的类型不同，执行不同的逻辑
const newFn3: Test2<string> = function (t) {
  return 'hello' + t
}
const newFn2: ToArr<Array<string>> = function (args) {
  return args.map((item) => item + 2)
}
console.log('newFn(3)=', newFn(3))
console.log('newFn3=', newFn3(4))
// console.log('newFn(3)=', newFn('3'))
// console.log('newFn2=', newFn2([1, 2, 3, 4, 5]))
console.log('newFn2=', newFn2(['1', '2']))

//================对象接口写法====================
Console('对象接口写法')
// type 和 interface 几乎相当，type 支持其他类型，不能继承（看交叉类型实现扩展），interface只支持对象，可以继承
interface Car1 {
  // 定义对象属性索引,可以传任意值
  [s: string]: number
}
class Car2 {
  // 定义类属性索引（由于类的方法也属于类的属性索引值必须包含方法），key string 值必须number或方法返回number，
  [s: string]: number | (() => number | void)
}
// ts 中相同结构类会被认为同一类型
interface Color<T, U> {
  bgColor: string
  // 接口中泛型表示接口中某个属性的类型或者方法参数的类型
  fontColor: T
  // 接口中泛型方法被实现必须要具名
  show: (s: U) => U
}
Console('泛型')
// 泛型是未实现的属性或方法才需要泛型，所以接口或抽象类中才需要泛型
// 泛型默认<T = string>
interface Size<T = string> {
  carSize: 'big' | 'small' | 'xs-small'
  sweetSize: T
}
// 接口之间可以继承，减少类实现多接口写法,ts中是多继承
// 接口的泛型在被继承时，必须明确是那种类型
interface Car extends Color<string, number>, Size {
  run(): void
  speed?: number //可选属性
}
// 抽象类不能被实例化，只能继承或实现
abstract class SmallCar<T> {
  // 人数 public 默认省略
  public personal: number = 10
  private smallName = 'lette car'
  // protected 受保护的属性，只能在子类内部使用，无法在实例中使用
  protected door = 'one'
  // 抽象类中的抽象属性，或抽象方法，子类继承是必须实现
  abstract money: number
  abstract hello(arg: T): T
}
// 实现类时，可以多继承其他类(抽象类只能继承一个其他类可多个)，或实现其他接口
class BigCar extends SmallCar<string> implements Car {
  // 类的可选属性如果没有实现，则必须重新定义

  sweetSize = '1'
  speed?: number
  fontColor = '#fff'
  carSize = 'big' as const
  bgColor = '#1899ff'
  money = 10
  static world = 'world' // 静态成员不能使用类泛型
  // 只读属性readonly
  readonly weigth = 100
  // private 可以被 x in obj 或 obj[x]访问到 所以建议使用 #carName 表示私有属性
  private carName = 'hello'
  // 在构造函数这种声明变量，会自动在编译后变为类的内部定义的变量 ==》
  constructor(public name: string) {
    super()
  }
  show(num: number) {
    return num
  }
  hello(str: string) {
    return str
  }
  run() {
    console.log(`this ${this.carName} is run~ and door number= ${this.door}`)
  }
}

const bigCar = new BigCar('baoma')
bigCar.money = 12
bigCar.speed = 180
bigCar.run()
console.log('bigCar=', bigCar)

// 由于class 在ts中即是类也是类型 所以可以直接 implements
// class MyCar implements BigCar {}
Console('枚举')
// enum 默认会给值，从0 开始，可以从某个值开始赋值后面递增,enum 可以通过值获取成员名称

enum Color1 {
  RED,
  BLUE,
  YELLOW
}
enum Color2 {
  RED = 3,
  BLUE,
  YELLOW
}
console.log('Color1=', Color1)
console.log('enum 可以通过值获取成员名称=', Color1[0])
console.log('Color2=', Color2)

const arr1 = [
  { id: 3, parent: 2 },
  { id: 2, parent: 1 },
  { id: 5, parent: 2 },
  { id: 6, parent: 2 },
  { id: 4, parent: 3 },
  { id: 1, parent: null }
]
console.log('arr1=', arr1)
let treeObj = null
arr1.forEach((item) => {
  if (item.parent) {
    // 找父级
    const obj: any = arr1.find((item1) => item1.id == item.parent)
    if (!obj.children) {
      obj.children = []
    }
    obj.children.push(item)
  } else {
    treeObj = item
  }
})
console.log('treeObj=', treeObj)
