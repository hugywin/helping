<template>
  <div class="add-wrap">
    <x-header :left-options="{showBack: false}">
      <a>添加被保障人</a>
    </x-header>
    <div class="list-block list_block_common">
      <ul>
        <li class="item-content">
          <div class="item-inner">
            <div>
              <div class="item-title" style="font-size:1.5rem;"><b>填写被保障人信息</b></div>
              <div class="item-subtitle" style="font-size: 1rem;color:#9b9b9b;margin-top:.4rem;"><span style="color:red">*</span> 请放心！我们会严格遵守法律法规，保护你的个人信息和隐私</div>
        </li>
      </ul>
      <group>
        <x-input title="真实姓名" name="username" placeholder="请输入姓名" v-model="name"></x-input>
      </group>
      <group>
        <x-input title="身份证号" placeholder="仅用于申请保障，严格保密" v-model="idcar"></x-input>
      </group>
      <group title="关系">
        <checker :value.sync="relation" default-item-class="money-item" selected-item-class="money-item-selected">
          <checker-item v-for="item in relationList" :value="item.val" class="relation-item">{{item.key}}</checker-item>
        </checker>
      </group>
    </div>
    <div class="btn-sub">
      <x-button type="primary" @click="submit()" v-link="{path: ''}">添加</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Checker, CheckerItem, XInput} from 'vux/src/components'
import Api from 'resource/index'
export default {
  components: {
    XHeader, XButton, Group, Checker, CheckerItem, XInput
  },
  data () {
    return {
      relationList: [{'key': '本人', 'val': 1}, {'key': '爱人', 'val': 2}, {'key': '儿子', 'val': 3}, {'key': '女儿', 'val': 4}, {'key': '父亲', 'val': 5}, {'key': '母亲', 'val': 6}, {'key': '其他', 'val': 7}],
      relation: 1,
      name: '',
      idcar: ''
    }
  },
  methods: {
    submit: function() {
      let reg = /^(\d{18}|\d{15}|\d{14}[xX]|\d{17}[xX])$/;
      if (this.name != '' && this.idcar != '' && reg.test(this.idcar)) {
        Api.contact({
          'name': this.name,
          'idcar': this.idcar,
          'relation': this.relation
        }).then((response) => {
          history.back(-1)
        })
      }
    }
  }
}
</script>

<style lang="less">
.add-wrap{
  .list_block_common{
    color: #333;
    font-size: .8rem;
    background: #fff;
    .item-content{
      box-sizing: border-box;
      padding-left: .75rem;
      min-height: 2.2rem;
      display: flex;
    }
    .item-inner{
      padding-right: .75rem;
      position: relative;
      width: 100%;
      padding-top: .4rem;
      padding-bottom: .35rem;
      min-height: 2.2rem;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
    }
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
  }
  .money-item {
    width: 60px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
    margin-bottom: 5px;
  }
  .money-item-selected {
    background: #ffffff url(../../assets/img/active.png) no-repeat right bottom;
    border-color: #ff4a00;
  }
  .relation-item{
    margin: 5px 0 5px 5px;
  }
}
</style>
