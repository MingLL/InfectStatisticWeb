<template>
  <div class="center" id="world_map" style="width:600px;height:400px;"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/map/js/world");
import axios from "axios";
export default {
  data() {
    return {
      charOption: {}
    };
  },
  mounted() {
    this.worldchart = echarts.init(document.getElementById("world_map"));
    this.getCharData();
    this.worldchart.setOption(this.charOption);
  },
  methods: {
    getCharData() {
      axios.get("/api/areastat").then(response => {
        this.charOption = {
          title: {
            text: "疫情实时统计",
            subtext: "截止2020.2.26",
            left: "center"
          },
          tooltip: {
            triggerOn: "click",
            enterable: true,
        
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["确诊", "死亡", "治愈"],
            selectedMode: "single"
          },
          visualMap: {
            pieces: [
              { min: 10000, label: ">10000" }, // 不指定 max，表示 max 为无限大（Infinity）。
              { min: 1000, max: 9999, label: "1000-9999" },
              { min: 100, max: 999, label: "100-999" },
              { min: 10, max: 99, label: "10-99" },
              { min: 1, max: 9, label: "1-9" },
              { value: 0, label: 0 }
            ],

            show: true
          },
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              mark: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: "确诊",
              type: "map",
              mapType: "world",
              roam: false,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>





<style scoped>
#china_map {
  margin: 0 auto;
}
</style>