<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="item in breadList"
        :key="item.title"
      >{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right-slide">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          欢迎你，亲爱的admin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <img src="../../assets/img/man-icon.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: []
    }
  },
  created() {
    this.calRoute()
  },
  methods: {
    calRoute() {
      // console.log(this.$route.matched)
      const arr = [{ title: '首页', path: '/dashboard' }]
      this.$route.matched.forEach((item) => {
        if (item.meta && item.meta.title) {
          arr.push({ title: item.meta.title, path: item.path })
        }
      })
      this.breadList = arr
    }
  },

  watch: {
    '$route.path'() {
      this.calRoute()
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-slide {
    display: flex;
    align-items: center;
  }
  img {
    width: 50px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .el-dropdown {
    margin-right: 10px;
  }
}
</style>
