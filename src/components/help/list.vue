<template>
  <div v-if="isLoading">
    <scroller lock-x scrollbar-y :height="iheight+'px'"  :prevent-default="false"  v-ref:scroller>
      <div class="scroll-wrap">
        <x-header :left-options="{showBack: false}">
          <a>互助产品列表</a>
        </x-header>
        <div class="help-list">
          <div class="product-list">
            <a v-for="item in productList" v-link="{path: '/help/'+item.code}" class="product-item row">
              <div class="col-4">
                <div class="list-img">
                  <img :src="item.pic" />
                </div>
              </div>
              <div class="col-8">
                <p class="title">{{item.name}}</p>
                <p class="introduction">预存<b>{{item.money}}元</b>，最高可得<b>{{item.safMoney}}万元</b>保障</p>
                <p class="con">{{item.intro}}<br/>
                {{item.minAge}}-{{item.maxAge}}周岁  <b>{{item.joinCount}}</b>人已加入
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </scroller>
  </div>
  <tab-bot></tab-bot>
</template>

<script>
import { XHeader, Scroller} from 'vux/src/components'
import TabBot from '../public/tab-bot'
import Api from 'resource/index'
export default{
  ready () {
    this.iheight = window.screen.height - 65;
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    TabBot, XHeader, Scroller
  },
  data () {
    return {
      productList: null,
      iheight: 0,
      isLoading: false
    }
  },
  methods: {
    fetch: function() {
      Api.mutualList().then((response) => {
        console.log(1);
        let data = JSON.parse(response.body);
        this.productList = data.Result;
        this.$dispatch('loading', false);
        this.isLoading = true;
      })
    }
  }
}
</script>

<style lang="less">
.help-list{
  padding-top: 10px;
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
        padding: 0;
        line-height: 1.8rem;
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
        font-size: 1.2rem;
        color: #999;
        b{
          color: #FF9A14;
        }
      }
    }
  }
}

</style>
