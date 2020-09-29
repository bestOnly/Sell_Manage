<template>
  <div>
    <panel>
      <template #title>修改订单</template>
      <template #content>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="收货人">
            <el-input v-model="form.consignee"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="配送地址">
            <el-input v-model="form.deliverAddress"></el-input>
          </el-form-item>
          <el-form-item label="用户备注">
            <el-input v-model="form.remarks"></el-input>
          </el-form-item>
          <!-- <el-form-item v-slot="{ row }"> -->
          <el-button type="primary" @click="saveUpdate()">保存</el-button>
          <!-- </el-form-item> -->
        </el-form>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
import { orderList, updateOrder } from '@/api/order/order.js'
export default {
  created() {
    this.getOrderList(this.id)
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    panel
  },
  data() {
    return {
      form: {
        consignee: '',
        phone: '',
        deliverAddress: '',
        remarks: ''
      }
    }
  },
  methods: {
    // 获取修改的信息
    async getOrderList(id) {
      const { data } = await orderList({ id })
      this.form = data
      console.log(data.id)
    },
    // 修改数据
    async saveUpdate() {
      await updateOrder(this.form)
      this.$router.push('/order/Manage')
    }
  }
}
</script>

<style lang="less" scoped></style>
