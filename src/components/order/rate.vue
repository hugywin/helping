<template>
  <div class="rate-wrap">
    <x-header :left-options="{showBack: false}">
      <a>订单评价</a>
    </x-header>
    <group>
       <cell title="商品评价">
         <span>{{proRater}}分</span>
         <rater :value.sync="proRater" slot="value"></rater>
       </cell>
    </group>
    <group>
      <cell title="物流评价">
        <span>{{LogisticsRater}}分</span>
        <rater :value.sync="LogisticsRater" slot="value"></rater>
      </cell>
    </group>
    <group title="写评价">
      <x-textarea :max="200" placeholder="请填写详细信息" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
    <div class="btn-sub">
      <x-button type="primary">提交</x-button>
    </div>
  </div>
</template>

<script>
import {XHeader, Rater, Group, Cell, XTextarea, XButton} from 'vux/src/components'
export default {
  components: {
    Rater, XHeader, Group, Cell, XTextarea, XButton
  },
  data () {
    return {
      proRater: 5,
      LogisticsRater: 5,
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.rate-wrap{
  .weui_cells{
    margin-top:0;
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
  }
}
</style>
