<template>
  <div :style="{ width:'auto' }">
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ background:'#eef1f6',color:'#606266' }"
    >
      <el-table-column prop="cityname" label="城市" align="center"></el-table-column>
      <el-table-column prop="currentconfirmedcount" label="现有确诊" align="center"></el-table-column>
      <el-table-column prop="confirmedcount" label="累计确诊" align="center"></el-table-column>
      <el-table-column prop="curedcount" label="累计治愈" align="center"></el-table-column>
      <el-table-column prop="deadcount" label="累计死亡" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axiox from "axios";
export default {
  name: "Table",
  props: ["province"],
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      axiox
        .get("areastat.json")
        .then(
          function(response) {
            let datas = response.data;
            for (var i = 0; i < datas.length; ++i) {
              that.tableData.push({
                cityname: datas[i].provinceShortName,
                currentconfirmedcount: datas[i].currentConfirmedCount,
                confirmedcount: datas[i].confirmedCount,
                curedcount: datas[i].curedCount,
                deadcount: datas[i].deadCount
              });
            }
          },
          function(err) {
            console.log(err);
          }
        )
        .finally(function() {});
    }
  }
};
</script>

<style scoped>
</style>
