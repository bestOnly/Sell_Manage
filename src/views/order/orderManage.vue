<template>
  <div>
    <panel>
      <template #title>
        <el-form
          ref="form"
          :model="form"
          label-width="80px"
          size="small"
          inline
        >
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
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
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #content>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="orderId" label="订单号" width="140">
          </el-table-column>
          <el-table-column prop="orderTime" label="下单时间" width="100">
          </el-table-column>
          <el-table-column prop="phone" label="手机号" width="140">
          </el-table-column>
          <el-table-column prop="consignee" label="收货人" width="100">
          </el-table-column>
          <el-table-column prop="deliverAddress" label="配送地址" width="300">
          </el-table-column>
          <el-table-column prop="deliveryTime" label="送达时间" width="100">
          </el-table-column>
          <el-table-column prop="remarks" label="用户备注" width="100">
          </el-table-column>
          <el-table-column prop="orderAmount" label="订单金额" width="100">
          </el-table-column>
          <el-table-column prop="orderState" label="订单状态" width="100">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '@/components/panel/Index'
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
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="less" scoped>
.el-form-item {
  width: 20%;
}
</style>
