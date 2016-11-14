<template>
  <div class="user-wrap">
    <div class="head">
      <img :src="facePath" />
      <span>{{nickName}}</br>{{mobile}}</span>
    </div>
    <group>
        <cell title="我的钱包" link="/user/wallet" >
          <i slot="icon" class="fa fa-jpy"></i>
        </cell>
        <cell title="我的众筹" link="/order/raise" >
          <i slot="icon" class="fa fa-hand-rock-o"></i>
        </cell>
        <cell title="我的互助" link="/order/help" >
          <i slot="icon" class="fa fa-heart"></i>
        </cell>
        <cell title="收货地址管理" link="/raise/addr/user" >
          <i slot="icon" class="fa fa-heart"></i>
        </cell>
        <cell title="关于我们" link="/" >
          <i slot="icon" class="fa fa-users"></i>
        </cell>
      </group>
    </div>
  <tab-bot></tab-bot>
</template>

<script>
import TabBot from '../public/tab-bot'
import Api from 'resource/index'
import {Group, Cell} from 'vux/src/components'
export default{
  ready () {
    this.loinginfo();
  },
  components: {
    TabBot, Group, Cell
  },
  data () {
    return {
      nickName: '',
      mobile: '',
      facePath: ''
    }
  },
  methods: {
    loinginfo: function() {
      let context = this;
      Api.loinginfo().then((response) => {
        let data = JSON.parse(response.body);
        context.nickName = data.Result.nick_name;
        context.mobile = data.Result.mobile;
        context.facePath = data.Result.face_path;
      })
    }
  }
}

</script>

<style lang="less">
  .user-wrap{
    .head{
      background: #43AC43;
      color: #fff;
      padding: 20px 0;
      img{
        width: 50px;
        height:50px;
        border-radius: 50px;
        border: 2px solid rgba(255,255,255,.7);
        display: block;
        margin: 0 auto 10px;
      }
      span{
        display: block;
        line-height: 2.2rem;
        font-size: 1.3rem;
        text-align: center;
      }
    }
    .fa{
      color: #43AC43;
      margin-right: 5px;
    }
  }
</style>
