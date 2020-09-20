<template>
  <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#2b3c4d"
    text-color="#fff"
    :collapse="bool"
    active-text-color="#66b1ff"
    :collapse-transition="false"
    router
  >
      <!-- @open="handleOpen"
    @close="handleClose" -->
    <el-menu-item index="/">
      <i class="iconfont icon-ai-home"></i>
      <span slot="title">后台首页</span>
    </el-menu-item>
    <el-menu-item index="/order">
      <i class="iconfont icon-dingdan"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>
    <el-submenu index="/product">
      <template slot="title">
        <i class="iconfont icon-shangpin"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item index="/product/list">商品列表</el-menu-item>
      <el-menu-item index="/product/add">商品添加</el-menu-item>
      <el-menu-item index="/product/cate">商品分类</el-menu-item>
    </el-submenu>
    <el-menu-item index="/store">
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
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: {
    bool: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
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
.el-menu{
  border: 0;
}
</style>
