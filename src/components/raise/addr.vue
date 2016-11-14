<template>
  <div class="add-addr">
    <x-header :left-options="{showBack: false}">
      <a>地址管理</a>
    </x-header>
    <group>
      <cell v-for="item in addrList" @click="selectAddr(item)" is-link :title="item.name+' ('+item.mobile+')'"
      :inline-desc="item.province+'-'+item.city+'-'+item.district"></cell>
    </group>

    <!-- <div class="weui_cells vux-no-group-title">
      <div v-for="item in addrList">
        <div class="weui_cell vux-tap-active" @click="selectAddr(item.id)">
          <div class="weui_cell_bd weui_cell_primary">
            <p>{{item.name}} ({{item.mobile}})</p>
            <span class="vux-label-desc">{{item.province}}-{{item.city}}-{{item.district}}</span>
          </div>
        </div>
        <div class="cell-btn row">
          <a class="change" @click="change(item)">修改</a>
        </div>
      </div>
    </div> -->

    <!-- <group class="problems-blonk" v-if="!ischange">
      <cell title="新增地址" @click="openClk">
        <span slot="after-title" :class="{'fa-angle-double-down': !isopen, 'fa-angle-double-up': isopen}" class="fa demo-icon"></span>
      </cell>
    </group> -->
    <div class="btn-sub">
      <x-button @click="openClk" type="primary">新增地址</x-button>
    </div>
    <popup :show.sync="isopen" class="checker-popup">
      <div class="add-wrap">
        <group>
          <address title="地址:" :value.sync="city" raw-value :list="addressData"></address>
        </group>
        <group>
          <x-textarea placeholder="填写详细地址，例如街道名称，楼层和门牌号等信息" :value.sync="address" :show-counter="false" :rows="3" v-ref:autosize></x-textarea>
        </group>
        <group>
          <x-input title="姓名" name="username" placeholder="请输入姓名" :value.sync="name" is-type="china-name"></x-input>
        </group>
        <group>
          <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" :value.sync="mobile" keyboard="number"></x-input>
        </group>
        <group>
          <switch title="设为默认地址" :value="is_default"></switch>
        </group>
        <x-button class="pay-btn" @click="addAddr()" type="primary">添加</x-button>
      </div>
    </popup>
  </div>
</template>

<script>
import {XHeader, Group, Cell, XButton, Address, XTextarea, XInput, Switch, AddressChinaData, Popup} from 'vux/src/components'
import util from '../../utils/dateUtil'
import v2n from '../../utils/value2name'
import n2v from '../../utils/name2value'
import Api from 'resource/index'
export default{
  ready () {
    this.type = this.$route.params.type;
    this.$dispatch('loading', true);
    this.addressList();
  },
  components: {
    XHeader, Group, Cell, XButton, Address, XTextarea, XInput, Switch, Popup
  },
  data () {
    return {
      addressData: AddressChinaData,
      isopen: false,
      ischange: false,
      city: [],
      address: '',
      name: '',
      mobile: '',
      is_default: false,
      id: '',
      addrList: [],
      type: ''
    }
  },
  methods: {
    // 显示新增地址
    openClk: function() {
      this.isopen = true;
    },
    addressList: function() {
      Api.addressLiss().then((response) => {
        let data = JSON.parse(response.body);
        this.addrList = data.Result;
        this.$dispatch('loading', false);
      })
    },
    // 提交地址
    addAddr: function() {
      let flag = this.valid();
      let citys = v2n(this.city, AddressChinaData).split(' ');
      if (flag) {
        Api.address({
          id: this.id,
          name: this.name,
          mobile: this.mobile,
          province: citys[0],
          city: citys[1],
          district: citys[2],
          address: this.address,
          is_default: this.is_default
        }).then((response) => {
          this.$dispatch('toast');
          this.clear();
          this.addressList();
        })
      }
    },
    // 修改
    change: function(item) {
      this.id = item.id
      this.name = item.name;
      this.mobile = item.mobile;
      this.city = n2v([item.province, item.city, item.district], AddressChinaData).split(' ');
      this.address = item.address;
      this.is_default = item.is_default;
      this.isopen = true;
    },
    // id换文字
    conversion: function() {

    },
    // 选择
    selectAddr: function(item) {
      if (this.type == 'order') {
        util.setCookie('addr', item.id);
        history.go(-1);
      } else if (this.type == 'user') {
        this.change(item);
      }

    },
    // 验证
    valid: function() {
      let reg = /^(13|15|18|14|17)\d{9}$/;
      if (!this.city.length) {
        this.$dispatch('dialog', '请选择地址信息');
        return false
      }
      if (this.address == '') {
        this.$dispatch('dialog', '请填写详细地址');
        return false
      }
      if (this.name == '') {
        this.$dispatch('dialog', '请填写姓名');
        return false
      }
      if (!reg.test(this.mobile)) {
        this.$dispatch('dialog', '请填写正确的电话号码');
        return false
      }
      return true
    },
    // 清除
    clear: function() {
      this.city = [];
      this.address = '';
      this.name = '';
      this.mobile = '';
      this.is_default = false;
      this.id = '';
      this.isopen = false;
      this.ischange = false;
    }
  }
}
</script>

<style lang="less">
.add-addr{
  .demo-icon{
    float: right;
  }
  .pay-btn{
    margin-top: 15px;
  }
  .cell-btn{
    a{
      width: 100%;
      height: 2rem;
      color: #fff;
      line-height: 2rem;
      text-align: center;
      float: left;
      font-size: 1.4rem;
    }
    .change{
      background: #04be02;
    }
    .del{
      background: #ef4f4f;
    }
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    left:0;
    line-height: 30px;
    width: 100%;
  }
}
</style>
