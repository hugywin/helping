<template>
  <div class="rate-wrap">
    <x-header :left-options="{showBack: false}">
      <a>评价</a>
    </x-header>
    <group>
       <cell title="商品评价">
         <span>{{proRater}}分</span>
         <rater :value.sync="proRater" slot="value" disabled></rater>
       </cell>
    </group>
    <group>
      <cell title="物流评价">
        <span>{{LogisticsRater}}分</span>
        <rater :value.sync="LogisticsRater" slot="value" disabled></rater>
      </cell>
    </group>
    <ul class="eva-tag row">
      <li v-for="item in tagList" @click="selectRate(item)" :class="{'active': item.id == typeId}" track-by="$index">{{item.val}}</li>
    </ul>
  </div>
  <panel :list="commentsList" class="comments-list"></panel>
</template>

<script>
import {XHeader, Rater, Group, Cell, Panel} from 'vux/src/components'
export default {
  components: {
    Rater, XHeader, Group, Cell, Panel
  },
  data () {
    return {
      proRater: 5,
      LogisticsRater: 5,
      tagList: [{val: '口感佳6', id: 1}, {val: '口感佳6', id: 2}, {val: '口感佳6', id: 3}, {val: '口感佳6', id: 4}],
      typeId: 1,
      commentsList: [{
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '小溪<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '4.3分</br>收到了～很快么～吃着味道也很好吃～准备多买点<p>2016-10-18 07:09:57</p>'
      }, {
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '小溪<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '4.3分</br>收到了～很快么～吃着味道也很好吃～准备多买点<p>2016-10-18 07:09:57</p>'
      }, {
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '小溪<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '4.3分</br>收到了～很快么～吃着味道也很好吃～准备多买点<p>2016-10-18 07:09:57</p>'
      }]
    }
  },
  methods: {
    selectRate: function() {

    }
  }
}
</script>

<style lang="less">
.rate-wrap{
  .weui_cells{
    margin-top:0;
  }
  .eva-tag{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    padding: 10px 10px 5px;
    margin-bottom: 15px;
    li{
      float: left;
      height: 20px;
      line-height: 20px;
      margin-right: 8px;
      margin-bottom: 10px;
      padding: 0 12px;
      list-style: none;
      border-radius: 20px;
      background: #f3f3f3;
    }
    .active{
      background: #43ac43;
      color:#fff;
    }
  }
}
</style>
