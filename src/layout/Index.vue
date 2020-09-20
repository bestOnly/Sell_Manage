<template>
  <el-container>
    <!-- 左侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <h3 class="logo-box" @click="isCollapse = !isCollapse">
        <div>
          <img src="../assets/img/logo-icon.png" />
        </div>
        <span class="title" v-show="!isCollapse">外卖商家中心</span>
      </h3>
      <Side :bool="isCollapse" />
    </el-aside>
    <el-container>
      <!-- 顶部导航 -->
      <el-header>
        <Header />
      </el-header>
      <!-- 主体部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Side from '../layout/components/Slide'
import Header from '../layout/components/Header'

export default {
  components: {
    Side,
    Header
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  background-color: #e7e7e7;

  .el-aside {
    background-color: #2b3c4d;
    transition: all 0.5s;
  }
  .el-header {
    background-color: #fff;
  }
  .Main {
    background-color: rgb(253, 254, 255);
  }
}
.logo-box {
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 12px;
  cursor: pointer;
  .title {
    position: absolute;
    left: 70px;
    color: #fff;
  }
  img {
    width: 42px;
    border-radius: 50%;
    margin-right: 16px;
  }
}
</style>
