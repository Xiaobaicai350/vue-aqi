<template>
  <div>
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="任务编号">
        <el-input v-model="form.ExMessageId"></el-input>
      </el-form-item>
      <el-form-item label="检测日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.updateTime"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <!-- 自定义 -->
      <el-form-item label="PM2.5 浓度">
        <!-- <el-input v-model="form.PM"></el-input> -->
        <div class="block">
          <el-slider v-model="form.PM" max="500" show-input> </el-slider>
        </div>
      </el-form-item>
      <el-form-item label="二氧化硫浓度">
        <!-- <el-input v-model="form.SO2"></el-input> -->
        <div class="block">
          <el-slider v-model="form.SO2" max="150" show-input> </el-slider>
        </div>
      </el-form-item>
      <el-form-item label="一氧化碳浓度">
        <!-- <el-input v-model="form.CO"></el-input> -->
        <div class="block">
          <el-slider v-model="form.CO" max="2000" show-input> </el-slider>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-alert
      title="提示"
      type="info"
      description="注意： 上传后将根据输入的 PM2.5浓度 、 SO2浓度 、 CO浓度 进行自动计算 AQI等级 "
      show-icon
    >
    </el-alert>
  </div>
</template>

<style></style>
<script>
import { postTesting } from "@/apis/aqi.js";
export default {
  data() {
    return {
      form: {
        ExMessageId: null,
        updateTime: "",
        PM: null,
        SO2: null,
        CO: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      const date = new Date(this.form.updateTime);
      const year = date.getUTCFullYear();
      const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
      const day = ("0" + date.getUTCDate()).slice(-2);
      const hours = ("0" + date.getUTCHours()).slice(-2);
      const minutes = ("0" + date.getUTCMinutes()).slice(-2);
      const seconds = ("0" + date.getUTCSeconds()).slice(-2);
      this.form.updateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      const data = await postTesting(this.form);
      console.log(data);
      console.log("submit!");
      this.open1();
      this.form = {};
    },
    open1() {
      this.$notify({
        title: "成功",
        message: "恭喜您上传成功啦",
        type: "success",
      });
    },
  },
};
</script>
