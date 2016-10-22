<template>
  <div class="product-wrap">
    <x-header :left-options="{showBack: true, backText: '发现'}">
      <a>互助计划详情</a>
    </x-header>
    <div class="row product-h" v-if="product">
      <div class="col-4">
        <div class="product-h-img">
          <img :src="product.src" />
        </div>
      </div>
      <div class="col-8">
        <p class="title">{{product.title}}</p>
        <p class="con" v-if="product.joinage">加入年龄：{{product.joinage}}</p>
        <p class="con" v-if="produt.ensureage">保障年龄：{{produt.ensureage}}</p>
      </div>
    </div>
    <div class="row statisti">
      <div class="col-4 list">
        <p class="num">65789</p>
        <p class="txt">近3日增加(人)</p>
      </div>
      <div class="col-4 list">
        <p class="num">65789</p>
        <p class="txt">已增加会员(人)</p>
      </div>
      <div class="col-4 list-border">
        <p class="num">65789</p>
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
        <p>{{{product.securityIntroduction}}}</p>
      </div>
    </div>
    <div class="page-common" v-if="product.join">
      <p class="title">互助规则</p>
      <group>
        <cell title="加入条件" is-link v-link="{path: '/product/doc/join/'+id}" :value="product.join.title"></cell>
        <cell title="加入承诺" is-link v-link="{path: '/product/doc/commitment/'+id}" :value="product.commitment.title"></cell>
        <cell title="保障范围" is-link v-link="{path: '/product/doc/scopeProtection/'+id}" :value="product.scopeProtection.title"></cell>
        <cell title="保障额度" is-link v-link="{path: '/product/doc/securityLines/'+id}" :value="product.securityLines.title"></cell>
        <cell title="分摊规则" is-link v-link="{path: '/product/doc/allocationRules/'+id}" :value="product.allocationRules.title"></cell>
        <cell title="延续条件" is-link v-link="{path: '/product/doc/continue/'+id}" :value="product.continue.title"></cell>
        <cell title="观察期" is-link v-link="{path: '/product/doc/observe/'+id}" :value="product.observe.title"></cell>
        <cell title="详细规则" is-link v-link="{path: '/product/doc/'}"></cell>
      </group>
    </div>
    <div class="problems-con">
      <p class="title">常见问题</p>
      <group v-for="item in product.problems" class="problems-blonk">
        <cell :title="item.title" @click="problemsClc(item)">
          <span slot="after-title" :class="{'fa-angle-double-down': !item.isopen, 'fa-angle-double-up': item.isopen}" class="fa demo-icon"></span>
        </cell>
        <div v-if="item.isopen" class="content">{{{item.content}}}</div>
      </group>
    </div>
    <Comment></Comment>
    <div class="btn-sub">
      <x-button type="primary" v-link="{path: '/order/join'}">立即加入</x-button>
    </div>
  </div>
</template>


<script>
import { XHeader,  Cell, Group, XButton} from 'vux/src/components'
import Comment from './comment'
import product from '../../product'
export default {
  ready () {
    let id = this.$route.params.id;
    this.product = product[id];
    this.id = id;
  },
  data () {
    return {
      product: {},
      id: ''
    }
  },
  components: {
    XHeader,
    Cell,
    Group,
    Comment,
    XButton
  },
  methods: {
    //展示问题
    problemsClc: function(item) {
      item.isopen = !item.isopen;
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
        font-size: 2rem;
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
        font-size: 0.65rem;
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
          font-size: .7rem;
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
        width: 100%;
        padding-top: .4rem;
        padding-bottom: .35rem;
        overflow: hidden;
        font-size: 1.6rem;
        font-weight: bold;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .weui_cells{
        margin-top: 0;
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
        width: 100%;
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
  }

</style>
