<template>
  <div class="raiselist-wrap">
    <x-header :left-options="{showBack: true}">
      <a>众筹订单列表</a>
    </x-header>
    <a class="raise-list" v-link="{path: '/order/raise/'+item.id}" v-for="item in orderList">
      <div class="card-header">
        <img :src="item.src" alt="" class="user-img">
        <span class="user-name">{{item.name}}</span>
        <span class="user-state text-success">{{item.status}}</span>
      </div>
      <panel :list="item.list" :type="type"></panel>
      <!-- <div class="status-btn row">
        <span>再来一单</span>
      </div> -->
    </a>
  </div>
</template>

<script>
import {XHeader, Panel} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    this.$dispatch('dialog', true);
    this.fetch();
  },
  components: {
    XHeader, Panel
  },
  data () {
    return {
      type: '1',
      orderList: []
      // orderList: [{
      //   id: 1,
      //   src: 'http://thumb.qschou.com/files/qschou.com/avatar/475/95a28d4a-b9c2-44da-abab-6dee7fd731cb/1475830602209d99e17c927d0471apc.jpg@!large.png',
      //   name: '李怡鹏',
      //   status: '交易完成',
      //   list: [{
      //     src: 'http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png',
      //     title: '39元',
      //     desc: '大学生村官向你推荐-来自【中国板栗之乡】的“镇安大板栗”'
      //   }]
      // }]
    }
  },
  methods: {
    fetch: function() {
      let context = this;
      Api.projectMyList().then((response) => {
        let data = JSON.parse(response.body);
        this.$dispatch('dialog', false);
        data.List.forEach((item, idx) => {
          context.orderList.push({
            id: item.id,
            src: '',
            name: item.exp_user,
            status: item.status,
            list: [{
              src: item.report.pic,
              desc: item.report.content,
              title: 'wu'
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
  .raise-list{
    display: block;
    margin-top: 15px;
    background: #fff;
    .weui_panel{
      margin-top: 0;
    }
    .card-header{
      border-bottom: 1px solid rgba(0,0,0,.1);
      padding: 10px;
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
        margin: 4px 0 0 7px;
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
      padding: .6rem;
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
