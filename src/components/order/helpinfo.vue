<template>
  <x-header :left-options="{showBack: true}">
    <a>{{title}}</a>
  </x-header>
  <div class="helpinfo-wrap">
    <group>
      <cell link="/" title="互助计划："><span solt="value">{{title}}</span></cell>
    </group>
    <ul class="info">
      <li><label>保障额度：</label>30W</li>
      <li><label>余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额：</label>3元</li>
    </ul>

    <group>
      <cell title="被保障人："><span solt="value">{{title}}</span></cell>
    </group>
    <ul class="info">
      <li><label>身份证号：</label>10178879128798916</li>
      <li><label>加入日期：</label>2016-10-10 12:34</li>
      <li><label>保障状态：</label>观察期还剩160天</li>
    </ul>

    <group>
      <cell title="会员公约" link="/"></cell>
      <cell :title="'<<'+title+'计划规则>>'" link="/"></cell>
    </group>


  </div>
</template>

<script>
import {Group, Cell, XHeader} from 'vux/src/components'
export default{
  components: {
    Group, Cell, XHeader
  },
  data () {
    return{
      title: '抗癌互助医疗（爸妈版）'
    }
  }
}
</script>


<style lang="less">
.helpinfo-wrap{
  .info{
    background: #fff;
    padding: 10px;
    li{
      line-height: 2.6rem;
      font-size: 1.7rem;
      label{
        margin-right: 8px;
      }
    }
  }
}
</style>
