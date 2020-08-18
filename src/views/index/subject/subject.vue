<template>
  <div>
      <el-card shadow="always">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学科编号">
            <el-input v-model="formInline.number"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
            <el-input v-model="formInline.name"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
            <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="请选择状态">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
            <el-button>清除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">新增学科</el-button>
        </el-form-item>
        </el-form>
    </el-card>
    <el-card shadow="always">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="学科编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="学科名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="简称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建者">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
     class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
 data() {
     return {
         formInline: {
             number: '',
             name: '',
             user: '',
             state: ''
         },
         tableData:[],
         //默认页码
         currentPage:1,
         //显示的页数
         pageSizes:[2,4,6],
         //每页显示的条数
         pageSize:3

     }
 },
 methods: {
     handleSizeChange(size){
         console.log(size)
     },
    handleCurrentChange(current){
        console.log(current)
    }
 }
}
</script>

<style lang='less'>
    .page {
        text-align: center;
        margin-top: 19px;
    }
</style>