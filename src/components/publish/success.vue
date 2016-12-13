<template>
  <x-scroll :iheight="iheight">
    <div class="pub-success">
      <p>恭喜，你的项目创建成功！</p>
      <x-button class="btn" plain>查看项目</x-button>
      <x-button class="btn" plain>项目验证</x-button>
    </div>
  </x-scroll>
</template>

<script>
import {XButton} from 'vux/src/components'
import XScroll from '../public/scroll'
export default {
  components: {
    XButton, XScroll
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="less">
.pub-success {
  p{
    color: #13CE66;
    font-size: 2.2rem;
    line-height: 5rem;
    text-align: center;
    padding: 70px 0 50px;
    background: url(../../../static/sucess.png) center top no-repeat;
    background-size: 100px;
    margin-top: 20px;
  }
  .btn{
    width: 70%;
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
