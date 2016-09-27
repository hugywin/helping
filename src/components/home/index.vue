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
          <a href="/home"><img src="../../assets/img/discover-icon-1.png"/></a>
          <br/>
          资本强大
          <br/>
          <span>亿元起航</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a href="/home"><img src="../../assets/img/discover-icon-2.png"/></a>
          <br/>
          资金安全
          <br/>
          <span>银行委托</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a href="/home"><img src="../../assets/img/discover-icon-4.png"/></a>
          <br/>
          真实透明
          <br/>
          <span>区块链公示</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="mark-logo-list">
          <a href="/home"><img src="../../assets/img/discover-icon-5.png"/></a>
          <br/>
          邀请好友
          <br/>
          <span>新手特权</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
  <div class="tab-bot">
    <tabbar>
      <tabbar-item>
        <i slot="icon" class="fa fa-home" aria-hidden="true"></i>
        <span solt="label">发现</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Swiper from 'vux/src/components/swiper'
import Flexbox from 'vux/src/components/flexbox/flexbox'
import FlexboxItem from 'vux/src/components/flexbox/flexbox-item'
import {Tabbar, TabbarItem} from 'vux/src/components/tabbar/index'
console.log(TabbarItem)
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
      }]

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
    height: 4rem;
  }

</style>
