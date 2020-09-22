<template>
  <div>
    <panel>
      <template #title>商品添加</template>
      <template #content>
        <div class="innerBox">
        <span>图片</span>
        <div class="block">
          <span class="demonstration">{{ fit }}</span>
          <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fit"
          ></el-image>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="配送费">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="配送时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="配送描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="店铺评分">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
           <el-form-item label="销量">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="在线支付满28减5" name="type"></el-checkbox>
              <el-checkbox label="VC无线橙果汁全场8折" name="type"></el-checkbox>
              <el-checkbox label="特价饮品8折抢购" name="type"></el-checkbox>
              <el-checkbox label="单人特色套餐" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="营业时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
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
      fits: ['cover'],
      url: '../../assets/img/mouth.png',
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
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
.innerBox {
  width: 40%;
  height: 100%;
  // background-color: #eee;
}
</style>
