<template>
  <div id="app">
    <img class="images" src="./assets/main.jpg">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
