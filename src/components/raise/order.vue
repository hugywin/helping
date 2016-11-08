<template>
  <div class="order-wrap">
    <x-header :left-options="{showBack: true}">
      <a>选择回报</a>
    </x-header>
    <div class="weui_panel weui_panel_access pro-list">
      <div class="weui_panel_bd">
        <a class="weui_media_box weui_media_appmsg" href="javascript:void(0);" @click="selectPro($index)" v-for="item in panelList" :class="{'active': active == $index}">
          <div class="weui_media_hd">
            <img class="weui_media_appmsg_thumb" :src="item.src">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title title">{{{item.title}}}</h4>
            <p class="weui_media_desc">{{item.desc}}</p>
          </div>
        </a>
      </div>
    </div>
    <group>
      <x-number name="listen" title="数量" :value.sync="number" :min="1" @on-change="change()"></x-number>
    </group>
    <group>
      <cell @click="" title="胡国云" inline-desc='北京是北京北京北京'></cell>
    </group>
    <div class="addr-wrap" v-link="{path: '/raise/addr'}">
      <i class="fa fa-paper-plane-o"></i>
      <p>尚无地址点击添加</br></p>
    </div>
    <div class="bot-order row">
      <span class="pay-money">合计:<b>{{money}}</b>元</span>
      <x-button class="pay-btn" type="primary">我要支持</x-button>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, XButton, XNumber} from 'vux/src/components'
import Api from 'resource/index'
export default {
  components: {
    XHeader, Group, Cell, XButton, XNumber
  },
  data () {
    return {
      panelList: [],
      number: 1,
      active: 0,
      money: 0
    }
  },
  ready () {
    let id = this.$route.params.id;
    this.fetch(id);
  },
  methods: {
    // 选择产品
    selectPro: function(idx) {
      this.active = idx;
      this.money = this.panelList[idx].money * this.number;
    },
    // 获取众筹详情
    fetch: function(id) {
      let context = this;
      Api.projectInfo({id: id}).then((response) => {
        let data = JSON.parse(response.body);
        context.raise = data.Result;
        context.panel(data.Result.reports);
        this.selectPro(0);
      })
    },
    // 处理回报数据
    panel: function(data) {
      let reports = [];
      data.forEach((item, idx) => {
        reports.push({
          src: 'http://crowd.iblue.cc/'+item.pic,
          desc: item.desc,
          title: '<b class="red-color">'+item.money+'</b>元<span>剩余'+item.quantity+'份</span>',
          money: item.money
        })
      })
      this.panelList = reports;
    },
    // change
    change: function() {
      this.money = parseInt(this.panelList[this.active].money) * parseInt(this.number);
    }
  }
}
</script>

<style lang="less">
.order-wrap{
  .pro-list{
    .active{
      border: 1px solid #43AC43;
      padding: 14px;
    }
    .red-color{
      color:#F25B4B;
    }
    .title{
      span{
        font-size: 1.2rem;
        color:#999;
      }
    }
  }
  .pay-list{
    margin-top: 15px;
    background: #fff;
    li{
      padding: 5px 10px;
      line-height: 32px;
      font-size: 1.6rem;
      border-bottom: 1px solid #D9D9D9;
      position: relative;
      i{
        width: 32px;
        height: 32px;
        display: inline-block;
        margin-right: 15px;
        vertical-align: top;
        top: 3px;
        position: relative;
        background: url(../../assets/img/pay.png) no-repeat;
        background-size: 32px;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .wxzf{
        background-position: 0 -64px;
      }
      .zfb{
        background-position: 0 -96px;
      }
      .fa{
        position: absolute;
        right: 10px;
        top:5px;
        color:#43AC43;
        line-height: 32px;
        font-size: 20px;
      }
    }
  }
  .addr-wrap{
    margin: 15px 0;
    background: #fff;
    padding: 5px 10px;
    border-bottom: 1px solid #D9D9D9;
    .fa{
      font-size: 2rem;
      line-height: 3.2rem;
    }
    p{
      display: inline-block;
      margin-left: 10px;

    }
  }
  .bot-order{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #D9D9D9;
    padding: 5px 0;
    .pay-money{
      float: left;
      width: 40%;
      margin: 0 5%;
      line-height: 3.4rem;
      font-size: 1.7rem;
      b{
        color:#F25B4B;
      }
    }
    .pay-btn{
      float: right;
      width: 40%;
      margin: 0 5%;
    }
  }
}
</style>
