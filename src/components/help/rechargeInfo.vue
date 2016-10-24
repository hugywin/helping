<template>
  <div class="recharge-info">
    <x-header :left-options="{showBack: true}">
      <a>确认充值</a>
    </x-header>
    <div class="info">
      <p class="title">保障人信息</p>
      <group>
        <cell title="加入计划" :value="1111"></cell>
        <cell title="被保障人真实姓名" :value="1111"></cell>
        <cell title="被保障人身份证号" :value="1227363663782828"></cell>
        <cell title="充值金额" :value="30"></cell>
      </group>
    </div>
    <div class="pay-select">
      <p class="title">支付方式</p>
      <checker :value.sync="payType" default-item-class="money-item" selected-item-class="money-item-selected">
        <checker-item v-for="i in ['微信', '支付宝']" :value="i">{{i}}</checker-item>
      </checker>
    </div>
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

  },
  methods: {

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
}
</style>
