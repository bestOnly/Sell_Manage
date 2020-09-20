<template>
  <div>
    <panel>
      <template #title>
        <span>密码修改</span>
      </template>
      <template #content>
        <el-form
          :model="pwdForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="原密码" prop="password">
            <el-input type="password" v-model="pwdForm.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPwd">
            <el-input type="password" v-model="pwdForm.newPwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="comfirmPwd">
            <el-input type="password" v-model="pwdForm.comfirmPwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
import { pwdReg } from '@/utils/validate'

export default {
  components: {
    panel
  },
  data() {
    // 密码验证
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!pwdReg.test(value)) {
        callback(new Error('密码首位为字母，应包含数字，字母或者下划线'))
      } else {
        // 当先输入确认密码再输入新密码，新密码与确认密码一致的情况下，确认密码的提示自动消失
        if (this.pwdForm.comfirmPwd !== '') {
          this.$refs.ruleForm.validateField('comfirmPwd')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.pwdForm.newPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      pwdForm: {
        password: '',
        newPwd: '',
        comfirmPwd: ''
      },
      rules: {
        password: [
          { validator: validatePass, required: true, trigger: 'blur' }
        ],
        newPwd: [{ validator: validatePass, required: true, trigger: 'blur' }],
        comfirmPwd: [
          { validator: validatePass2, required: true, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success('添加成功')
        } else {
          this.$message.error('账户或密码出现问题哦~')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item {
  width: 60%;
}
.el-form-item:nth-child(2) {
  width: 45%;
}
.el-form-item:nth-child(3) {
  width: 30%;
}
</style>
