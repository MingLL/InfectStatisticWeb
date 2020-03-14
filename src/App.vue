<template>
  <div id="app">
    <img class="images" src="./assets/main.jpg">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less">
  .images{
    left:0px; 
    top:0px; 
    width:100%; 
    height: 350px
  }
</style>
