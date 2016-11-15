<template>
  <div class="raise-list">
    <x-header :left-options="{showBack: false}">
      <a>众筹产品列表</a>
    </x-header>
    <div class="list-type">
      <scroller lock-y :scrollbar-x=false>
        <div class="list-type-box" :style="{width:110*typeList.length+'px'}">
          <div class="type-item" :class="{'active': cate == item.key}" v-for="item in typeList" @click="selectType(item)">
            {{item.value}}
          </div>
        </div>
      </scroller>
    </div>
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
  </div>
  <tab-bot></tab-bot>
</template>

<script>
import { XHeader, Flexbox, FlexboxItem, Card, Scroller, Box, Progress} from 'vux/src/components'
import TabBot from '../public/tab-bot'
import Api from 'resource/index'
export default {
  components: {
    XHeader, Flexbox, FlexboxItem, Card, Scroller, TabBot, Box, Progress
  },
  data () {
    return {
      typeList: [],
      cate: '',
      raiseList: [],
      percent: 50
    }
  },
  ready () {
    this.categorys();
    this.$dispatch('loading', true);
  },
  methods: {
    fetch: function() {
      let context = this;
      Api.project({
        cate: this.cate,
        page: 1,
        size: 10
      }).then((response) => {
        let data = JSON.parse(response.body);
        this.$dispatch('loading', false);
        context.raiseList = data.Result.List;
      })
    },

    //获取众筹类型
    categorys: function() {
      let context = this;
      Api.categorys().then((response) => {
        let data = JSON.parse(response.body);
        context.typeList = data.Result;
        context.cate = context.typeList[0].key
        context.fetch();
      })
    },

    // 切换类型
    selectType: function(item) {
      this.cate = item.key;
      this.fetch();
    }

  }
}
</script>

<style lang="less">
.raise-list{
  .list-type-box{
    height: 3.2rem;
    position: relative;
    margin: 20px 0;
    .type-item{
      width: 100px;
      line-height: 3.2rem;
      font-size: 1.4rem;
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
  .box{
    width: 100%;
  }
  .flexbox-item{
    min-height: 50px;
  }
}
</style>
