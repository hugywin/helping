<template>
  <div id="app">
    <router-view></router-view>
    <Loading :show="isLoading" position="absolute"></Loading>
    <alert :show.sync="show">{{message}}</alert>
    <toast :show.sync="toastShow" type="text">{{toastMsg}}</toast>
  </div>
</template>

<script>
import {Loading, Alert, Toast} from 'vux/src/components'
export default{
  components: {
    Loading,
    Alert,
    Toast
  },
  data () {
    return{
      isLoading: false,
      show: false,
      message: '',
      toastShow: false,
      toastMsg: ''
    }
  },
  events: {
    dialog: function(msg) {
      this.message = msg;
      this.show = true;
    },
    loading: function(isShow) {
      this.isLoading = isShow;
    },
    toast: function(msg) {
      this.toastShow = true;
      this.toastMsg = msg;
    }
  },
  watch: {
    '$route': function() {
      this.$dispatch('loading', false);
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
