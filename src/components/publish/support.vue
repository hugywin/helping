<template>
  <div class="support-wrap">
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01" v-if="raise">
        <div class="vux-1px-l vux-1px-r">
          <span>{{raise.money}}元</span>
          <br/>
          目标金额
        </div>
        <div class="vux-1px-r">
          <span>{{raise.join_money}}元</span>
          <br/>
          已筹金额
        </div>
        <div>
          <span>{{raise.join_count}}次</span>
          <br/>
          支持次数
        </div>
      </div>
    </card>
    <sticky>
      <tab :line-width=1>
        <tab-item :selected="selected === item.val" v-for="item in tabList" @click="onSelect(item.val)">{{item.label}}</tab-item>
      </tab>
    </sticky>
    <x-scroll :iheight="iheight">
      <div class="no-data" v-if="total == 0">
        暂无数据
      </div>
      <panel :list="order" type="1"></panel>
    </x-scroll>
  </div>
</template>

<script>
import {XButton, Card, Sticky, Tab, TabItem, Panel} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
const list = [{
  label: '未发货',
  val: 1
}, {
  label: '已发货',
  val: 2
}, {
  label: '已收货',
  val: 3
}, {
  label: '退款中',
  val: 4
}, {
  label: '已退款',
  val: 5
}];
export default {
  ready () {
    this.id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.fetchInfo();
    this.fetchList();
  },
  components: {
    XButton, XScroll, Card, Sticky, Tab, TabItem, Panel
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight - 102,
      tabList: list,
      selected: 1,
      raise: null,
      order: null,
      total: 0
    }
  },
  methods: {
    // 获取众筹详情
    fetchInfo: function () {
      Api.projectInfo({id: this.id})
      .then((response) => {
        let data = JSON.parse(response.body);
        this.raise = data.Result;
      })
    },
    // 支持订单
    fetchList: function () {
      Api.ownerJoin({id: this.id, status: this.selected})
      .then((response) => {
        this.$dispatch('loading', false);
        let data = JSON.parse(response.body);
        this.total = data.Result.Total;
        this.process(data.Result.List)
      })
    },
    // 选择订单状态
    onSelect: function (val) {
      this.selected = val;
      this.$dispatch('loading', true);
      this.fetchList();
    },
    // 数据处理
    process (data) {
      let array = [];
      data.forEach((item) => {
        array.push({
          title: item.exp_user,
          desc: item.time,
          right: '+'+item.money * item.quantity+'元',
          src: item.user.face,
          url: '/publish/support/'+item.id
        })
      })
      this.order = array
    }
  }
}
</script>

<style lang="less">
.support-wrap {
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
  .no-data{
    padding: 30px;
    text-align: center;
    font-size: 1.7rem;
  }
  .weui_media_bd{
    position: relative;
    .weui_media_desc_right{
      position: absolute;
      right: 15px;
      top: 40%;
      line-height: 1.6rem;
      font-size: 1.4rem;
      color: #13CE66;
    }
  }
}
</style>
