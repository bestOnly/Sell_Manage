<template>
  <!-- <div> -->
    <!-- 第一种通过插槽实现 父组件不含结构-->
    <!-- <slot name="eChartsOpt"></slot> -->
    <!-- 第二种通过父子传值实现 -->
    <div id="myChart" :style="{ width: '1270px', height: '520px' }"></div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    getCharts: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    // this.$emit('getOpt', this.option)
  },
  data() {
    return {
      option: {
        title: {
          text: '今日数据统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['订单', '销售额']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '订单',
            type: 'line',
            stack: '总量',
            data: []
          },
          {
            name: '销售额',
            type: 'line',
            stack: '总量',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    render() {
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 将charts数据 放在监听中
      myChart.setOption(this.option)
    }
  },
  watch: {
    // 监听传来的数据的变化 （因为数据是要在请求完成后得到的，有可能页面出来还没有数据，所以监听该对象获取到后开始渲染echarts）
    getCharts() {
      this.option.xAxis.data = this.getCharts.xData
      this.option.series[0].data = this.getCharts.orderData
      this.option.series[1].data = this.getCharts.amountData
      this.render()
    }
  }
}
</script>

<style lang="less" scoped>
#myChart {
  background-color: #fff;
  margin: 30px 0 0 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
