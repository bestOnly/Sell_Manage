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
      <el-dropdown trigger="click" @command="ownManage">
        <span class="el-dropdown-link">
          欢迎你，亲爱的 <span class="name"> {{ admin }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus" command='a'>个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" command='b'>账户管理</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline" command='c'>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <img src="../../assets/img/man-icon.jpg" alt @click="toCenter"/>
    </div>
  </div>
</template>

<script>
import local from '@/utils/local.js'
export default {
  data() {
    return {
      breadList: [],
      admin: sessionStorage.getItem('admin')
    }
  },
  created() {
    this.calRoute()
  },
  methods: {
    /* 面包屑导航 */
    calRoute() {
      // console.log(this.$route.matched)
      const arr = [{ title: '首页', path: '/dashboard' }]
      this.$route.matched.forEach((item) => {
        if (item.meta && item.meta.title) {
          arr.push({ title: item.meta.title, path: item.path })
        }
      })
      this.breadList = arr
    },
    /* 下拉栏操作 */
    ownManage(command) {
      if (command === 'a') {
        this.$router.push('/account/myCenter')
      } else if (command === 'c') {
        local.clear()
        this.$router.push('/login')
      }
    },
    /* 点击头像跳转个人中心 */
    toCenter() {
      this.$router.push('/account/myCenter')
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
    cursor: pointer;
  }
  .el-dropdown {
    margin-right: 10px;
    cursor: pointer;
  }
  .name{
    color: rgb(72, 210, 245);
  }
}
</style>
