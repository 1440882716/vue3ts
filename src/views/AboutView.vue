<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ count }}</h4>
    <el-button type="primary" @click="update1">更新</el-button>
    <h4>name:{{ state.name }}</h4>
    <h4>age:{{ state.age }}</h4>
    <h4>wife:{{ state.wife }}</h4>
    <el-button type="primary" @click="update2">更新</el-button>
    <el-button type="primary" @click="fun1">测试</el-button>
  </div>
</template>
<script>
import { ref, reactive } from "vue"
export default {
  // ==============   setup细节   =============
  // 在beforeCreate之前执行一次，此时组件对象还没有创建
  // this是undefined 不能通过this来访问data、computed、methods、props
  // 所有的composition API相关回调函数中  都不可以
  // setup的返回值
  // 一般是返回一个对象:为模板提供数据,也就是模板中可以直接使用此对象中的所有属性、方法
  // 返回对象的属性会与data函数返回对象的属性合并成为组件对象的属性
  // 返回对象中的方法会与methods中的方法合并成为组件的方法
  // 如果有重名 setup优先
  // 注意
  // 一般不要混合使用，methods中可以访问setup提供的属性和方法,但在aetup方法中不能访问data和methods
  // setup不能是一个async函数:因为返回值不再是return的对象,而是promise,模板看不到对象中的属性数据
  setup() {
    // ===========   ref   ============

    // 作用：定义一个数据的响应式
    // const xxx = ref(initValue)
    // 创建一个包含响应式数据的引用（reference）对象
    // js中操作数据：xxx.value
    // 在模板中操作数据不需要  .value  直接就是 xxx
    const count = ref(1)
    console.log(count.value)

    // ===========   reactive   ============

    // 作用 ：用于定义多个数据的响应式
    // 语法：const proxy = reactive(obj)  接受一个普通对象  然后返回这个普通对象的响应式代理器对象
    // 响应式转换是 “深层的” ：会影响对象内部所有嵌套的属性
    // 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

    const state = reactive({
      name: "tom",
      age: 25,
      wife: {
        name: "marry",
        age: 22,
      },
    })

    function update1() {
      // console.log("更新...")
      // debugger
      count.value = count.value + 1
    }
    function update2() {
      // console.log(state, state.name, state.wife)
      debugger
      state.name += "--"
      state.age += 1
      state.wife.name += "++"
      state.wife.age += 2
    }
    return {
      // 属性
      count,
      state,
      // 方法
      update1,
      update2,
    }
  },
  methods: {
    fun1() {
      console.log("这是在methods中访问setup中的属性===" + this.state.name)
      // debugger
    },
  },
}
</script>
<style>
.about {
  text-align: center;
}
</style>
