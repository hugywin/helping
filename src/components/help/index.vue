<template>
  <div class="product-wrap">
    <x-header :left-options="{showBack: false}">
      <a>互助计划详情</a>
    </x-header>
    <div class="row product-h" v-if="product">
      <div class="col-4">
        <div class="product-h-img">
          <img :src="product.info.pic" />
        </div>
      </div>
      <div class="col-8">
        <p class="title">{{product.info.name}}</p>
        <p class="con" v-if="product.minAge">加入年龄：{{product.info.minAge}}-{{product.info.maxAge}}周岁</p>
        <!-- <p class="con" v-if="product.ensureage">保障年龄：{{product.ensureage}}</p> -->
      </div>
    </div>
    <div class="row statisti" v-if="product">
      <div class="col-4 list">
        <p class="num">{{product.newUser}}</p>
        <p class="txt">近3日增加(人)</p>
      </div>
      <div class="col-4 list">
        <p class="num">{{product.allUser}}</p>
        <p class="txt">已增加会员(人)</p>
      </div>
      <div class="col-4 list-border">
        <p class="num">{{product.money}}</p>
        <p class="txt">救助均摊金额</p>
      </div>
    </div>
    <div class="page-info row">
      <div class="col-4">
        <div class="page-info-img">
          <img src="../../assets/img/prod-view-money.jpg" />
        </div>
      </div>
      <div class="col-8 page-info-txt">
        <p>全面覆盖癌症等常见大病111种</p><p>一人患病，众人分摊</p><p>30万元保障=300万人x每人0.1元</p><p>也可为家人加入</p>
      </div>
    </div>
    <div class="page-common">
      <p class="title">互助规则</p>
      <group v-if="product.info">
        <cell v-for="list in product.info.item" :title="list.name" is-link v-link="{path: '/help/doc/join/'}" :value="list.dig"></cell>
      </group>
    </div>
    <!-- <div class="problems-con">
      <p class="title">常见问题</p>
      <group v-for="item in product.problems" class="problems-blonk">
        <cell :title="item.title" @click="problemsClc(item)">
          <span slot="after-title" :class="{'fa-angle-double-down': !item.isopen, 'fa-angle-double-up': item.isopen}" class="fa demo-icon"></span>
        </cell>
        <div v-if="item.isopen" class="content">{{{item.content}}}</div>
      </group>
    </div> -->
    <Comment></Comment>
    <div class="btn-sub">
      <x-button type="primary" v-link="{path: '/help/join/'+id}">立即加入</x-button>
    </div>
  </div>
</template>


<script>
import { XHeader,  Cell, Group, XButton, Countup} from 'vux/src/components'
import Comment from './comment'
import product from '../../product'
import Api from 'resource/index'
export default {
  ready () {
    let id = this.$route.params.id;
    this.$dispatch('loading', true);
    //获取产品顶部增长数据
    this.getMutual();
  },
  data () {
    return {
      product: null
    }
  },
  components: {
    XHeader, Cell,  Group, Comment, XButton, Countup
  },
  methods: {
    //展示问题
    problemsClc: function(item) {
      item.isopen = !item.isopen;
    },

    //获取产品顶部增长数据
    getMutual: function(id) {
      let context = this;
      Api.mutual({code: id}).then((response)=> {
        let data = JSON.parse(response.body);
        if (data.Code == 0) {
          this.product = data.Result;
        }
        this.$dispatch('loading', false);
      })
    }
  }
}
</script>
<style lang="less">
  .product-wrap{
    .product-h{
      margin: 0;
      padding: .5rem;
      padding-bottom: 5px;
      .product-h-img{
        padding-right: 20px;
        img{
          width: 100%;
        }
      }
      .title{
        color: #333;
        font-size: 1.8rem;
        margin: 8px 0 20px 0;
        font-weight: bold;
      }
      .con{
        color: #999;
        font-size: 1.3rem;
        margin-top: 1rem;
      }
    }
    .statisti{
      color: #333;
      background-color: #fff;
      margin-top: 0px;
      margin-left: 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding: .5rem 0;
      .list{
        text-align: center;
        margin-left: 0;
        margin-right: -1px;
        border-right: 1px solid rgba(0,0,0,0.1);
      }
      .list-border{
        text-align: center;
        margin-left: 0;
      }
      .num{
        font-size: 1.2em;
        color: #FF9A14;
      }
      .txt{
        font-size: 1.3rem;
        color: #999999;
      }
    }
    .page-info{
      padding-top: 1rem;
      background: #fff;
      .page-info-img{
        padding: 0 10px;
        img{
          width: 100%;
        }
      }
      .page-info-txt{
        p{
          color: #333;
          font-size: 1rem;
          margin-left: 1.5rem;
        }
      }
    }
    .page-common{
      margin-top: 15px;
      background: #fff;
      .title{
        padding-left: .75rem;
        height: 3rem;
        padding-right: .75rem;
        line-height: 3rem;
        position: relative;
        padding-top: .4rem;
        padding-bottom: .35rem;
        overflow: hidden;
        font-size: 1.6rem;
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .weui_cells{
        margin-top: 0!important;
      }
    }
    .problems-con{
      margin-top: 15px;
      background: #fff;
      .title{
        padding-left: .75rem;
        height: 3rem;
        padding-right: .75rem;
        line-height: 3rem;
        position: relative;
        padding-top: .4rem;
        padding-bottom: .35rem;
        overflow: hidden;
        font-size: 1.6rem;
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .demo-icon{
        float: right;
      }
      .problems-blonk{
        .content{
          margin: 0 8px;
          padding: 5px;
          font-size: 0.8rem;
          background: rgb(246, 246, 246);
          p{
            line-height: 1.5rem;
            margin-bottom: .6rem;
          }
          .table{
            border: 1px solid #ccc;
            margin-left: .42666667rem;
            margin-bottom: .64rem;
            font-size: .7rem;
            border-collapse: collapse;
            border-spacing: 0;
            tr{
              border: 1px solid #ccc;
              height: .8rem;
              th{
                border: 1px solid #ccc;
                height: .768rem;
                padding: .21333333rem;
                width: 6.4rem;
                text-align: left;
              }
              td{
                border: 1px solid #ccc;
                padding: .21333333rem;
                text-align: left;
                height: 1.2rem;
                line-height: 1.2rem
              }
            }
          }
        }

      }

    }
    .btn-sub{
      position: fixed;
      bottom: 0;
      left: 5%;
      line-height: 30px;
      width: 90%;
    }
    .weui_cells{
      margin-top: 0!important;
    }
  }

</style>
