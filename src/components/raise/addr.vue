<template>
  <div class="add-addr">
    <x-header :left-options="{showBack: false}">
      <a>地址管理</a>
    </x-header>
    <group class="problems-blonk">
      <cell title="新增地址" @click="openClk">
        <span slot="after-title" :class="{'fa-angle-double-down': !isopen, 'fa-angle-double-up': isopen}" class="fa demo-icon"></span>
      </cell>
    </group>
    <div class="add-wrap" v-if="isopen">
      <group>
        <address title="地址:" :value.sync="city" raw-value :list="addressData"></address>
      </group>
      <group>
        <x-textarea placeholder="填写详细地址，例如街道名称，楼层和门牌号等信息" :show-counter="false" :rows="3" v-ref:autosize></x-textarea>
      </group>
      <group>
        <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>
      <group>
        <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      </group>
      <group>
        <x-input title="邮政编码" type="text" placeholder="请输入邮政编码" :value="" :min="6" :max="6"></x-input>
      </group>
      <group>
        <switch title="设为默认地址" :value="false"></switch>
      </group>
      <x-button class="pay-btn" type="primary">添加</x-button>
    </div>
    <group>
      <cell @click="" title="胡国云" link="/raise/order/1" inline-desc='北京是北京北京北京'></cell>
    </group>
  </div>
</template>

<script>
import {XHeader, Group, Cell, XButton, Address, XTextarea, XInput, Switch, AddressChinaData} from 'vux/src/components'
export default{
  components: {
    XHeader, Group, Cell, XButton, Address, XTextarea, XInput, Switch
  },
  data () {
    return {
      addressData: AddressChinaData,
      isopen: false,
      city: []
    }
  },
  methods: {
    openClk: function() {
      this.isopen = !this.isopen;
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
}
</style>
