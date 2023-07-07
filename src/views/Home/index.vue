<template>
  <div class="Echarts">
    <div id="main" style="width: 1000px; height: 600px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option;
      const builderJson = {
        all: 10887,
        charts: {
          一月: 3237,
          二月: 2164,
          三月: 7561,
          四月: 7778,
          五月: 7355,
          六月: 2405,
          // candlestick: 1842,
          // radar: 2090,
          // heatmap: 1762,
          // treemap: 1593,
          // graph: 2060,
          // boxplot: 1537,
          // parallel: 1908,
          // gauge: 2107,
          // funnel: 1692,
          // sankey: 1568,
        },
        components: {
          七月: 2788,
          八月: 9575,
          九月: 9400,
          十月: 9466,
          十一月: 9266,
          十二月: 3419,
          // markLine: 2984,
          // timeline: 2739,
          // dataZoom: 2744,
          // visualMap: 2466,
          // toolbox: 3034,
          // polar: 1945,
        },
        ie: 9743,
      };
      const downloadJson = {
        一月: 17365,
        二月: 4079,
        三月: 6929,
        四月: 14890,
        五月: 1000,
        六月: 2000,
      };
      const themeJson = {
        七月: 1594,
        八月: 925,
        九月: 1608,
        十月: 721,
        十一月: 2179,
        十二月: 1982,
      };
      const waterMarkText = "ECHARTS";
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.height = 100;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = 0.08;
      ctx.font = "20px Microsoft Yahei";
      ctx.translate(50, 50);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(waterMarkText, 0, 0);
      option = {
        backgroundColor: {
          type: "pattern",
          image: canvas,
          repeat: "repeat",
        },
        tooltip: {},
        title: [
          {
            text: "您去年贡献的的测试数量",
            subtext: "总计 " + builderJson.all,
            left: "25%",
            textAlign: "center",
          },
          {
            text: "上半年贡献量",
            subtext:
              "总计 " +
              Object.keys(downloadJson).reduce(function (all, key) {
                return all + downloadJson[key];
              }, 0),
            left: "75%",
            textAlign: "center",
          },
          {
            text: "下半年贡献量",
            subtext:
              "总计 " +
              Object.keys(themeJson).reduce(function (all, key) {
                return all + themeJson[key];
              }, 0),
            left: "75%",
            top: "50%",
            textAlign: "center",
          },
        ],
        grid: [
          {
            top: 50,
            width: "50%",
            bottom: "45%",
            left: 10,
            containLabel: true,
          },
          {
            top: "55%",
            width: "50%",
            bottom: 0,
            left: 10,
            containLabel: true,
          },
        ],
        xAxis: [
          {
            type: "value",
            max: builderJson.all,
            splitLine: {
              show: false,
            },
          },
          {
            type: "value",
            max: builderJson.all,
            gridIndex: 1,
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            data: Object.keys(builderJson.charts),
            axisLabel: {
              interval: 0,
              rotate: 30,
            },
            splitLine: {
              show: false,
            },
          },
          {
            gridIndex: 1,
            type: "category",
            data: Object.keys(builderJson.components),
            axisLabel: {
              interval: 0,
              rotate: 30,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            stack: "chart",
            z: 3,
            label: {
              position: "right",
              show: true,
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.charts[key];
            }),
          },
          {
            type: "bar",
            stack: "chart",
            silent: true,
            itemStyle: {
              color: "#eee",
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.all - builderJson.charts[key];
            }),
          },
          {
            type: "bar",
            stack: "component",
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              position: "right",
              show: true,
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.components[key];
            }),
          },
          {
            type: "bar",
            stack: "component",
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: "#eee",
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.all - builderJson.components[key];
            }),
          },
          {
            type: "pie",
            radius: [0, "30%"],
            center: ["75%", "25%"],
            data: Object.keys(downloadJson).map(function (key) {
              return {
                name: key.replace(".js", ""),
                value: downloadJson[key],
              };
            }),
          },
          {
            type: "pie",
            radius: [0, "30%"],
            center: ["75%", "75%"],
            data: Object.keys(themeJson).map(function (key) {
              return {
                name: key.replace(".js", ""),
                value: themeJson[key],
              };
            }),
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
    const h = this.$createElement;

    this.$notify({
      title: "欢迎来到AQI检测员端",
      message: h(
        "i",
        { style: "color: teal" },
        "近年来，为了促进生态环境保护行业的发展，我国陆续发布了一系列相关政策。并且鼓励公众参与，强化社会监督，依法监测各类生态环境超标行为，持续改善环境质量。基于此背景，建设环保公众监督系统。本系统致力于建立环保公众监督平台，拓宽监督渠道，增加环保工作透明度，不断完善公众监督机制，切实增强环境保护实效。"
      ),
    });
  },
};
</script>

<style></style>
