<template>
  <div class="helplist-wrap">
    <x-header :left-options="{showBack: true}">
      <a>互助订单列表</a>
    </x-header>
    <div class="help-list">
      <h2 class="title">出行互助保障卡</h2>
      <p class="txt">状态：保障中</p>
      <ul class="info">
        <li><label>真实姓名：</label>胡国云</li>
        <li><label>保障额度：</label>胡国云</li>
      </ul>
      <a class="link">查看详情</a>
    </div>
    <div class="help-list">
      <h2 class="title">出行互助保障卡</h2>
      <p class="txt">状态：保障中</p>
      <ul class="info">
        <li><label>真实姓名：</label>胡国云</li>
        <li><label>保障额度：</label>胡国云</li>
      </ul>
      <a class="link" href="/#!/order/help/1">查看详情</a>
    </div>
  </div>
</template>

<script>
import {XHeader} from 'vux/src/components'
export default{
  components: {
    XHeader
  }
}
</script>


<style lang="less">
.helplist-wrap{
  .help-list{
    background: #fff;
    margin: 20px 10px 0;
    border-radius: 5px;
    .title{
      line-height: 2.2rem;
      font-size: 1.5rem;
      padding-left: 10px;
    }
    .txt{
      color:#999;
      line-height: 1.4rem;
      font-size: 1rem;
      padding-bottom: 5px;
      margin-left: 10px;
      border-bottom: 1px solid #eee;
    }
    .info{
      padding: 10px;
      li{
        line-height: 2.6rem;
        font-size: 1.5rem;
        label{
          margin-right: 8px;
        }
      }
    }
    .link{
      line-height: 3rem;
      font-size: 1.7rem;
      display: block;
      border-top: 1px solid #ddd;
      text-align: center;
      background: #FF9A14;
      color:#fff;
      border-radius: 5px;
    }
  }
}
</style>
