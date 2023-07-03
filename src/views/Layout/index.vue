<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="height: 852px"
        >
          <el-menu-item index="1" @click="toHome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="2" @click="toListAssign">
            <i class="el-icon-document"></i>
            <span slot="title">查看委派信息</span>
          </el-menu-item>

          <el-menu-item index="3" @click="toSubmitTestingData">
            <i class="el-icon-setting"></i>
            <span slot="title">上传监测数据</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 16px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ this.AQIInfo.name }}</span>
        </el-header>
        <!-- 一个分割线 -->
        <el-divider></el-divider>
        <el-main>
          <!-- main主体 -->
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { info } from "@/apis/aqi.js";
export default {
  methods: {
    toHome() {
      this.$router.push("/").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toListAssign() {
      this.$router.push("/ListAssign").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },
    toSubmitTestingData() {
      this.$router.push("/SubmitTestingData").catch((error) => {
        if (error.name !== "NavigationDuplicated") {
          throw error;
        } else {
          console.log("Navigation duplicated");
        }
      });
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  async mounted() {
    const data = await info();
    this.AQIInfo = data.data;
  },
  data() {
    return {
      AQIInfo: {},
    };
  },
};
</script>
<style>
.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
}
</style>
