<template>
  <div class="raiseinfo-wrap">
    <panel :list="proList" :type="type" ></panel>
    <group>
      <cell title="支持金额"><span solt="value">1.00元</span></cell>
      <cell title="实际支付"><span solt="value">1.00元</span></cell>
    </group>
    <group>
      <cell title="订单状态"><span solt="value" class="color-red">交易完成</span></cell>
      <cell title="胡国云(13611216850)" inline-desc="北京市海淀区"><i class="fa fa-map-marker" solt="icon"></i></cell>
    </group>
    <group>
      <ul class="pay-info">
        <li class="row">
          <label class="col-3">交易单号</label>
          <div class="text col-9">20161022226727146847202401</div>
        </li>
        <li class="row">
          <label class="col-3">支付方式</label>
          <div class="text col-9">微信支付</div>
        </li>
        <li class="row">
          <label class="col-3">订单数量</label>
          <div class="color-red text col-9">1</div>
        </li>
        <li class="row">
          <label class="col-3">产品回报</label>
          <div class="text col-9">【支持1元】只为创业精神点赞，【支持后不发货】让我们的梦想汇聚成一股洪流，释放我们的洪荒之力！</div>
        </li>
      </ul>
    </group>
    <div class="pay-btn">
      <a v-link="/">支付</a>
    </div>
  </div>
</template>

<script>
import {Group, Cell, Panel} from 'vux/src/components'
export default{
  components: {
    Group, Cell, Panel
  },
  data () {
    return {
      proList: [{
        src: 'http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png',
        title: '【80后创业把家乡放在网上卖】陕西手工擀面皮嘹咋了！',
        url: '/'
      }]
    }
  }
}
</script>


<style lang="less">
.raiseinfo-wrap{
  .pay-info{
    padding: 10px 0;
    li{
      line-height: 3rem;
      font-size: 1.6rem;
    }
    label{
      text-align: center;
    }
  }
  .pay-btn{
    position: fixed;
    height: 3.2rem;
    line-height: 3.2rem;
    background: #43AC43;
    color:#fff;
    font-size: 1.8rem;
    text-align: center;
    bottom: 0;
    width: 100%;
    cursor: pointer;
  }
  .color-red{
    color: red;
  }
}
</style>
