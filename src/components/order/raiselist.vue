<template>
  <div class="raiselist-wrap">
    <x-header :left-options="{showBack: false}">
      <a>众筹订单列表</a>
    </x-header>
    <group class="raise-list" v-link="{path: '/order/raise/'+item.id}" v-for="item in orderList">
      <div class="card-header">
        <span class="user-name">{{item.time}}</span>
        <div class="status-btn row">
          <span>{{item.status}}</span>
        </div>
      </div>
      <panel :list="item.list" :type="type"></panel>
    </group>
  </div>
</template>

<script>
import {XHeader, Panel} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    XHeader, Panel
  },
  data () {
    return {
      type: '1',
      orderList: []
    }
  },
  methods: {
    fetch: function() {
      let context = this;
      Api.projectMyList().then((response) => {
        let data = JSON.parse(response.body).Result;
        this.$dispatch('loading', false);
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
      })
    }
  }
}
</script>


<style lang="less">
.raiselist-wrap{
  margin-bottom: 20px;
  .raise-list{
    display: block;
    margin-top: 15px;
    background: #fff;
    .weui_panel{
      margin-top: 0;
    }
    .card-header{
      border-bottom: 1px solid rgba(0,0,0,.1);
      text-align: right;
      position: relative;
      .user-img{
        width: 21px;
        height: 21px;
        border-radius: 50px;
        float: left;
      }
      .user-name{
        color: #4A4A4A;
        float: left;
        margin: 8px 0 0 7px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
        display: block;
        text-align: start;
      }
      .user-state{
        position: relative;
        top: -2px;
        font-size: 1rem;
        margin: 4px 0 0;
        text-align: right;
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
}
</style>
