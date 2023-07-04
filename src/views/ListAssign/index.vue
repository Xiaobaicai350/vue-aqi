<style></style>
<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="address" label="区域"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column prop="publicName" label="举报人姓名"> </el-table-column>
      <el-table-column prop="vAQILevel" label="预测AQI等级"> </el-table-column>
      <el-table-column prop="updateTime" label="举报人更新时间">
      </el-table-column>
      <el-table-column prop="status" label="已完成状态"> </el-table-column>
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
