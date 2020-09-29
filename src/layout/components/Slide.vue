<template>
  <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#2b3c4d"
    text-color="#fff"
    :collapse="bool"
    active-text-color="#66b1ff"
    :collapse-transition="false"
    unique-opened
    router
  >
    <!-- @open="handleOpen"
    @close="handleClose" -->
    <template v-for="menu in menus">
      <el-menu-item
        :key="menu.path"
        :index="menu.path"
        v-if="
          (menu.children &&
            menu.children.length === 1 &&
            menu.path !== '/account') ||
          menu.path === '/dashboard'
        "
      >
        <i class="iconfont icon-ai-home"></i>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="menu.path" :key="menu.path">
        <template slot="title">
          <i class="iconfont icon-shangpin"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="item in menu.children"
          :index="item.path"
          :key="item.path"
          >{{ item.meta.title }}</el-menu-item
        >
      </el-submenu>
    </template>
    <!-- <el-menu-item index="/store">
      <i class="iconfont icon-shop"></i>
      <span slot="title">店铺管理</span>
    </el-menu-item>
    <el-submenu index="/account">
      <template slot="title">
        <i class="iconfont icon-zhanghao"></i>
        <span>账号管理</span>
      </template>
      <el-menu-item index="/account/accountList">账号列表</el-menu-item>
      <el-menu-item index="/account/add">添加账号</el-menu-item>
      <el-menu-item index="/account/updatePwd">修改密码</el-menu-item>
    </el-submenu>
    <el-submenu index="/saleAccount">
      <template slot="title">
        <i class="iconfont icon-xiaoshoubaobiao"></i>
        <span>销售统计</span>
      </template>
      <el-menu-item index="/saleAccount/goodsAccount">商品统计</el-menu-item>
      <el-menu-item index="/saleAccount/orderAccount">订单统计</el-menu-item>
    </el-submenu> -->
  </el-menu>
</template>

<script>
import local from '@/utils/local.js'
export default {
  created() {
    this.menus = JSON.parse(local.get('cmenu'))
    // console.log(this.menus)
  },
  props: {
    bool: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.el-menu-item,
.el-submenu {
  i {
    margin-right: 8px;
    color: #fff;
  }
}
.el-menu {
  border: 0;
}
</style>
