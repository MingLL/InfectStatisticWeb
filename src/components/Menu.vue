<template>
   <el-tabs  stretch v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="疫情地图" name="first"></el-tab-pane>
    <el-tab-pane label="辟谣与防护" name="second"></el-tab-pane>
    <el-tab-pane label="实时播报" name="third"></el-tab-pane>
    <el-tab-pane label="疾病知识" name="fourth"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>

</style>