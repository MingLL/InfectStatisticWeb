<template>
  <div class="center" id="china_map" style="width:600px;height:400px;"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/map/js/china");
import axios from "axios";
export default {
  data() {
    return {
      chartOption: {},
      cityData: {}
    };
  },
  mounted() {
    // 初始化echarts实例
    this.chinachart = echarts.init(document.getElementById("china_map"));
    this.chartOption = {
      title: {
        text: "疫情实时统计",
        subtext: "截止2020.2.26",
        left: "center"
      },
      tooltip: {
        triggerOn: "click",
        enterable: true,
        formatter: function(params, ticket, callback) {
          ticket;
          callback;
          var tag = params.seriesName;
          var name = params.name;
          var value = params.data.value;
          if (name == "南海诸岛") return "";
          return `<div style="display:flex">
      <div style="padding-left:2px">
         地区：${name}<br>${tag}：${value}
      </div>
      <a style="margin: 3px 0;border-left:1px solid #ccc;padding:2px;
      display:flex;justify-content:center;align-items:center;
      margin-left:9px;padding-left:9px;font-size:15px;" 
      onclick="jump('${name}');">
         详情 ></a>
      </div>
      `;
        }
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
          mapType: "china",
          roam: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: "北京", value: 400 },
            { name: "天津", value: 135 },
            { name: "上海", value: 336 },
            { name: "重庆", value: 576 },
            { name: "河北", value: 312 },
            { name: "河南", value: 1271 },
            { name: "云南", value: 174 },
            { name: "辽宁", value: 121 },
            { name: "黑龙江", value: 480 },
            { name: "湖南", value: 1016 },
            { name: "安徽", value: 989 },
            { name: "山东", value: 756 },
            { name: "新疆", value: 76 },
            { name: "江苏", value: 631 },
            { name: "浙江", value: 1205 },
            { name: "江西", value: 934 },
            { name: "湖北", value: 65187 },
            { name: "广西", value: 252 },
            { name: "甘肃", value: 91 },
            { name: "山西", value: 133 },
            { name: "内蒙古", value: 75 },
            { name: "陕西", value: 245 },
            { name: "吉林", value: 93 },
            { name: "福建", value: 294 },
            { name: "贵州", value: 146 },
            { name: "广东", value: 1347 },
            { name: "青海", value: 18 },
            { name: "西藏", value: 1 },
            { name: "四川", value: 531 },
            { name: "宁夏", value: 71 },
            { name: "海南", value: 168 },
            { name: "台湾", value: 32 },
            { name: "香港", value: 89 },
            { name: "澳门", value: 10 }
          ]
        },
        {
          name: "死亡",
          type: "map",
          mapType: "china",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: "北京", value: 4 },
            { name: "天津", value: 3 },
            { name: "上海", value: 3 },
            { name: "重庆", value: 6 },
            { name: "河北", value: 3 },
            { name: "河南", value: 19 },
            { name: "云南", value: 2 },
            { name: "辽宁", value: 1 },
            { name: "黑龙江", value: 12 },
            { name: "湖南", value: 4 },
            { name: "安徽", value: 6 },
            { name: "山东", value: 6 },
            { name: "新疆", value: 2 },
            { name: "浙江", value: 1 },
            { name: "江西", value: 1 },
            { name: "湖北", value: 2615 },
            { name: "广西", value: 2 },
            { name: "甘肃", value: 2 },
            { name: "陕西", value: 1 },
            { name: "吉林", value: 1 },
            { name: "福建", value: 1 },
            { name: "贵州", value: 2 },
            { name: "广东", value: 7 },
            { name: "四川", value: 3 },
            { name: "海南", value: 5 },
            { name: "台湾", value: 1 },
            { name: "香港", value: 2 }
          ]
        },
        {
          name: "治愈",
          type: "map",
          mapType: "china",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: "北京", value: 235 },
            { name: "天津", value: 96 },
            { name: "上海", value: 272 },
            { name: "重庆", value: 373 },
            { name: "河北", value: 261 },
            { name: "河南", value: 1038 },
            { name: "云南", value: 144 },
            { name: "辽宁", value: 89 },
            { name: "黑龙江", value: 248 },
            { name: "湖南", value: 785 },
            { name: "安徽", value: 744 },
            { name: "山东", value: 377 },
            { name: "新疆", value: 34 },
            { name: "江苏", value: 479 },
            { name: "浙江", value: 865 },
            { name: "江西", value: 719 },
            { name: "湖北", value: 20978 },
            { name: "广西", value: 138 },
            { name: "甘肃", value: 80 },
            { name: "山西", value: 104 },
            { name: "内蒙古", value: 37 },
            { name: "陕西", value: 193 },
            { name: "吉林", value: 65 },
            { name: "福建", value: 213 },
            { name: "贵州", value: 112 },
            { name: "广东", value: 851 },
            { name: "青海", value: 18 },
            { name: "西藏", value: 1 },
            { name: "四川", value: 307 },
            { name: "宁夏", value: 65 },
            { name: "海南", value: 130 },
            { name: "台湾", value: 5 },
            { name: "香港", value: 24 },
            { name: "澳门", value: 7 }
          ]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示地图数据
    this.chinachart.setOption(this.chartOption);
  },
  methods: {
    
};
</script>

<style scoped>
#china_map {
  margin: 0 auto;
}
</style>