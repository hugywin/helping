<template>
  <div class="publish-order">
    <x-scroll :iheight="iheight">
      <panel :list="panelList" type="3"></panel>
      <group v-if="publishInfo">
        <cell title="交易单号" v-if="publishInfo.trade_no"><span solt="value">{{publishInfo.trade_no}}</span></cell>
        <cell title="支付方式"><span solt="value">{{publishInfo.pay_method}}</span></cell>
        <cell title="订单金额"><span solt="value">{{publishInfo.money * publishInfo.quantity}}元</span></cell>
        <cell title="交易时间"><span solt="value">{{publishInfo.time}}</span></cell>
        <cell title="订单数量"><span solt="value">{{publishInfo.quantity}}</span></cell>
        <cell title="回报方式"><span solt="value">{{publishInfo.report.content}}</span></cell>
      </group>
      <group v-if="publishInfo">
        <cell title="订单状态"><span solt="value">{{publishInfo.status}}</span></cell>
        <cell :title="publishInfo.exp_user+' ('+publishInfo.exp_mobile+')'" :inline-desc="publishInfo.exp_address"><i class="fa fa-map-marker" solt="icon"></i></cell>
      </group>
      <div class="btn" v-if="publishInfo">
        <x-button plain type="primary" v-if="publishInfo.status == '已发货'" v-link="{path: '/publish/expressinfo/'+id}">查看物流</x-button>
        <x-button plain type="primary" v-else v-link="{path: '/publish/express/'+this.raise+'/'+id}">发货</x-button>
      </div>
    </x-scroll>
  </div>
</template>

<script>
import {XButton, Panel, Group, Cell} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
export default {
  ready () {
    this.id = this.$route.params.id;
    this.raise = this.$route.params.raise;
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    XButton, XScroll, Panel, Group, Cell
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight,
      panelList: [],
      publishInfo: null
    }
  },
  methods: {
    // 获取众筹订单详情
    fetch: function () {
      Api.joindesc({id: this.id})
      .then((response) => {
        this.$dispatch('loading', false);
        let data = JSON.parse(response.body);
        this.publishInfo = data.Result;
        this.raiseProcess(data.Result);
      })
    },
    // 数据处理
    raiseProcess: function (data) {
      this.panelList = [{
        title: data.project.title,
        src: data.report.pic,
        url: '/'
      }]
    }
  }
}
</script>

<style lang="less">
.publish-order {
  .btn{
    button{
      width: 60%;
      text-align: center;
    }
    margin: 20px 0;
  }
  .fa-map-marker{
    font-size: 3rem;
    margin-left: 15px;
  }
  .weui_cell_hd{
    img{
      width: 50px!important;
    }
  }
}
</style>
