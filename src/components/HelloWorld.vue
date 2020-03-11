<template>
  <el-container>
    <el-header>
      <Menu></Menu>
    </el-header>
    <el-main>
      <el-tabs stretch v-model="activeName" >
        <el-tab-pane label="国内统计" name="first">
           <Map :type="china" />
        </el-tab-pane>
        <el-tab-pane label="国外统计" name="second">
          <Map :type="world" />
        </el-tab-pane>
      </el-tabs>
     
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Menu from "./Menu";
import Map from "./Map";
export default {
  name: "HelloWorld",
  data() {
    return {
      china: "china",
      world: "world",
      activeName: "second"
    };
  },
  components: {
    Menu,
    Map
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
