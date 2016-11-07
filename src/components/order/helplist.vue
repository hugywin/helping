<template>
  <div class="helplist-wrap">
    <x-header :left-options="{showBack: true}">
      <a>互助订单列表</a>
    </x-header>
    <div class="help-list" v-for="item in mutual">
      <h2 class="title">{{item.mutual.name}}</h2>
      <p class="txt">状态：{{item.status}}</p>
      <ul class="info">
        <li><label>真实姓名：</label>{{item.contact.name}}</li>
        <li><label>保障额度：</label>{{item.mutual.safeguardMoney}}</li>
      </ul>
      <a class="link" v-link="{path: '/order/help/'+item.id }">查看详情</a>
    </div>
  </div>
</template>

<script>
import {XHeader} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready() {
    this.fetch();
  },
  data () {
    return {
      mutual: []
    }
  },
  components: {
    XHeader
  },
  methods: {
    // 获取我的互助列表
    fetch: function() {
      let context = this;
      Api.mutualList({
        size: 10,
        page: 1
      }).then((response) => {
        let data = JSON.parse(response.body);
        context.mutual = data.Result.List;
      })
    }
  }
}
</script>


<style lang="less">
.helplist-wrap{
  .help-list{
    background: #fff;
    margin: 20px 10px 0;
    border-radius: 5px;
    .title{
      line-height: 2.2rem;
      font-size: 1.5rem;
      padding-left: 10px;
    }
    .txt{
      color:#999;
      line-height: 1.4rem;
      font-size: 1rem;
      padding-bottom: 5px;
      margin-left: 10px;
      border-bottom: 1px solid #eee;
    }
    .info{
      padding: 10px;
      li{
        line-height: 2.6rem;
        font-size: 1.5rem;
        label{
          margin-right: 8px;
        }
      }
    }
    .link{
      line-height: 3rem;
      font-size: 1.7rem;
      display: block;
      border-top: 1px solid #ddd;
      text-align: center;
      background: #FF9A14;
      color:#fff;
      border-radius: 5px;
    }
  }
}
</style>
