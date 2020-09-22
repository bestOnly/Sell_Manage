<template>
  <panel>
     <template #title>
        <span>管理员信息</span>
      </template>
      <template #content>
        <span>管理员ID: </span> <span class="userInfo"> {{ userInfo.id }}</span>
        <el-divider></el-divider>
        <span>账号: </span><span class="userInfo"> {{ userInfo.account }}</span>
        <el-divider></el-divider>
        <span>用户组: </span><span class="userInfo"> {{ userInfo.userGroup }}</span>
        <el-divider></el-divider>
        <span>创建时间: </span><span class="userInfo"> {{ userInfo.ctime }}</span>
        <el-divider></el-divider>
        <span>管理员头像: </span><span class="userInfo"> {{ userInfo.userIcon }}</span>
      </template>
  </panel>
</template>

<script>
import panel from '../../components/panel/Index'
import { MyCenter } from '@/api/account/account.js'

export default {
  async created() {
    const data = await MyCenter()
    // console.log(data.accountInfo)
    this.userInfo.id = data.accountInfo.id
    this.userInfo.account = data.accountInfo.account
    this.userInfo.userGroup = data.accountInfo.userGroup
    this.userInfo.ctime = data.accountInfo.ctime
    this.userInfo.userIcon = data.accountInfo.imgUrl
  },
  components: {
    panel
  },
  data() {
    return {
      userInfo: {
        id: '',
        account: '',
        userGroup: '',
        ctime: '',
        userIcon: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.userInfo{
  color: #666;
}
</style>
