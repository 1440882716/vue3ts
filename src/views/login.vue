<template>
  <div class="login-box">
    <!-- <div class="login-form"></div> -->
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="login-form"
    >
      <h2 class="login-head">后台管理系统</h2>
      <el-form-item label="账号：" prop="userName">
        <el-input v-model="loginForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="btn-box" type="primary" @click="submitForm"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
// import { ElMessage } from "element-plus"

// interface
export default defineComponent({
  setup() {
    const data = reactive({
      loginForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度在6-12位之间", trigger: "blur" },
        ],
      },

      submitForm() {
        console.log(data.loginForm.userName)
        // data.loginForm.userName = 1
        // this.$refs.loginForm.validate((valid) => {
        //   if (valid) {
        //   } else {
        //     ElMessage({
        //       message: "登录失败",
        //       type: "warning",
        //     })
        //   }
        // })
        debugger
      },
    })
    // 表单验证规则一般情况下是不会变动的  所以说  不需要放在定义的响应数据data里面
    // const rules = {
    //   userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
    //   password: [
    //     { required: true, message: "请输入密码", trigger: "blur" },
    //     { min: 6, max: 12, message: "密码长度在6-12位之间", trigger: "blur" },
    //   ],
    // }
    return {
      ...toRefs(data),
    }
  },
})
</script>
<style scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/login-bgi.png") no-repeat;
  padding-top: 40px;
}
.login-form {
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin: 0 auto;
}
.login-head {
  text-align: center;
  padding: 20px 0;
}
.btn-box {
  width: 100%;
}
</style>
