<template>
  <div class="sun-body">
    <el-card shadow="never">
      <!-- 搜索表单 -->
      <el-form
          :model="where"
          label-width="77px"
          size="small"
          @submit.native.prevent>
        <el-row :gutter="15">
          <el-col :md="6" :sm="12">
            <el-form-item label="用户账号:">
              <el-input
                  v-model="where.username"
                  placeholder="请输入"
                  clearable/>
            </el-form-item>
          </el-col>
          <el-col :md="6" :sm="12">
            <el-form-item label="用户名:">
              <el-input
                  v-model="where.nickname"
                  placeholder="请输入"
                  clearable/>
            </el-form-item>
          </el-col>
          <el-col :md="6" :sm="12">
            <el-form-item label="性别:">
              <el-select
                  v-model="where.sex"
                  placeholder="请选择"
                  clearable >
                <el-option label="男" value="1"/>
                <el-option label="女" value="2"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="6" :sm="12">
            <div>
              <el-button
                  type="primary"
                  @click="reload"
                  size="small"
                  icon="el-icon-search">查询
              </el-button>
              <el-button @click="reset" size="small">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <!-- 数据表格 -->
      <div class="table-box">
        <div style="width: 100%;margin: 15px 0px;">
          <div class="table-bar">
            <el-button type="primary" size="small" icon="el-icon-plus">添加</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </div>
          <el-table :data="tableData" style="width: 100%;" border>
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
            <el-table-column label="状态" align="center" width="100">
              <template slot-scope="scope">
                <el-switch v-model="scope.row.status"> </el-switch>
              </template>
            </el-table-column>
            <el-table-column  label="操作" align="center" width="200">
              <template>
                <el-link type="primary" icon="el-icon-edit" :underline="false">修改</el-link>
                <el-link type="danger" icon="el-icon-delete" :underline="false">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
   
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'SystemUser',
  data() {
    return {
      // 表格列配置
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        status: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        status: true
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        status: true
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        status: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        status: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        status: true
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        status: true
      }],
      where:{}
    }
  },
  methods: {
    /* 刷新表格 */
    reload() {
    },
    /* 重置搜索 */
    reset() {
      this.where = {};
      this.$nextTick(() => {
        this.reload();
      });
    },
  }
}
</script>

<style scoped>
</style>
