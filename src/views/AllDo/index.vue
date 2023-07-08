<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="50"> </el-table-column>
    <el-table-column prop="exMessage.description" label="异常描述信息">
    </el-table-column>
    <el-table-column prop="exMessage.address" label="异常地址">
    </el-table-column>
    <el-table-column prop="exMessage.vAQILevel" label="预估AQI等级" width="120">
    </el-table-column>
    <el-table-column prop="publicName" label="举报人姓名"> </el-table-column>
    <el-table-column prop="updateTime" label="更新时间" width="200">
    </el-table-column>
    <el-table-column prop="SO2" label="SO2浓度" width="100"> </el-table-column>
    <el-table-column prop="PM" label="PM2.5浓度" width="100"> </el-table-column>
    <el-table-column prop="CO" label="CO浓度" width="80"> </el-table-column>
    <el-table-column prop="aqilevel" label="实测AQI等级" width="120">
    </el-table-column>
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
