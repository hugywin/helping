<template>
  <div class="join-wrap">
    <x-header :left-options="{showBack: true}">
      <a>加入计划</a>
    </x-header>
    <div class="item-inner">
      <div class="item-title-row">
        <div class="item-title">选择被保障人</div>
      </div>
      <div class="item-subtitle" style="font-size: 0.6rem;color:#9b9b9b;"><span style="color:red">*&nbsp;</span> 计划加入年龄18-50周岁</div>
      <div class="item-subtitle" style="font-size: 0.6rem;color:#9b9b9b;"><span style="color:red">*&nbsp;</span> 请放心！我们会严格遵守法律法规，保护你的个人信息和隐私</div>
    </div>
    <div class="personnel-list">
      <group>
        <radio :options="personnel" :value.sync="radioVal"></radio>
      </group>
    </div>
    <div class="add-personnel" v-link="{path: '/help/addp'}">
      <i class="fa fa-plus-square"></i>
      添加保障人
    </div>
    <group>
      <cell title="加入计划" :value="1111"></cell>
      <cell title="被保障人真实姓名" :value="1111"></cell>
      <cell title="被保障人身份证号" :value="1227363663782828"></cell>
    </group>
    <div class="content-padded">
      <p>
        <input type="checkbox" checked="">
        <label for="ck_1"><span style="font-size:14px;color:#666;vertical-align:middle;">&nbsp;被保障人加入时身体健康，无重大疾病史</span></label> <br>
        <input type="checkbox" checked="">
        <label for="ck_2"><span style="font-size:14px;color:#666;vertical-align:middle;">&nbsp;我已经阅读并同意</span><a class="font-blue" href="/product/doc?id=1&amp;num=0&amp;back=加入计划">《 抗癌互助医疗（中青版）计划条款》</a></label>
      </p>
    </div>
    <div class="btn-sub">
      <x-button type="primary" v-link="{path: '/help/rechargeInfo'}">下一步</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Radio, Group, Cell} from 'vux/src/components'
import Api from 'resource/index'
export default {
  ready() {
    this.getContact();
  },
  components: {
    XHeader,
    XButton,
    Radio,
    Group,
    Cell
  },
  data () {
    return {
      personnel: [],
      radioVal: ''
    }
  },
  methods: {
    getContact: function() {
      let context = this;
      Api.contactList().then((response) => {
        let data = JSON.parse(response.body);
        if (data.Result.length) {
          this.deal(data.Result);
          this.radioVal = data.Result[0].id;
        }
      })
    },
    deal: function(list) {
      let context = this;
      list.forEach((item, idx) => {
        this.personnel.push({
          'key': item.id,
          'value': item.name+'-'+item.relation
        })
      })
    }
  }
}
</script>

<style lang="less">
.item-inner{
  display: block;
  padding-top: .5rem;
  padding-bottom: .45rem;
  padding-left: .75rem;
  min-height: 2.2rem;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: .75rem;
  position: relative;
  width: 100%;
  margin-top: 10px;
  background: #fff;
  .item-title{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
  }
}
.personnel-list{
  .weui_cells{
    margin-top: 0;
  }
}
.add-personnel{
  padding-left: .75rem;
  min-height: 3.2rem;
  font-size: 2rem;
  color: #666;
  text-align: center;
  padding-top: 8px;
  background: #fff;
  .fa{
    color:#FF9A14
  }
}
.content-padded{
  line-height:2.4rem;
  margin-top: 15px;
  input{
    vertical-align: middle;
    margin-left: 5px;
  }
  .font-blue{
    color:#49A1FD;
  }
}
.btn-sub{
  position: fixed;
  bottom: 0;
  line-height: 30px;
  width: 100%;
}
</style>
