<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id"> </el-table-column>
    <el-table-column prop="exMessage.description" label="description">
    </el-table-column>
    <el-table-column prop="exMessage.address" label="address">
    </el-table-column>
    <el-table-column prop="exMessage.vAQILevel" label="vAQILevel">
    </el-table-column>
    <el-table-column prop="publicName" label="举报人姓名"> </el-table-column>
    <el-table-column prop="updateTime" label="updateTime"> </el-table-column>
    <el-table-column prop="SO2" label="SO2"> </el-table-column>
    <el-table-column prop="PM" label="PM2.5"> </el-table-column>
    <el-table-column prop="CO" label="updateTime"> </el-table-column>
    <el-table-column prop="aqilevel" label="aqilevel"> </el-table-column>
  </el-table>
</template>

<script>
import { listAllDo } from "@/apis/aqi.js";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  async mounted() {
    const data = await listAllDo();
    console.log(data);
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].updateTime = data.data[i].updateTime.substring(0, 19);
    }
    this.tableData = data.data;
    console.log(this.tableData);
  },
};
</script>
