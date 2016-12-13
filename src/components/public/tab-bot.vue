<template>
  <div class="tab-bot">
    <tabbar>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/'}" link="/">
        <i slot="icon" class="icons icons-home"></i>
        <span slot="label" class="item-name">首页</span>
      </tabbar-item>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/raise'}"  link="/raise">
        <i slot="icon" class="icons icons-credit" aria-hidden="true"></i>
        <span slot="label" class="item-name">众筹</span>
      </tabbar-item>
      <tabbar-item class="tab-bot-item tab-bot-plus" :class="{'active': path=='/publish'}" link="/publish">
        <i slot="icon" class="icons icons-plus" aria-hidden="true"></i>
        <!-- <span slot="label" class="item-name">发布众筹</span> -->
      </tabbar-item>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/help'}" link="/help">
        <i slot="icon" class="icons icons-help" aria-hidden="true"></i>
        <span slot="label" class="item-name">互助</span>
      </tabbar-item>
      <tabbar-item class="tab-bot-item" :class="{'active': path=='/user'}" link="/user">
        <i slot="icon" class="icons icons-user" aria-hidden="true"></i>
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
  // margin-top: 65px;
  .weui_tabbar{
    position: fixed!important;
  }
  .tab-bot-item{
    color: #929292;
    .fa{
      font-size: 2.3rem;
    }
    .fa-plus-circle{
      font-size: 3.5rem;
      color:#0894ec;
    }
    .item-name{
      font-size: 1rem;
    }
  }
  .tab-bot-plus{
    .weui_tabbar_icon{
      width: 40px;
      height: 40px;
    }
    .icons{
      width: 40px;
      height: 40px;
    }
  }
  .active{
    .item-name{
      color: #43AC43;
    }
    .icons-home{
      background-position: 0 -24px;
    }
    .icons-credit{
      background-position: -24px -24px;
    }
    .icons-help{
      background-position: -48px -24px;
    }
    .icons-user{
      background-position: -72px -24px;
    }
  }
  .vux-reddot:after, .vux-reddot-border:after, .vux-reddot-s:after{
    background: none;
  }
  .weui_tabbar_item.weui_bar_item_on .weui_tabbar_label{
    color: #888;
  }
  .icons{
    width: 24px;
    height: 24px;
    display: block;
    margin: 3px auto;
    background: url(../../../static/icons.png) no-repeat;
    background-size: 96px;
  }
  .icons-home{
    background-position: 0 0;
  }
  .icons-credit{
    background-position: -24px 0px;
  }
  .icons-plus{
    background-position: 0 -48px;
  }
  .icons-help{
    background-position: -48px 0px;
  }
  .icons-user{
    background-position: -72px 0px;
  }
}
</style>
