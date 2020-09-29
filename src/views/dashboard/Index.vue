<template>
  <div>
    <Card :echartsNum="sondata" />
    <!-- <Echarts @getOpt="getOpt">
       <template #eChartsOpt>
        <div id="myChart" :style="{ width: '1270px', height: '520px' }"></div>
       </template>
    </Echarts> -->
    <Echarts :getCharts="charts"/>
  </div>
</template>

<script>
import Card from '../dashboard/components/Card'
import Echarts from '../dashboard/components/Echarts'
import { HomeInfo } from '@/api/index'
export default {
  mounted() {
    // 加载echarts
    this.showData()
  },
  components: {
    Card,
    Echarts
  },
  data() {
    return {
      sondata: {},
      // opt: {}
      charts: {}
    }
  },
  methods: {
    async showData() {
      const {
        todayOrder,
        totalAmount,
        totalOrder,
        totayAmount,
        xData,
        orderData,
        amountData
      } = await HomeInfo()
      // this.sondata = data
      this.sondata = {
        todayOrder,
        totalAmount,
        totalOrder,
        totayAmount
      }
      // 传到子组件
      this.charts = {
        xData,
        orderData,
        amountData
      }
      // console.log(xData)
      // this.opt.xAxis.data = xData
      // this.opt.series[0].data = orderData
      // this.opt.series[1].data = amountData
      // // 绘制图表
      // myChart.setOption(this.opt)
    }
    // 获取子组件传来的数据
    // getOpt(o) {
    //   this.opt = o
    //   console.log(o)
    // }
  }
}
</script>

<style lang="less" scoped></style>
