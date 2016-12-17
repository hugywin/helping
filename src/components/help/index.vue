<template>
  <x-header :left-options="{showBack: false}">
    <a>互助计划详情</a>
  </x-header>
  <x-scroll :iheight="iheight">
    <div class="product-wrap">
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
        <p class="num">{{product.new_user}}</p>
        <p class="txt">近3日增加(人)</p>
      </div>
      <div class="col-4 list">
        <p class="num">{{product.all_user}}</p>
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
      <group v-if="product">
        <cell v-for="list in product.info.item" :title="list.name" is-link v-link="{path: '/help/doc/'+$route.params.id+'/'+$index}" :value="list.dig"></cell>
      </group>
    </div>
    <div class="problems-con">
      <p class="title">常见问题</p>
      <group v-for="item in problems" class="problems-blonk">
        <cell :title="item.title" @click="problemsClc(item)">
          <span slot="after-title" :class="{'fa-angle-double-down': !item.isopen, 'fa-angle-double-up': item.isopen}" class="fa demo-icon"></span>
        </cell>
        <div v-if="item.isopen" class="content">{{{item.content}}}</div>
      </group>
    </div>
    <Comment></Comment>
  </div>
  </x-scroll>
  <div class="help-btn-sub">
    <x-button type="primary" v-link="{path: '/help/join/'+id}">立即加入</x-button>
  </div>
</template>


<script>
const problems = [
  {
    title: 'Q1：我已经有医保，还需要参加本计划吗？',
    isopen: false,
    content: '<div ><p style="margin:0;">抗癌互助医疗计划和医保不互斥可叠加（如患病，可同时获得医保报销和众托帮互助金），是医保的有力补充。两者区别如下：</p><table class="table"><tbody><tr><th></th><th>医保</th><th>众托帮互助</th></tr><tr><td>最高额度</td><td>有一定自费项目</td><td>最高30万，与医保可叠加</td></tr><tr style="background: #f2f2f2"><td>用药范围</td><td>医保规定范围，进口特效抗癌药无法报销</td><td>无限制</td></tr><tr><td>报销方式</td><td>先垫付后报销</td><td>确认患病，立即打钱</td></tr></tbody></table></div>'
  },
  {
    title: 'Q2：感觉癌症离我很远，有必要加入众托帮互助计划吗？',
    isopen: false,
    content: '<div><p>根据全国肿瘤登记中心数据显示，中国人一生中得癌症的概率是22%。现在癌症的治愈率越来越高，部分癌症甚至有90%的治愈率。癌症并不可怕，可怕的是没有足够的治疗金。</p></div>'
  },
  {
    title: 'Q3：30万对于治疗癌症够用吗？',
    isopen: false,
    content: '<div><p>相关统计数据显示，癌症的平均治疗费用为30万。对于一般的癌症，30万的治疗费用是足够的。</p></div>'
  },
  {
    title: 'Q4：首次充值10元还有其他花费吗？',
    isopen: false,
    content: '<div><p>首次充值的10元是加入平台预存费用，如果平台中其他会员患病则需要大家分摊费用（每次分摊不超过3元）。只需要账号上的余额大于0元钱就能持续被保障。按众托帮现在用户的平均年龄，每人每年预计总分摊金额90元。</p></div>'
  },
  {
    title: 'Q5：已经患病的人可以加入计划吗？',
    isopen: false,
    content: '<div><p>不可以，加入计划的前提是身体健康。加入抗癌互助医疗计划条件如下：</p><table class="table"><tbody><tr><th>18周岁-50周岁</th><th class="get">√</th></tr><tr style="height: 40px"><td>身体健康</td><td class="get">√</td></tr><tr style="height: 60px"><td>认同并遵守《会员公约》与《计划章程》</td><td class="get">√</td></tr></tbody></table><div class="hiddenCtn ctn4"style="background: rgb(246, 246, 246); border: none; padding-top: 5px; margin-top: 0px; display: block;"><p>首次充值的10元是加入平台预存费用，如果平台中其他会员患病则需要大家分摊费用（每次分摊不超过3元）。只需要账号上的余额大于0元钱就能持续被保障。按众托帮现在用户的平均年龄，每人每年预计总分摊金额90元。</p></div></div>'
  },
  {
    title: 'Q6：加入计划后可退出吗？',
    isopen: false,
    content: '<div><p>您可以选择退出计划，并将充值金额的剩余部分提出。一旦退出，如果想再次加入需再经历180天观察期。如要退出计划，请拨打我们客服电话:400-000-4530。</p></div>'
  },
  {
    title: 'Q7：你们是保险吗？',
    isopen: false,
    content: '<div><p>“众托帮”是互助社群，不是保险。帮友间互相分担帮助，抱团取暖，且众托帮不收取任何费用，且不承担任何给付补偿责任，与保险有本质区别。</p></div>'
  }
];
import { XHeader,  Cell, Group, XButton, Countup} from 'vux/src/components'
import Comment from './comment'
import Api from 'resource/index'
import XScroll from '../public/scroll'
export default {
  ready () {
    this.id = this.$route.params.id;
    this.$dispatch('loading', true);
    //获取产品顶部增长数据
    this.getMutual(this.id);
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight - 90,
      product: null,
      problems: problems
    }
  },
  components: {
    XHeader, Cell,  Group, Comment, XButton, Countup, XScroll
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
    .weui_cells{
      margin-top: 0!important;
    }
  }
  .help-btn-sub{
    position: fixed;
    bottom: 0;
    left: 10%;
    line-height: 30px;
    width: 80%;
  }

</style>
