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
  <div class="product-tit">互助产品</div>
  <div class="product-list">
    <a v-for="item in productList" v-link="{path: '/help/'+item.id}" class="product-item row">
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
  <div class="product-tit">众筹产品</div>
  <div class="raise-wrap">
    <ul>
      <li class="product-list" v-for="item in raiseList" v-link="{path: '/raise/info/'+item.id}">
        <div class="head">
          <img :src="item.user.face" />
          <span>{{item.user.name}}</span>
        </div>
        <h2 class="title">{{item.title}}</h2>
        <p class="description">{{item.desc}}</p>
        <flexbox :gutter="0" wrap="wrap" class="produt-pic">
         <flexbox-item :span="1/4" class="flexbox-item" v-for="el in item.pics"><img :src="'http://crowd.iblue.cc/'+el"/></flexbox-item>
       <div class="raise-card clearfix">
         <dl>
           <dt>{{item.type}}</dt>
           <dd v-for="tag in item.tags" track-by="$index">#{{tag}}</dd>
         </dl>
         <p>已有<strong>{{item.join_user_count}}</strong>人支持</p>
       </div>
       <card class="card">
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div class="vux-1px-l vux-1px-r">
              <i class="fa fa-flag-o"></i>目标{{item.money}}元
            </div>
            <div class="vux-1px-r">
              <i class="fa fa-jpy"></i>已筹{{item.join_money}}元
            </div>
            <div>
              <i class="fa fa-battery-half"></i>进度{{item.join_money/item.money}}%
            </div>
          </div>
        </card>
        <box class="box">
          <progress :percent="item.join_money/item.money" :show-cancel="false"></progress>
        </box>
      </li>
    </ul>
  </div>
  <tab-bot></tab-bot>
</template>

<script>
import { Flexbox, FlexboxItem, Card, Box, Progress, Swiper} from 'vux/src/components'
import TabBot from '../public/tab-bot'
import product from '../../product'
import Api from 'resource/index'
export default{
  ready () {
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    Swiper, Flexbox, FlexboxItem, TabBot, Card, Box, Progress, Swiper
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
      productList: product,
      raiseList: []
    }
  },
  methods: {
    // 获取众筹数据
    fetch: function() {
      let context = this;
      Api.project({
        cate: 1,
        page: 1,
        size: 3
      }).then((response) => {
        this.$dispatch('loading', false);
        let data = JSON.parse(response.body);
        context.raiseList = data.Result.List;
      })
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
        margin: .5rem 0 0 0;
        font-size: .7rem;
        color: #999;
        b{
          color: #FF9A14;
        }
      }
    }
  }
  .product-tit{
    line-height: 2rem;
    font-size: 1.4rem;
    color: #0894ec;
    background: #fff;
    padding-left: 10px;
    border-bottom: 1px solid #0894ec;
    margin-top: 10px;
  }

  .raise-wrap{
    .product-list{
      margin-bottom: 20px;
      .head{
        background: #fff;
        padding: 5px 5px 5px 15px;
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
        line-height: 2.8rem;
        font-size: 1.3rem;
        text-indent: 5px;
      }
      .description{
        display: block;
        max-height: 42px;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 13px;
        color: #999;
        text-indent: 8px;
        margin: 5px 5px 10px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
      .produt-pic{
        img{
          width: 94%;
          margin: 0 3%;
        }
      }
      .raise-card{
        padding: 10px 3% 0;
        height: 2.5rem;
        width: 94%;
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
      .card{
        width: 100%;
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

</style>
