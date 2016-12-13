<template>
  <div class="express-wrap">
    <x-scroll :iheight="iheight">
      <sticky>
        <tab :line-width=1>
          <tab-item :selected="needexp === 'YES'" @click="needexp = 'YES'">物流发货</tab-item>
          <tab-item :selected="needexp === 'NO'" @click="needexp = 'NO'">无需物流</tab-item>
        </tab>
      </sticky>
      <group v-if="needexp === 'YES'">
        <selector placeholder="请选择物流公司" :value.sync="type" title="物流公司" :options="expressList"></selector>
        <x-input title="运单号" :value.sync="number" placeholder="请输入运单号" ></x-input>
      </group>
      <x-button type="primary" class="btn" @click="onSubmit()" >确认发货</x-button>
    </x-scroll>
  </div>
</template>

<script>
import {XButton, Sticky, Tab, TabItem, Group, Selector, XInput} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
export default {
  ready () {
    this.id = this.$route.params.id;
    this.$dispatch('loading', true);
    this.fetch();
  },
  components: {
    XButton, XScroll, Sticky, Tab, TabItem, Group, Selector, XInput
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight - 102,
      expressList: [],
      type: '',
      needexp: 'YES',
      number: ''
    }
  },
  methods: {
    // 获取众筹详情
    fetch: function () {
      Api.express()
      .then((response) => {
        let data = JSON.parse(response.body);
        this.$dispatch('loading', false);
        this.process(data.Result);
      })
    },
    // 数据处理
    process: function (data) {
      let array = [];
      for (let key in data) {
        array.push({
          key: key,
          value: data[key]
        })
      }
      this.expressList = array;
    },
    // 提交
    onSubmit: function () {
      if (this.needexp == 'YES') {
        if (!this.type) {
          this.$dispatch('toast', '选择物流公司');
          return;
        }
        if (!this.number) {
          this.$dispatch('toast', '填写运单号');
          return;
        }
      }
      Api.joinsendexpress({
        id: this.id,
        type: this.type,
        needexp: this.needexp,
        number: this.number
      }).then((response) => {
        let data = JSON.parse(response.body);
        if (data.Code != 0) {
          this.$dispatch('toast', '接口异常');
        } else {
          this.$dispatch('toast', '订单状态更新成功');
          this.$router.go(-1);
        }
      })
    }
  }
}
</script>

<style lang="less">
.express-wrap {
  .btn{
    width: 90%;
    margin-top: 20px;
  }
}
</style>
