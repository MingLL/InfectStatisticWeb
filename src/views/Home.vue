<template>
  <el-container>
    <el-main>
      <el-tabs stretch v-model="activeName">
        <el-tab-pane label="疫情地图" name="first">
          <China />
        </el-tab-pane>

        <el-tab-pane label="辟谣与防护" name="second">
          <Rumor />
        </el-tab-pane>

        <el-tab-pane label="实时播报" name="third">
          <News />
        </el-tab-pane>

        <el-tab-pane label="疾病知识" name="fourth">
          <DisKnowledge />
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import China from "./China";
import News from "./News";
import Rumor from "./Rumor";
import DisKnowledge from "./DiseaseKnowledge";

export default {
  name: "Home",
  data() {
    return {
      activeName: "second"
    };
  },
  components: {
    China,
    News,
    Rumor,
    DisKnowledge
  }
};
</script>

<style scoped lang="less">
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 4000px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
