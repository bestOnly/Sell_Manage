<template>
  <div>
    <panel>
      <template #title>店铺管理</template>
      <template #content>
        <div class="innerBox">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="配送费">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="配送时间">
            <el-input type="textarea" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="销量">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-button type="primary">保 存</el-button>
        </el-form>
        </div>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.innerBox{
  width: 40%;
  height: 100%;
}
</style>
