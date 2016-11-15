<template>
  <x-header :left-options="{showBack: false}">
    <a>支付</a>
  </x-header>
  <group v-if="help">
    <cell title="加入计划"><span>{{help.title}}</span></cell>
    <cell title="被保障人姓名"><span>{{help.contact.name}}</span></cell>
    <cell title="被保障人身份证号"><span>{{help.contact.idCar}}</span></cell>
  </group>

  <group v-if="project">
    <cell title="产品名称"><span>{{project.title}}</span></cell>
    <cell title="数量"><span>{{project.quantity}}</span></cell>
    <cell title="收货人"><span>{{project.address.name}}</span></cell>
    <cell title="电话"><span>{{project.address.mobile}}</span></cell>
    <cell title="详细地址"><span>{{project.address.province}}{{project.address.city}}{{project.address.district}}{{project.address.address}}</span></cell>
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
    this.help = window.help ? window.help : null;
    this.project = window.project ? window.project : null;
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
      project: null,
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
      let params = {};
      if (this.payType === 1) {
        callpay();
        return;
      } else if (this.help && this.payType === 2) {
        params = {
          type: 2,
          par_id: this.help.code,
          data: {
            contact_id: this.help.contact.id
          }
        }
      } else if (this.project && this.payType === 2) {
        params = {
          type: 3,
          par_id: this.project.id,
          data: {
            address_id: this.project.address.id,
            quantity: this.project.quantity
          }
        }
      }
      Api.balance(params).then((response) => {
        this.$dispatch('toast');
        if (this.project) {
          router.go('/order/raise');
        } else if(this.help) {
          router.go('/order/help');
        }
      })
    }
  }
}
</script>


<style lang="less">
.pay-list{
  background: #fff;
  margin-bottom: 60px;
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
.weui_cell_ft{
  font-size: 10px;
}
</style>
