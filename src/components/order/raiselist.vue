<template>
  <div class="raiselist-wrap" v-if="isLoading">
    <scroller lock-x scrollbar-y :height="iheight+'px'"  :prevent-default="false"  v-ref:scroller>
      <div class="scroll-wrap">
        <x-header :left-options="{showBack: false}">
          <a>众筹订单列表</a>
        </x-header>
        <group class="raise-list" v-link="{path: '/order/raise/'+item.id}" v-for="item in orderList">
          <div class="card-header">
            <span class="user-time">下单时间:{{item.time}}</span>
          </div>
          <panel :list="item.list" :type="type"></panel>
        </group>
      </div>
    </scroller>
  </div>
</template>

<script>
import {XHeader, Panel, Group, Scroller} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    this.iheight = window.screen.height;
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    XHeader, Panel, Group, Scroller
  },
  data () {
    return {
      type: '1',
      orderList: [],
      isLoading: false,
      iheight: 0
    }
  },
  methods: {
    fetch: function() {
      let context = this;
      Api.projectMyList().then((response) => {
        let data = JSON.parse(response.body).Result;
        this.process(data);
        this.$dispatch('loading', false);
        this.isLoading = true;
      })
    },
    process: function(data) {
      let context = this;
      data.List.forEach((item, idx) => {
        context.orderList.push({
          id: item.id,
          time: item.time,
          status: item.status,
          list: [{
            src: 'http://crowd.iblue.cc/'+item.report.pic,
            desc: item.report.content,
            title: item.project.title,
            url: '/order/raise/'+item.id
          }]
        })
      })
    }
  }
}
</script>


<style lang="less">
.raiselist-wrap{
  .raise-list{
    .weui_panel{
      margin-top: 0;
    }
    .card-header{
      text-align: right;
      position: relative;
      .user-time{
        font-size: 1rem;
        padding-right: 5px;
      }
    }
    .status-btn{
      height: 1.8rem;
      padding: .2rem;
      span{
        float: right;
        height: 1.8rem;
        line-height: 1.8rem;
        padding: 0 1rem;
        color:#fff;
        border-radius: 10px;
        background: #43AC43;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .weui_media_appmsg{
    align-items: flex-start;
  }
}
</style>
