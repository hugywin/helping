<template>
  <div class="raiseinfo-wrap" v-if="info">
    <panel :list="proList" :type="type" ></panel>
    <group>
      <cell title="订单状态"><span solt="value" class="color-red">{{info.status}}</span></cell>
      <cell title="交易单号" v-if="info.trade_no"><span solt="value">{{info.trade_no}}</span></cell>
      <cell title="订单金额"><span solt="value">{{info.money}}元</span></cell>
      <cell title="支付方式"><span solt="value">{{info.pay_method}}</span></cell>
      <cell title="订单数量"><span solt="value">{{info.quantity}}</span></cell>
      <cell title="成交时间"><span solt="value">{{info.time}}</span></cell>
      <cell :title="info.exp_user+' ('+info.exp_mobile+')'" :inline-desc="info.exp_address"><i class="fa fa-map-marker" solt="icon"></i></cell>
    </group>
    <group>
      <ul class="pay-info">
        <li class="row">
          <label class="col-3">产品回报</label>
          <div class="text col-9">{{info.report.content}}</div>
        </li>
      </ul>
    </group>
  </div>
</template>

<script>
import {Group, Cell, Panel} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready() {
    let id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.fetch(id);
  },
  components: {
    Group, Cell, Panel
  },
  data () {
    return {
      proList: [],
      info: null,
      type: '3'
    }
  },
  methods: {
    fetch: function(id) {
      let context = this;
      Api.myJoinInfo({id: id}).then((response) => {
        let data = JSON.parse(response.body);
        this.$dispatch('loading', false);
        this.info = data.Result;
        this.proList = [{
          src: 'http://crowd.iblue.cc/'+this.info.report.pic,
          title: this.info.project.title,
          url: '/raise/info/'+this.info.project.id
        }]
      })
    }
  }
}
</script>


<style lang="less">
.raiseinfo-wrap{
  .pay-info{
    padding: 10px 0;
    li{
      line-height: 3rem;
      font-size: 1.6rem;
    }
    label{
      text-align: center;
    }
  }
  .pay-btn{
    position: fixed;
    height: 3.2rem;
    line-height: 3.2rem;
    background: #43AC43;
    color:#fff;
    font-size: 1.8rem;
    text-align: center;
    bottom: 0;
    width: 100%;
    cursor: pointer;
  }
  .color-red{
    color: red;
  }
  .weui_cell_hd{
    img{
      width: 50px !important;
    }
  }
}
</style>
