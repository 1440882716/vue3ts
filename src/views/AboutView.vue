<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ count }}</h4>
    <el-button type="primary" @click="update1">更新</el-button>
    <h4>name:{{ state.name }}</h4>
    <h4>age:{{ state.age }}</h4>
    <h4>wife:{{ state.wife }}</h4>
    <el-button type="primary" @click="update2">更新</el-button>
  </div>
</template>
<script>
import { ref, reactive } from "vue"
export default {
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
      console.log("更新...")
      // debugger
      count.value = count.value + 1
    }
    function update2() {
      console.log(state, state.name, state.wife)
      debugger
      state.name += "--"
      state.age += 1
      state.wife.name += "++"
      state.wife.age += 2
    }
    return {
      count,
      state,
      update1,
      update2,
    }
  },
}
</script>
<style>
.about {
  text-align: center;
}
</style>
