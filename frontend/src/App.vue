<template>
  <div id="app">
    <div class="center">
      <img src="./assets/main.jpg" style="width: 1255px; height:300px" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.round {
  border-radius: 20px;
  background: white;
  /*#E5E5E5*/
}
.tg {
  margin-top: 30px;
}
.center {
  margin: 0 auto;
  text-align: center;
}
</style>
