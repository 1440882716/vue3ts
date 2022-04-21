<template>
  <div>商品列表</div>
  <el-table :data="data.goodsData" style="width: 100%">
    <el-table-column prop="name" label="商品名" />
    <el-table-column prop="price" label="价格" />
    <el-table-column prop="description" label="商品描述" />
    <el-table-column prop="publishDate" label="发行日期" />
    <el-table-column prop="publishDate" label="发行日期" />
    <el-table-column label="操作" width="100" fixed="right">
      <template v-slot="{ row }">
        <el-button type="text" @click="addEditHandle(row.id)">编辑</el-button>
        <el-button type="text" @click="delHandle(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from "vue"
import { goodsList } from "../http/api"
export default defineComponent({
  setup() {
    const data = reactive({
      goodsData: [],
    })
    const getData = () => {
      goodsList().then((res: any) => {
        console.log(res)
        if (res.code == 200) {
          data.goodsData = res.data.records
          // console.log(66666)
          // debugger
        }
      })
    }
    const addEditHandle = (id: string) => {
      console.log(id)
      debugger
    }
    const delHandle = (id: string) => {}
    onBeforeMount(() => {
      getData()
    })
    return {
      // 属性
      data,
      // 方法
      getData,
      addEditHandle,
      delHandle,
    }
  },
})
</script>
<style scoped></style>
