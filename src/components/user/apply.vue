<template>
  <x-header :left-options="{showBack: false}">
    <a>支付</a>
  </x-header>
  <group v-if="help">
    <cell title="加入计划"><span>{{help.title}}</span></cell>
    <cell title="被保障人姓名"><span>{{help.contact.name}}</span></cell>
    <cell title="被保障人身份证号"><span>{{help.contact.idCar}}</span></cell>
  </group>
  <group>
    <cell title="支付金额">
      <span>{{money}}元</span>
    </cell>
  </group>

  <group title="支付方式">
    <ul class="pay-list">
      <li @click="selectPay(1)">
        <i class="wxzf"></i>
        <span>微信支付</span>
        <b class="fa fa-check" :class="{'fa-check': payType == 1}"></b>
      </li>
      <li :class="{'grey': balance}" @click="selectPay(2)" v-if="user">
        <span>余额</span>&nbsp;&nbsp;&nbsp;&nbsp;{{user.money}}元
        <b class="fa" :class="{'fa-check': payType == 2}"></b>
      </li>
    </ul>
  </group>

  <div class="btn-sub">
    <x-button type="primary" @click="pay()">立即支付</x-button>
  </div>

</template>


<script>
import {XHeader, Group, Cell, XButton} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    this.money = money;
    this.help = help;
    this.user = user;
    if (this.user && this.user.money > money) {
      this.balance = true;
      this.payType = 2;
    } else {
      this.balance = false;
    }
  },
  components: {
    XHeader, Group, Cell, XButton
  },
  data () {
    return {
      money: '',
      help: null,
      user: null,
      payType: 1,
      balance: true
    }
  },
  methods: {
    selectPay: function(type) {
      if (this.balance) {
        this.payType = type;
      } else {
        this.payType = 1;
      }
    },
    pay: function() {
      if (this.payType === 1) {
        callpay();
      } else {
        Api.balance({
          type: 2,
          par_id: this.help.code,
          data: {
            contact_id: this.help.contact.id
          }
        }).then((response) => {

        })
      }
    }
  }
}
</script>


<style lang="less">
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
.btn-sub{
  position: fixed;
  bottom: 0;
  line-height: 30px;
  width: 100%;
}
</style>
