<template>
  <div>
    <panel>
      <template #title>
        <span>账户添加</span>
      </template>
      <template #content>
        <el-form
          :model="user"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账户" prop="uname">
            <el-input v-model="user.uname"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item label="用户类型" prop="group">
            <el-select v-model="user.group" placeholder="请选择用户类型">
              <el-option label="普通管理员" value="normalAdmin"></el-option>
              <el-option label="超级管理员" value="superAdmin"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
export default {
  components: {
    panel
  },
  data() {
    return {
      user: {
        uname: '',
        password: '',
        group: ''
      },
      rules: {
        uname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        group: [
          { required: true, message: '请选择用户类型', trigger: 'change' }
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
.el-form-item{
  width: 50%;
}
.el-form-item:nth-child(2){
  width: 35%;
}
</style>
