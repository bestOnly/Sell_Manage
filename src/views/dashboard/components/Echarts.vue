<template>
  <div id="myChart" :style="{ width: '1280px', height: '500px' }"></div>
</template>

<script>
export default {
  mounted() {
    const myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption(
      ({
        title: {
          text: '今日数据统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['订单', '销售额', '注册人数', '管理员人数']
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '订单',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '销售额',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '注册人数',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '管理员人数',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      })
    )
  }
}
</script>

<style lang="less" scoped>
#myChart{
  background-color: #fff;
  margin: 30px 0 0 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
