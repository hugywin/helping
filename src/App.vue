<template>
  <div id="app">
    <router-view :transition="vux-pop-in"></router-view>
    <Loading :show="isLoading" position="absolute"></Loading>
  </div>
</template>

<script>
import {Loading} from 'vux/src/components'
export default{
  components: {
    Loading
  },
  data () {
    return{
      isLoading: false,
      direction: 'forward'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset';
@import 'assets/styles/global.css';

body {
  background-color: #fbf9fe;
}
</style>
