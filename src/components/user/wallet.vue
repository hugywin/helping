<template>
  <div class="wallet-wrap">
    <div class="user-money_header">
      <div>
        <strong class="balance-money">{{money}}</strong>
        账户余额(元)
      </div>
    </div>
    <p class="record-title">交易纪录</p>
    <div class="weui_cells vux-no-group-title" v-for="item in list">
      <div class="weui_cell">
        <div class="weui_cell_hd"></div>
        <div class="weui_cell_bd weui_cell_primary">
          <p>{{item.message}}</p>
          <span class="vux-label-desc">{{item.created}}</span>
        </div>
        <div class="weui_cell_ft">
        <span :class="{'color-green': item.money-0 > 0, 'color-red': item.money-0 < 0}">{{item.money}}</span>
      </div>
     </div>
    </div>
    <x-button class="record-btn" @click="recharge()" type="primary">充值</x-button>
    <popup :show.sync="showPopupPro" class="checker-popup">
      <group title="充值" class="popup-item">
        <x-input title="输入金额" type="text" placeholder="输入充值金额， 最小1元" keyboard="number" :value.sync="pay" @on-change="change"></x-input>
      </group>
      <p v-if="msg" class="msg">{{msg}}</p>
      <x-button type="primary" @click="payNext()">下一步</x-button>
    </popup>
  </div>
</template>

<script>
import { Group, Cell, XButton, XInput, Popup} from 'vux/src/components'
import Api from 'resource/index'
export default{
  components: {
    Group, Cell, XButton, XInput, Popup
  },
  ready () {
    this.moneylog();
  },
  data () {
    return {
      money: 0,
      list: [],
      pay: '',
      showPopupPro: false,
      msg: ''
    }
  },
  methods: {
    moneylog: function() {
      let context = this;
      Api.moneylog().then((response) => {
        let data = JSON.parse(response.body);
        context.money = data.Result.money;
        context.list = data.Result.list;
      })
    },
    recharge: function() {
      this.showPopupPro = true;
    },
    change: function(val) {
      if (val < 1) {
        this.msg = '充值金额必须大于1元'
      } else {
        this.msg = ''
      }
    },
    payNext: function() {
      if (this.pay >= 1) {
        window.location = '/wxpay/index/?type=1&money='+this.pay
      }
    }
  }
}

</script>

<style lang="less">
.wallet-wrap{
  .user-money_header {
    height: 200px;
    font-size: 16px;
    background: #43AC43;
    color: #fff;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    .balance-money{
      display: block;
      font-size: 60px;
      font-weight: 200;
    }
  }
  .weui_cells{
    margin-top: 0;
  }
  .color-red{
    color:red;
  }
  .color-green{
    color:#43AC43;
  }
  .record-title{
    line-height: 1.8rem;
    font-size: 1.5rem;
    background: #fff;
    padding: 10px 5px;
  }
  .record-btn{
    position: fixed;
    bottom: 0;
  }
  .popup-item{
    margin-bottom: 15px;
  }
  .msg{
    line-height: 1.5rem;
    font-size: 1.2rem;
    padding-left: 10px;
  }
}
</style>
