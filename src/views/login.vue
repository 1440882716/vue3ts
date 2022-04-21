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
        <el-button
          class="btn-box"
          type="primary"
          @click="submitForm(loginFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue"
import { InitData } from "../types/login"
import type { FormInstance } from "element-plus"
import { login, imgCode } from "../http/api"
import { useRouter } from "vue-router"
// import { ElMessage } from "element-plus"

export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const imgStr = ref()
    const rules = {
      userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 12, message: "密码长度在6-12位之间", trigger: "blur" },
      ],
      captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    }

    // 登录
    const submitForm = (loginFormRef: FormInstance) => {
      loginFormRef?.validate((valid: boolean) => {
        if (valid) {
          login(data.loginForm).then((res) => {
            router.push("/")
            // localStorage.setItem("token", res.data)
          })
          // this.$router.push({
          // })
        } else {
        }
      })
    }
    return {
      ...toRefs(data),
      imgStr,
      rules,
      submitForm,
    }
  },
})
</script>
<style scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/login-bgi.png") no-repeat;
  /* padding-top: 100px; */
}
.login-form {
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -190px;
  margin-left: -200px;
  /* margin-top: 50%; */
}
.login-head {
  text-align: center;
  padding: 20px 0;
}
.btn-box {
  width: 100%;
}
.code-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
