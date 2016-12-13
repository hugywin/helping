<template>
  <div class="express-info">
    <x-scroll :iheight="iheight">
      <group>
        <cell title="收件人"><span solt="value">{{publishInfo.exp_user}}</span></cell>
        <cell title="联系方式"><span solt="value">{{publishInfo.exp_mobile}}</span></cell>
        <cell title="收件地址"><span solt="value">{{publishInfo.exp_address}}</span></cell>
      </group>
      <timeline>
  			<timeline-item v-for="item in express">
  				<h4 class="recent">{{item.context}}</h4>
  				<p class="recent">{{item.time}}</p>
  			</timeline-item>
  		</timeline>
    </x-scroll>
  </div>
</template>

<script>
import {Group, Timeline, TimelineItem, Cell} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
export default {
  ready () {
    this.id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.fetchExpress();
    this.fetchDes();
  },
  components: {
    XScroll, Group, Timeline, TimelineItem, Cell
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight - 102,
      express: [],
      publishInfo: null
    }
  },
  methods: {
    // 获取快递信息
    fetchExpress: function () {
      Api.expressstatus()
      .then((response) => {
        let data = JSON.parse(response.body);
        this.$dispatch('loading', false);
        this.express = data.Result;
      })
    },
    // 获取众筹订单详情
    fetchDes: function () {
      Api.joindesc({id: this.id})
      .then((response) => {
        let data = JSON.parse(response.body);
        this.publishInfo = data.Result;
      })
    }
  }
}
</script>

<style lang="less">
.express-wrap {
  .btn{
    width: 90%;
    margin-top: 20px;
  }
}
</style>
