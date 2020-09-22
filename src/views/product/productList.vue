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
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="商品名称">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="所属分类">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="商品价格">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品图片">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品评价">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="商品销量">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="id"> </el-table-column>
          <el-table-column label="所属分类" prop="name"> </el-table-column>
          <el-table-column label="商品价格" prop="desc"> </el-table-column>
          <el-table-column label="商品图片" prop="desc"> </el-table-column>
          <el-table-column label="商品描述" prop="desc" width="300">
          </el-table-column>
          <el-table-column label="操作" prop="manage" width="200">
            <el-button @click="dialogFormVisible = false"  type="primary" size="small"
              >编 辑</el-button
            >
            <el-button type="danger" size="small">删 除</el-button>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
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
      tableData: [
        {
          id: '12987122',
          name: '鸡蛋仔',
          category: '江浙小吃',
          desc: '荷兰优质淡奶',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }
      ]
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
.el-pagination{
  margin-top: 20px;
  // transform: translate(300px);
  margin-left: 50%;
  transform: translate(-50%);
}
</style>
