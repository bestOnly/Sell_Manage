<template>
  <div>
    <panel>
      <template #title>订单统计</template>
      <template #content>
        <el-date-picker
          v-model="timeData"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
        <el-button type="primary" class="btn" @click="getData()"
          >查询</el-button
        >
         <div ref="myChart" :style="{ width: '1270px', height: '520px' }"></div>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
import { showEchartData } from '@/api/store.js'

export default {
  created() {
    this.getData()
    // const data = showEchartData({
    //   date: this.timeData
    // })
    // console.log(data)
  },
  mounted() {
    this.getChart()
  },
  components: {
    panel
  },
  data() {
    return {
      timeData: [],
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
  },
  methods: {
    async getData() {
      const data = await showEchartData({
        date: this.timeData
      })
      console.log(data)
    },
    getChart() {
      const myChart = this.$echarts.init(this.$refs.myChart)
      // 将charts数据 放在监听中
      myChart.setOption(this.option)
    }

  }
}
</script>

<style lang="less" scoped>
.btn {
  margin-left: 20px;
}
</style>
