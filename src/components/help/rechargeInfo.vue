<template>
  <div class="recharge-info">
    <x-header :left-options="{showBack: false}">
      <a>确认订单信息</a>
    </x-header>
    <div class="info">
      <p class="title">保障人信息</p>
      <group>
        <cell title="加入计划" :value="1111"></cell>
        <cell title="被保障人真实姓名" :value="1111"></cell>
        <cell title="被保障人身份证号" :value="1227363663782828"></cell>
      </group>
    </div>
    <group title="支付方式">
      <ul class="pay-list">
        <li @click="payTypeClk('wx')">
          <i class="wxzf"></i>
          <span>微信支付</span>
          <b class="fa fa-check" v-if="payType == 'wx'"></b>
        </li>
        <li @click="payTypeClk('zfb')">
          <i class="zfb"></i>
          <span>支付宝</span>
          <b class="fa fa-check" v-if="payType == 'zfb'"></b>
        </li>
      </ul>
    </group>
    <div class="btn-sub">
      <x-button type="primary">支付</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Cell} from 'vux/src/components'
export default {
  components: {
    XHeader,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      payType: 'wx'
    }
  },
  methods: {
    // 选择支付方式
    payTypeClk: function(val) {
      this.payType = val;
    }
  }
}
</script>
<style lang="less">
.recharge-info{
  .title{
    color: #333;
    font-size: 2rem;
    margin-top: 15px;
    font-weight: bold;
    background: #fff;
    line-height: 3rem;
    padding-left: 5px;
  }
  .weui_cells{
    margin-top: 0;
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
  }
  .pay-list{
    background: #fff;
    li{
      padding: 5px 10px;
      line-height: 32px;
      font-size: 1.6rem;
      border-bottom: 1px solid #D9D9D9;
      position: relative;
      i{
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-right: 15px;
        vertical-align: top;
        top: 3px;
        position: relative;
        background: url(../../assets/img/pay.png) no-repeat;
        background-size: 32px;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .wxzf{
        background-position: 0 -64px;
      }
      .zfb{
        background-position: 0 -96px;
      }
      .fa{
        position: absolute;
        right: 10px;
        top:5px;
        color:#43AC43;
        line-height: 32px;
        font-size: 20px;
      }
    }
  }
}
</style>
