<template>
  <x-header :left-options="{showBack: true}">
    <a>互助订单详情</a>
  </x-header>
  <div class="helpinfo-wrap" v-if="mydescinfo">
    <group>
      <cell v-link="{path: '/'}" title="互助计划："><span solt="value">{{mydescinfo.mutual.name}}</span></cell>
    </group>

    <group>
      <ul class="info">
        <li><label>被保障人：</label>{{mydescinfo.contact.name}}</li>
        <li><label>身份证号：</label>{{mydescinfo.contact.idCar}}</li>
        <li><label>保障额度：</label>{{mydescinfo.mutual.safeguardMoney}}</li>
        <li><label>加入日期：</label>{{mydescinfo.time}}</li>
        <li><label>保障状态：</label>观察期还剩{{mydescinfo.observeDay}}天</li>
      </ul>
    </group>

    <group>
      <cell title="会员公约" link="/"></cell>
      <cell :title="'<<'+mydescinfo.mutual.name+'计划规则>>'" link="/"></cell>
    </group>


  </div>
</template>

<script>
import {Group, Cell, XHeader} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    let id = this.$route.params.id;
    this.fecth(id);
  },
  components: {
    Group, Cell, XHeader
  },
  data () {
    return{
      mydescinfo: {}
    }
  },
  methods: {
    // 获取详情
    fecth: function(id) {
      let context = this;
      Api.mydescinfo({id: id}).then((response) => {
        let data = JSON.parse(response.body);
        context.mydescinfo = data.Result;
      })
    }
  }
}
</script>


<style lang="less">
.helpinfo-wrap{
  .info{
    background: #fff;
    padding: 10px;
    li{
      line-height: 2.6rem;
      font-size: 1.7rem;
      label{
        margin-right: 8px;
      }
    }
  }
}
</style>
