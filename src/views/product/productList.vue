<template>
  <div>
    <panel>
      <template #title>商品列表</template>
      <template #content>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="商品价格">
                  <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="商品图片">
                  <!-- <template v-slot="{ row }"> -->
                  <span>
                    <img
                      :src="props.row.imgUrl"
                      style="width: 100px; height: 100px"
                    />
                  </span>
                  <!-- </template> -->
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>{{ props.row.ctime | dCreateTime}}</span>
                </el-form-item>
                <el-form-item label="商品评价">
                  <span>{{  }}</span>
                </el-form-item>
                <el-form-item label="商品销量">
                  <span>{{ props.row.sellCount }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.goodsDesc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="name"></el-table-column>
          <el-table-column label="所属分类" prop="category"></el-table-column>
          <el-table-column label="商品价格" prop="price"></el-table-column>
          <el-table-column label="商品图片" prop="imgUrl">
            <template v-slot="{ row }">
              <img :src="row.imgUrl" style="width: 100px; height: 100px" />
            </template>
          </el-table-column>
          <el-table-column
            label="商品描述"
            prop="goodsDesc"
            width="300"
          ></el-table-column>
          <el-table-column label="操作" prop="manage" width="200">
            <template v-slot="{ row }">
              <el-button @click="openUpdate(row)" type="primary" size="small"
                >编 辑</el-button
              >
              <el-button type="danger" size="small" @click="delGoods(row.id)"
                >删 除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
        ></el-pagination>
        <!-- 模态框 -->
        <el-dialog title="修改商品" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="商品名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" :label-width="formLabelWidth">
              <el-select v-model="form.category" placeholder="请选择商品分类">
                <el-option
                  v-for="item in allCate"
                  :key="item.i"
                  :label="item.cateName"
                  :value="item.cateName"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品价格" :label-width="formLabelWidth">
              <el-input v-model="form.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="http://127.0.0.1:5000/goods/goods_img_upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="商品描述">
              <el-input type="textarea" v-model="form.goodsDesc"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="updatePros">确 定</el-button>
          </div>
        </el-dialog>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
import dCreateTime from '@/utils/validateTime'
import {
  getGoods,
  removeGoods,
  findAllCate,
  updateGoods
} from '@/api/product/product.js'

export default {
  created() {
    this.getGoodsList()
    this.getAllCate()
  },
  components: {
    panel
  },
  filters: {
    dCreateTime
  },
  data() {
    return {
      saveUrl: '',
      total: 0,
      imageUrl: '',
      currentPage: 1,
      pageSize: 6,
      tableData: [],
      allCate: [],
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        category: '',
        price: 0,
        imgUrl: '',
        goodsDesc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    async getGoodsList() {
      const { data, total } = await getGoods({
        currentPage: 1,
        pageSize: this.pageSize
      })
      data.forEach((item) => {
        item.imgUrl =
          'http://127.0.0.1:5000/upload/imgs/goods_img/' + `${item.imgUrl}`
      })
      this.tableData = data
      this.total = total
      // console.log(this.tableData)
    },
    async getAllCate() {
      const data = await findAllCate()
      this.allCate = data.categories
      console.log(this.allCate)
    },
    // 删除商品
    delGoods(id) {
      console.log(id)
      const data = removeGoods({ id })
      location.reload()
      this.getGoodsList()
      console.log(data)
    },
    // 打开窗口
    openUpdate(row) {
      this.dialogFormVisible = true
      // console.log(row)
      this.form = row
      // console.log(this.form)
    },
    // 修改商品
    async updatePros() {
      // console.log(this.id)
      const data = await updateGoods({
        name: this.form.name,
        category: this.form.category,
        price: this.form.price,
        imgUrl: this.form.imgUrl,
        goodsDesc: this.form.goodsDesc,
        id: this.form.id
      })
      this.getGoodsList()
      console.log(data)
      this.dialogFormVisible = false
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getGoodsList()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getGoodsList()
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.form.imgUrl = res.imgUrl
    },
    beforeAvatarUpload(file) {
      const arr = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-pagination {
  margin-top: 20px;
  margin-left: 50%;
  transform: translate(-50%);
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
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-input {
  width: 300px;
}
.el-textarea {
  width: 80%;
  resize: none;
}
.el-form-item {
  padding-left: 10px;
}
</style>
