<template>
  <x-header :left-options="{showBack: false}">
    <a>互助产品列表</a>
  </x-header>
  <div class="help-list">
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
  </div>
  <tab-bot></tab-bot>
</template>

<script>
import { XHeader} from 'vux/src/components'
import TabBot from '../public/tab-bot'
import product from '../../product'
export default{
  components: {
    TabBot,
    XHeader
  },
  data () {
    return {
      productList: product
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
}

</style>
