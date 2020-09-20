<template>
  <div>
    <Card :CardList='detailList' />
    <Echarts />
  </div>
</template>

<script>
import Card from '../dashboard/components/Card'
import Echarts from '../dashboard/components/Echarts'

export default {
  components: {
    Card,
    Echarts
  },
  data() {
    return {
      detailList: [
        { id: 1, uname: '总订单', icon: 'icon-weibiaoti--', num: '10,241', cls: 'one' },
        { id: 2, uname: '总销售额', icon: 'icon-meiyuan7', num: '10,241', cls: 'two' },
        { id: 3, uname: '今日订单数', icon: 'icon-dingdan', num: '10,241', cls: 'three' },
        { id: 4, uname: '今日销售额', icon: 'icon-jinqian', num: '10,241', cls: 'four' }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
