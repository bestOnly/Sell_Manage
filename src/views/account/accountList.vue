<template>
  <div>
    <panel>
      <template #title>
        <span>账户列表</span>
      </template>
      <template #content>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="account" label="账户" width="150">
            <!-- <template slot-scope="scope">{{ scope.row.admin }}</template> -->
          </el-table-column>
          <el-table-column
            prop="userGroup"
            label="用户类型"
            width="150"
          ></el-table-column>
          <el-table-column label="创建时间" width="200">
            <template v-slot="{ row }">
              {{ row.ctime | dCreateTime }}
            </template>
          </el-table-column>
          <el-table-column
            prop="imgUrl"
            label="用户头像"
            width="180"
          ></el-table-column>
          <el-table-column prop="manage" label="操作">
            <template v-slot="{ row }">
              <el-button type="primary" @click="openUpdate(row)"
                >编辑</el-button
              >
              <el-button type="danger" @click="delUser(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
        <div style="margin-top: 20px">
          <el-button type="danger" @click="delSome">批量删除</el-button>
          <el-button type="primary" @click="toggleSelection()"
            >取消选择</el-button
          >
        </div>
        <!-- 模态框 -->
        <el-dialog title="编辑账户" :visible.sync="dialogFormVisible">
          <el-form :model="modUser">
            <el-form-item label="账户名称" :label-width="formLabelWidth">
              <el-input v-model="modUser.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户类型" :label-width="formLabelWidth">
              <el-select
                v-model="modUser.userGroup"
                placeholder="请选择用户类型"
              >
                <el-option label="普通管理员" value="普通管理员"></el-option>
                <el-option label="超级管理员" value="超级管理员"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveUpdate">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 模态框结束 -->
      </template>
    </panel>
  </div>
</template>

<script>
import panel from '../../components/panel/Index'
import {
  userList,
  delAccount,
  delSomeUser,
  updateUser
} from '@/api/account/account.js'
export default {
  async created() {
    this.getData()
  },
  components: {
    panel
  },
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 5,
      total: 0,
      check: [],
      modUser: {},
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
      formLabelWidth: '120px'
    }
  },

  methods: {
    async getData() {
      // 如果当前页没有数据 跳到前一页
      if (this.tableData.length === 1 && this.currentPage > 1) {
        this.currentPage--
      }
      const { data, total } = await userList({
        currentPage: this.currentPage,
        pageSize: this.pageSize
      })
      this.tableData = []
      data.forEach(item => {
        this.tableData.push({
          account: item.account,
          userGroup: item.userGroup,
          cTime: item.ctime,
          imgUrl: item.imgUrl,
          id: item.id
        })
      })
      this.total = total
    },
    // 删除
    delUser(id) {
      this.$confirm('亲，你要想清楚', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          console.log(id)
          const data = delAccount({
            id: id
          })
          console.log(data)
          // if (data.code === 0) {
          this.getData()
          // const i = this.tableData.findIndex(item => item.id === id)
          // this.tableData.splice(i, 1)
          // }
        })
        .catch(() => {})
    },
    // 修改弹框
    openUpdate(item) {
      this.dialogFormVisible = true
      console.log(item)
      this.modUser = {
        id: item.id,
        name: item.account,
        userGroup: item.userGroup
      }
    },
    // 保存修改
    saveUpdate() {
      updateUser({
        id: this.modUser.id,
        account: this.modUser.name,
        userGroup: this.modUser.userGroup
      })
      // 如果字段和传入字段一样可简写
      // updateUser(this.modUser)
      this.getData()
      this.dialogFormVisible = false
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      val.forEach(item => {
        this.check.push(item.id)
      })
    },
    async delSome() {
      console.log(this.check)
      this.$confirm('亲，你要想清楚', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await delSomeUser({
            ids: JSON.stringify(this.check)
          })
          this.getData()
        })
        .catch(() => {})
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getData()
    }
  },
  filters: {
    dCreateTime(value) {
      var date = new Date(value)
      var Y = date.getFullYear()
      var M = (date.getMonth() + 1).toString().padStart(2, 0)
      var D = date
        .getDate()
        .toString()
        .padStart(2, 0)
      var h = date
        .getHours()
        .toString()
        .padStart(2, 0)
      var m = date
        .getMinutes()
        .toString()
        .padStart(2, 0)
      var s = date
        .getSeconds()
        .toString()
        .padStart(2, 0)
      return Y + M + D + h + m + s
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-table__header-wrapper .el-table__header {
  .has-gutter {
    th {
      // transform: translate(12%);
      font-weight: 700;
    }
  }
}
.el-pagination {
  margin: 20px 0;
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
