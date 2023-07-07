<style></style>
<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
      >>
      <el-table-column prop="id" label="id" width="100"> </el-table-column>
      <el-table-column prop="address" label="区域" width="100">
      </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="publicName" label="举报人姓名" width="100">
      </el-table-column>
      <el-table-column prop="vAQILevel" label="预测AQI等级" width="110">
      </el-table-column>
      <el-table-column prop="updateTime" label="举报人更新时间" width="200">
      </el-table-column>
      <el-table-column prop="status" label="已完成状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">已完成测试</span>
          <span v-else-if="scope.row.status === 0">未完成测试</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { listMyAssignedInfo } from "@/apis/aqi.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 1) {
        return "success-row";
      }
      return "";
    },
  },
  async mounted() {
    const data = await listMyAssignedInfo();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
    console.log(this.tableData);
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
