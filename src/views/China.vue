<template>
  <div>
    <div align="center">{{"数据更新至"+time}}</div>
    <div class="round">
      <el-row class="messages">
        <messagelable
          v-for="(item,index) in message"
          :key="index"
          :title="item.title"
          :sum="item.num"
          :changenum="item.changenum"
          :styles="Styles[index]"
          :span="8"
        ></messagelable>
      </el-row>
    </div>
    <ChinaMap />
    <Table />
  </div>

</template>

<script>
import ChinaMap from '../components/ChinaMap';
import messagelable from '../components/MessageLable';
import Table from '../components/Table';
export default {
  name: "China",
  components: { messagelable, ChinaMap,Table },
  data() {
    return {
      time: "",
      message: [
        { title: "现有确诊", num: "", changenum: "" },
        { title: "现有疑似", num: "", changenum: "" },
        { title: "现有重症", num: "", changenum: "" },
        { title: "累计确诊", num: "", changenum: "" },
        { title: "累计治愈", num: "", changenum: "" },
        { title: "累计死亡", num: "", changenum: "" }
      ],
      Styles: [
        { color: "#ff6a57" },
        { color: "#ed9620" },
        { color: "#476da0" },
        { color: "#e83132" },
        { color: "#20b3ba" },
        { color: "#101010" }
      ]
    };
  }
};
</script>