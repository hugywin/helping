<template>
  <div class="barner">
    <swiper :list="list" auto :aspect-ratio="1/3"></swiper>
  </div>
  <div class="list-block">
    <span>198889</span> 人已加入
  </div>
  <div class="mark－logo">
    <flexbox>
      <flexbox-item>
        <div class="mark-logo-list">
          <a v-link="{path:'/home'}"><img src="../../assets/img/discover-icon-1.png"/></a>
          <br/>
          资本强大
          <br/>
          <span>亿元起航</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a v-link="{path:'/home'}"><img src="../../assets/img/discover-icon-2.png"/></a>
          <br/>
          资金安全
          <br/>
          <span>银行委托</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a v-link="{path:'/home'}"><img src="../../assets/img/discover-icon-4.png"/></a>
          <br/>
          真实透明
          <br/>
          <span>区块链公示</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a v-link="{path:'/home'}"><img src="../../assets/img/discover-icon-5.png"/></a>
          <br/>
          邀请好友
          <br/>
          <span>新手特权</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
  <div class="product-list">
    <a v-for="item in productList" v-link="{path: '/product/'+item.id}" class="product-item row">
      <div class="col-4">
        <div class="list-img">
          <img :src="item.src" />
        </div>
      </div>
      <div class="col-8">
        <p class="title">{{item.title}}</p>
        <p class="introduction">{{{item.introduction}}}</p>
        <p class="con">{{item.introduction2}}<br/>
        {{item.joinage}}  <b>19987</b>人已加入
        </p>
      </div>
    </a>
  </div>
  <tabbar class="tab-bot">
    <tabbar-item class="tab-bot-item active" show-dot>
      <i slot="icon" class="fa fa-home"></i>
      <span slot="label" class="item-name">发现</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-credit-card" aria-hidden="true"></i>
      <span slot="label" class="item-name">保障凭证</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-users" aria-hidden="true"></i>
      <span slot="label" class="item-name">帮友圈</span>
    </tabbar-item>
    <tabbar-item class="tab-bot-item" show-dot>
      <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
      <span slot="label" class="item-name">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Swiper from 'vux/src/components/swiper'
import Flexbox from 'vux/src/components/flexbox/flexbox'
import FlexboxItem from 'vux/src/components/flexbox/flexbox-item'
import {Tabbar, TabbarItem} from 'vux/src/components/tabbar/index'
import product from '../../product'
export default{
  components: {
    Swiper,
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      list: [{
        url: '/home',
        img: 'http://staticcdn2.zhongtuobang.com/img/wx2/discover/banner3.jpg'
      }, {
        url: '/home',
        img: 'http://staticcdn2.zhongtuobang.com/img/wx2/discover/banner3.jpg'
      }, {
        url: '/home',
        img: 'http://staticcdn2.zhongtuobang.com/img/wx2/discover/banner3.jpg'
      }],
      productList: product
    }
  }
}
</script>

<style lang="less">
  .list-block{
    color: #333;
    background-color: #fff;
    margin-top: 0px;
    font-size: 0.7em;
    margin-bottom: .5rem;
    height: 2.2rem;
    line-height: 2.2rem;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #ddd;
    span{
      color: #FF9A14;
    }
  }
  .mark-logo-list{
    text-align: center;
    img{
      height: 2.5rem;
    }
  }
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
  }
  .product-list{
    padding: 10px 5px 0;
    .product-item{
      color: #333;
      .list-img{
        padding-right: 10px;
        img{
          width: 100%;
        }
      }
      .title{
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 0 5px 0;
        padding: 0;
        line-height: 2em;
      }
      .introduction{
        margin: 0;
        color: #666;
        font-size: 1rem;
        b{
          color: #FF9A14;
        }
      }
      .con{
        margin: 1rem 0 0 0;
        font-size: .7rem;
        color: #999;
        b{
          color: #FF9A14;
        }
      }
    }
  }

</style>
