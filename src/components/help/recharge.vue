<template>
  <div class="recharge-wrap">
    <x-header :left-options="{showBack: false}">
      <a>选择金额</a>
    </x-header>
    <div class="recharge-con">
      <p>充值金额</p>
      <span style="color:red;font-size:.6rem">*</span>
      <span style="font-size:.6rem;color:#9B9B9B;">为保持充足余额建议充值30以上</span>
    </div>
    <div class="money-list">
      <checker :value.sync="money" default-item-class="money-item" selected-item-class="money-item-selected">
        <checker-item v-for="i in [10, 30, 50, 100, 200]" :value="i">￥{{i}}</checker-item>
      </checker>
    </div>

    <div class="othen">
      <input v-model="othenMoney" @focus="focus" placeholder="其他金额，10-2000元" />
    </div>
    <div class="btn-sub">
      <x-button type="primary" v-link="{path: ''}">下一步</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Checker, CheckerItem} from 'vux/src/components'
export default {
  components: {
    XHeader,
    XButton,
    Checker,
    CheckerItem
  },
  data () {
    return {
      money: ''
    }
  },
  methods: {
    focus: function() {
      this.money = '';
    }
  }
}
</script>

<style lang="less">
.recharge-wrap{
  .recharge-con{
    margin-left: 10px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    margin-top: 15px;
    p{
      font-size: 1.6rem;
      line-height: 2.3rem;
      font-weight: bold;
    }
  }
  .money-list{
    background: #fff;
  }
  .money-item {
    width: 60px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
  }
  .money-item-selected {
    background: #ffffff url(../../assets/img/active.png) no-repeat right bottom;
    border-color: #ff4a00;
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
  }
  .money-list{
    padding: 10px;
  }
  .othen{
    margin-top: 15px;
    background: #fff;
    height: 3rem;
    padding-left: 10px;
    input{
      line-height: 3rem;
      width:100%;
      border:0;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
