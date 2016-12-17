<template>
  <div class="express-info">
    <x-scroll :iheight="iheight">
      <div v-if="publishInfo">
        <group>
          <cell title="收件人">{{publishInfo.exp_user}}</cell>
          <cell title="联系方式">{{publishInfo.exp_mobile}}</cell>
          <cell title="收件地址">{{publishInfo.exp_address}}</cell>
        </group>
        <divider class="divider">物流信息</divider>
        <p v-if="!publishInfo.exp_nu" class="divider-con">无需物流发货</p>
        <timeline v-else>
    			<timeline-item v-for="item in express" track-by="$index">
    				<h4 class="recent">{{item.context}}</h4>
    				<p class="recent">{{item.time}}</p>
    			</timeline-item>
    		</timeline>
      </div>
    </x-scroll>
  </div>
</template>

<script>
import {Group, Timeline, TimelineItem, Cell, Divider} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
export default {
  ready () {
    this.id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.fetchDes();
  },
  components: {
    XScroll, Group, Timeline, TimelineItem, Cell, Divider
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight,
      express: [],
      publishInfo: null
    }
  },
  methods: {
    // 获取快递信息
    fetchExpress: function (params) {
      Api.expressstatus(params)
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
        if (data.Result.exp_nu) {
          this.fetchExpress({
            nu: data.Result.exp_nu,
            type: data.Result.exp_t
          });
        } else {
          this.$dispatch('loading', false);
        }
      })
    }
  }
}
</script>

<style lang="less">
.express-info {
  .weui_cell_bd{
    min-width: 72px!important;
  }
  .vux-timeline-item-content {
    padding: 0 0 1.5rem 1.6rem!important;
    color: #888!important;
  }
  .weui_cells{
    margin-top: 0!important;
  }
  .divider{
    margin-top: 15px;
  }
  .divider-con{
    padding: 20px 0;
    text-align: center;
    line-height: 3rem;
    font-size: 1.8rem;
  }
}
</style>
