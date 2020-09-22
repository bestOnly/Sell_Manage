<template>
  <div>
    <panel>
      <template #title>
        <div class="title">
          <span>商品分类</span>
          <el-button type="primary" @click="openBox">添加分类</el-button>
        </div>
      </template>
      <template #content>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="130" label="序号"></el-table-column>
          <el-table-column prop="date" label="分类名称" width="300">
          </el-table-column>
          <el-table-column prop="name" label="是否启用" width="350">
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <el-button  size="small">完成</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>

        <!-- 模态框 -->
        <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item
              label="分类名称"
              :label-width="formLabelWidth"
              class="cateName"
            >
              <el-input
                v-model="form.name"
                autocomplete="off"
                placeholder="请输入分类名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="是否启用" class="btnslide">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'

export default {
  components: {
    panel
  },
  data() {
    return {
      // 小滑块
      value: true,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      // 模态框相关
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },

  methods: {
    openBox() {
      this.dialogFormVisible = true
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cateName {
  margin-left: -40px;
}
.btnslide {
  margin-left: 10px;
}
.el-pagination{
  margin-top: 20px;
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
