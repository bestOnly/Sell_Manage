<template>
  <panel>
    <template #title>
      <span>管理员信息</span>
    </template>
    <template #content>
      <span>管理员ID: </span>
      <span class="userInfo"> {{ userInfo.id }}</span>
      <el-divider></el-divider>
      <span>账号: </span>
      <span class="userInfo"> {{ userInfo.account }}</span>
      <el-divider></el-divider>
      <span>用户组: </span>
      <span class="userInfo"> {{ userInfo.userGroup }}</span>
      <el-divider></el-divider>
      <span>创建时间: </span>
      <span class="userInfo"> {{ userInfo.ctime | dCreateTime }}</span>
      <el-divider></el-divider>
      <div class="pic">
        <span>管理员头像: </span>
        <span>
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:5000/users/avatar_upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </span>
      </div>
      <el-button type="primary" @click="savePic">修改头像</el-button>
    </template>
  </panel>
</template>

<script>
import panel from '../../components/panel/Index'
import { MyCenter, editPic } from '@/api/account/account.js'
import dCreateTime from '../../utils/validateTime.js'

export default {
  filters: {
    dCreateTime
  },
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
      },
      imageUrl: '',
      // 存储服务器到数据库的图片名
      saveUrl: ''
    }
  },
  methods: {
    async savePic() {
      // 把上传图片后返回的图片名称保存到数据库
      const data = await editPic({
        imgUrl: this.saveUrl
      })
      // 图片上传后刷新页面
      if (data.code === 0) {
        location.reload()
      }
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      // console.log(res)
      this.saveUrl = res.imgUrl
    },
    beforeAvatarUpload(file) {
      const arr = ['image/jpg', 'image/jpeg', 'image/png']
      const isJPG = arr.includes(file.type)
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="less" scoped>
.userInfo {
  color: lightblue;
}
.pic {
  display: flex;
  span{
    margin-right: 20px;
    margin-bottom: 40px;
  }
}
/deep/ .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
