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
          <el-table-column prop="admin" label="账户" width="200">
            <!-- <template slot-scope="scope">{{ scope.row.admin }}</template> -->
          </el-table-column>
          <el-table-column prop="userKind" label="用户类型" width="200"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
          <el-table-column prop="manage" label="操作" show-overflow-tooltip>
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>

        <div style="margin-top: 20px">
          <el-button type="danger">批量删除</el-button>
          <el-button type="primary" @click="toggleSelection()">取消选择</el-button>
        </div>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      tableData: [
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        },
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        },
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        },
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        },
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        },
        {
          admin: '金科',
          userKind: '普通管理员',
          createTime: '2020/9/20'
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
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
/deep/ .el-table__header-wrapper .el-table__header{
  .has-gutter{
    th{
      // transform: translate(12%);
      font-weight: 700;
    }
  }
}
.el-pagination{
  margin: 20px 0;
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
