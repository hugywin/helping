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
    <!-- <group>
      <cell v-for="item in addrList" v-link="{path: '/raise/addr/order'}" :title="item.name+' ('+item.mobile+')'"  :inline-desc="item.province+'-'+item.city+'-'+item.district">
        <i class="fa fa-map-marker" solt="icon"></i>
      </cell>
    </group> -->
    <card :footer="{title:'全部收货地址',link:'/raise/addr/order'}">
      <cell slot="content" v-for="item in addrList" :title="item.name+' ('+item.mobile+')'"  :inline-desc="item.province+'-'+item.city+'-'+item.district">
        <i class="fa fa-map-marker" solt="icon"></i>
      </cell>
   </card>
    <div class="addr-wrap" v-link="{path: '/raise/addr/order'}" v-if="addrList.length == 0">
      <i class="fa fa-paper-plane-o"></i>
      <p>尚无地址点击添加</br></p>
    </div>
    <div class="bot-order row">
      <span class="pay-money">合计:<b>{{money}}</b>元</span>
      <x-button class="pay-btn" type="primary" @click="submit()">我要支持</x-button>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Cell, XButton, XNumber, Card} from 'vux/src/components'
import Api from 'resource/index'
import utils from '../../utils/dateUtil'
export default {
  components: {
    XHeader, Group, Cell, XButton, XNumber, Card
  },
  data () {
    return {
      panelList: [],
      addrList: [],
      number: 1,
      active: 0,
      money: 0,
      id: ''
    }
  },
  ready () {
    let id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.addressList();
    this.fetch(id);
  },
  methods: {
    // 选择产品
    selectPro: function(idx) {
      this.active = idx;
      this.money = this.panelList[idx].money * this.number;
      this.id = this.panelList[idx].id;
    },
    // 获取众筹详情
    fetch: function(id) {
      let context = this;
      Api.projectInfo({id: id}).then((response) => {
        let data = JSON.parse(response.body);
        context.$dispatch('loading', false);
        context.raise = data.Result;
        context.panel(data.Result.reports);
        context.selectPro(0);
      })
    },
    addressList: function() {
      Api.addressLiss().then((response) => {
        let data = JSON.parse(response.body);
        this.addressCookies(data.Result);
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
          money: item.money,
          id: item.id
        })
      })
      this.panelList = reports;
    },
    // change
    change: function() {
      this.money = (parseFloat(this.panelList[this.active].money) * this.number).toFixed(1);
    },
    // 获取cookies 地址
    addressCookies: function(list) {
      let info = list[0],
          addrs = utils.getCookie('addr');
      if (addrs) {
        list.forEach((item, idx) => {
          if(addrs == item.id) {
            info = item
          }
        })
      }
      this.addrList.push(info);
    },
    // 提交
    submit: function() {
      if (this.addrList.length > 0) {
        window.location.href = '/wxpay/index/?type=3&par_id='+this.id+'&ot_str='+this.number+','+this.addrList[0].id
      } else {
        this.$dispatch('dialog', '请添加收货地址')
      }
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
  .vux-label-desc{
    font-size: 12px;
  }
}
</style>
