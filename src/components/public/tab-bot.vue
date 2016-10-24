<template>
  <div class="tab-bot">
    <tabbar>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/'}" link="/">
        <i slot="icon" class="fa fa-home"></i>
        <span slot="label" class="item-name">首页</span>
      </tabbar-item>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/raise'}"  link="/raise">
        <i slot="icon" class="fa fa-credit-card" aria-hidden="true"></i>
        <span slot="label" class="item-name">众筹</span>
      </tabbar-item>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/publish'}" link="/publish">
        <i slot="icon" class="fa fa-plus-circle" aria-hidden="true"></i>
        <span slot="label" class="item-name">发布众筹</span>
      </tabbar-item>
      <!-- <tabbar-item class="tab-bot-item" :class="{'active': path=='/help'}" link="/help">
        <i slot="icon" class="fa fa-credit-card" aria-hidden="true"></i>
        <span slot="label" class="item-name">互助</span>
      </tabbar-item> -->
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/user'}" link="/user">
        <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
        <span slot="label" class="item-name">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux/src/components'
export default {
  ready () {
    this.path = this.$route.path;
  },
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      path: ''
    }
  }
}
</script>

<style lang="less">
.tab-bot{
  text-align: center;
  margin-top: 65px;
  .weui_tabbar{
    position: fixed!important;
  }
  .tab-bot-item{
    color: #929292;
    .fa{
      font-size: 2.3rem;
    }
    .item-name{
      font-size: 1.5rem;
    }
  }
  .active{
    .fa{
      color: #0894ec;
    }
    .item-name{
      color: #0894ec;
    }
  }
  .vux-reddot:after, .vux-reddot-border:after, .vux-reddot-s:after{
    background: none;
  }
  .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label{
    color: #888;
  }
}
</style>
