<template>
  <el-container>
    <!-- 侧边菜单 -->
    <el-aside width="200px">
      <div class="logo-box" style="color: #ffffff">
        <img class="logo" src="../assets/img/cat-logo.png" alt="" />
        管理系统
      </div>
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      >
        <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{ i.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右边内容 -->
    <el-container>
      <!-- 右边头部 -->
      <el-header>
        <el-row class="row-bg" justify="space-around">
          <el-col :span="6"
            ><el-icon :size="20"><expand /></el-icon
          ></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"><div>蜡笔小新</div></el-col>
        </el-row>
        <el-icon :size="20"><expand /></el-icon>
      </el-header>
      <!-- 右边内容 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { Expand } from "@element-plus/icons"
export default defineComponent({
  name: "HomeView",
  components: {
    Expand,
  },
  setup() {
    const router = useRouter()
    const list = router.getRoutes().filter((v) => v.meta.isShow)
    console.log(list)
    return {
      list,
    }
  },
})
</script>
<style lang="scss" scoped>
.logo-box {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #545c64;
}
.logo {
  width: 50px;
  text-align: center;

  // /* height: 50px; */
}
.el-header {
  // background: #545c64;
  line-height: 60px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 3%);
}
h2 {
  text-align: center;
  line-height: 50px;
}
.web-icon {
  width: 200px;
  text-align: center;
}
.handle-icon {
  line-height: 50px;
  text-align: left;
}
.btn-name {
  line-height: 50px;
  text-align: right;
}
.el-aside {
  .el-menu {
    // height: calc(100% -80px);
  }
}

/* .el-menu-vertical-demo {
  width: 100%;
  height: 100%;
} */
</style>
