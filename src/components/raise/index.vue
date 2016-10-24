<template>
  <div class="raise-list">
    <x-header :left-options="{showBack: true, backText: '发现'}">
      <a>众筹产品列表</a>
    </x-header>
    <div class="list-type">
      <scroller lock-y :scrollbar-x=false>
        <div class="list-type-box">
          <div class="type-item" :class="{'active': active == $index}" v-for="item in typeList" @click="">
            {{item}}
          </div>
        </div>
      </scroller>
    </div>
    <div class="raise-wrap">
      <ul>
        <li class="product-list">
          <div class="head">
            <img src="http://thumb.qschou.com/files/qschou.com/avatar/475/95a28d4a-b9c2-44da-abab-6dee7fd731cb/1475830602209d99e17c927d0471apc.jpg@!large.png" />
            <span>李怡鹏</span>
          </div>
          <h2 class="title">【80后创业把家乡放在网上卖】陕西手工擀面皮嘹咋了！</h2>
          <p class="description">陕西手工擀面皮嘹咋了！陕西手工擀面皮嘹咋了！陕西手工擀面皮嘹咋了！</p>
          <flexbox :gutter="0" wrap="wrap" class="produt-pic">
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
           <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
         </flexbox>
         <div class="raise-card clearfix">
           <dl>
             <dt>兴趣</dt>
             <dd>#粮油副食</dd>
             <dd>#粮油副食</dd>
             <dd>#粮油副食</dd>
           </dl>
           <p>已有<strong>209</strong>人支持</p>
         </div>
         <card>
            <div slot="content" class="card-demo-flex card-demo-content01">
              <div class="vux-1px-l vux-1px-r">
                <i class="fa fa-flag-o"></i>目标10000元
              </div>
              <div class="vux-1px-r">
                <i class="fa fa-jpy"></i>已筹6676元
              </div>
              <div>
                <i class="fa fa-battery-half"></i>进度67%
              </div>
            </div>
          </card>
        </li>
      </ul>
    </div>
  </div>
  <tab-bot></tab-bot>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Card, Scroller} from 'vux/src/components'
import TabBot from '../public/tab-bot'
export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Card,
    Scroller,
    TabBot
  },
  data () {
    return {
      typeList: ['预售1', '预售2', '预售3', '预售4', '预售5', '预售6', '预售7', '预售8'],
      active: 0
    }
  },
  ready () {

  }
}
</script>

<style lang="less">
.raise-list{
  .list-type-box{
    height: 4.2rem;
    position: relative;
    width: 1490px;
    margin: 20px 0;
    .type-item{
      width: 100px;
      line-height: 4.2rem;
      font-size: 1.6rem;
      color: #666;
      float: left;
      text-align: center;
      margin-left: 10px;
      background: #eee;
      border-radius: 5px;
    }
    .active{
      color: #43AC43;
      font-weight: bold;
    }
  }
  .raise-wrap{
    .product-list{
      margin-bottom: 20px;
      .head{
        margin-left: 15px;
        img{
          width: 24px;
          height:24px;
          border-radius: 48px;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          line-height: 24px;
          vertical-align: middle;
          margin-left: 5px;
        }
      }
      .title{
        line-height: 2.2rem;
        font-size: 1.5rem;
      }
      .description{
        display: block;
        max-height: 52px;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 13px;
        color: #999;
        text-indent: 8px;
        margin: 5px 5px 10px;

      }
      .produt-pic{
        img{
          width: 94%;
          margin: 0 3%;
        }
      }
      .raise-card{
        padding: 10px 5px 0;
        height: 2.5rem;
        dl{
          float: left;
          dt{
            float: left;
            border:1px solid #5DCBF3;
            color: #5DCBF3;
            height: 19px;
            line-height: 19px;
            padding: 0 8px;
            border-radius: 23px;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
          }
          dd{
            float: left;
            margin-left: 8px;
            height: 21px;
            line-height: 21px;
            font-size: 11px;
            color: #222;

          }
        }
        p{
          line-height: 21px;
          font-size: 11px;
          color: #999;
          float: right;
          strong{
            color:#666;
          }
        }
      }
      .card-demo-flex {
        display: flex;
      }
      .card-demo-content01 {
        padding: 10px 0;
      }
      .card-padding {
        padding: 15px;
      }
      .card-demo-flex > div {
        flex: 1;
        text-align: center;
        font-size: 12px;
      }
      .card-demo-flex span {
        color: #f74c31;
      }
    }
  }
}
</style>
