<template>
  <div class="login-box">
    <div class="box">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <h2>外卖后台管理登录</h2>
        <el-form-item label="账号" prop="uname">
          <el-input
            type="text"
            prefix-icon="iconfont icon-yonghu"
            v-model="loginForm.uname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            :type="flagEye ? 'password' : 'text'"
            prefix-icon="iconfont icon-mima"
            v-model="loginForm.password"
            autocomplete="off"
          >
            <i
              slot="suffix"
              class="iconfont"
              :class="flagEye ? 'icon-eyes' : 'icon-eyes-'"
              @click="toggleEye"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      flagEye: true,
      loginForm: {
        uname: '',
        password: ''
      },
      rules: {
        uname: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          {
            min: 5,
            max: 10,
            message: '账户长度在 5 到 10 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '账户长度在 6 到 16 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    toggleEye() {
      this.flagEye = !this.flagEye
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '恭喜你，登录成功',
            type: 'success',
            duration: 2000
          })
        } else {
          this.$message.error('验证失败，请重试~')
          return false
        }
      })

      axios
        .post('http://127.0.0.1:5000/users/checkLogin', {
          account: this.loginForm.uname,
          password: this.loginForm.password
        })
        .then(str => {
          console.log(str)
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  height: 100%;
  // background-color: cadetblue;
  background-color: rgb(0, 107, 110);
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url("../../assets/img/home.jpg") no-repeat;
  // background-size: 100% 100%;
  .box {
    width: 500px;
    height: 500px;
    padding: 30px;
    padding-right: 50px;
    background: url('../../assets/img/bigMouth.png') no-repeat center;
    background-size: 100%;
    h2 {
      text-align: center;
      letter-spacing: 3px;
      margin-bottom: 10px;
      color: #fff;
      text-indent: 1em;
    }
    .el-input {
      width: 380px;
      i {
        position: absolute;
        right: 25px;
      }
    }
    .el-form {
      margin-top: 52%;
      transform: translateY(-50%);
    }
    .el-button {
      // text-align: center;
      margin-left: 50%;
      transform: translate(-100%);
    }
  }
}
</style>
