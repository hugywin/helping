<template>
  <tabbar class="tab-bot">
    <tabbar-item class="tab-bot-item active" show-dot>
      <i slot="icon" class="fa fa-home"></i>
      <span slot="label" class="item-name">首页</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-credit-card" aria-hidden="true"></i>
      <span slot="label" class="item-name">众筹</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-credit-card" aria-hidden="true"></i>
      <span slot="label" class="item-name">互助</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-users" aria-hidden="true"></i>
      <span slot="label" class="item-name">订单</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
      <span slot="label" class="item-name">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux/src/components'
export default {
  ready () {
    console.log(this.$route)
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
.tab-bot{
  text-align: center;
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
