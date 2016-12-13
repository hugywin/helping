<template>
  <x-scroll :iheight="iheight">
    <div class="pub-type">
      <divider>项目发起方</divider>
      <button-tab class="pub-type-tab">
        <button-tab-item selected @click="onSelected(0)">个人名义发起</button-tab-item>
        <button-tab-item @click="onSelected(1)">商品订阅</button-tab-item>
      </button-tab>
      <div v-if="true">
        <group class="input-info">
          <x-input :value.sync="name" title="真实姓名" placeholder="请填写真实姓名" v-ref:input></x-input>
          <x-input :value.sync="cradId" title="身份证号" placeholder="请填写身份证号" v-ref:input></x-input>
          <x-input :value.sync="phone" title="联系电话" placeholder="请填写联系电话" v-ref:input></x-input>
        </group>
        <div class="updata-wrap">
          <p class="title">手持身份证照片</p>
          <div class="updata-icon">
            <i class="icon-plus"></i>
            上传手持身份证照片
          </div>
          <div class="updata-file" style="opacity:1">
            <form id="uploadForm" action="" method="post" enctype="multipart/form-data">
              <input type="file" v-model="proImg" name="imgFile" />
            </form>
          </div>
          <div class="crad-img" v-if="false">
            <img src="" />
          </div>
          <div class="help-block">身份证上的所有信息必须清晰可见，必须能看清身份证号</div>
        </div>
        <div class="updata-wrap" v-if="select">
          <p class="title">手持营业照照片</p>
          <div class="updata-icon">
            <i class="icon-plus"></i>
            上传手持营业照照片
          </div>
          <div class="updata-file" style="opacity:1">
            <form id="uploadForm" action="" method="post" enctype="multipart/form-data">
              <input type="file" v-model="proImg" name="imgFile" />
            </form>
          </div>
          <div class="crad-img" v-if="false">
            <img src="" />
          </div>
          <div class="help-block">营业执照上的所有信息必须清晰可见</div>
        </div>
        <x-button type="primary">提交验证</x-button>
      </div>
    </div>
  </x-scroll>
</template>

<script>
import {Divider, ButtonTab, ButtonTabItem, Group, Cell, XInput, XButton} from 'vux/src/components'
import XScroll from '../public/scroll'
export default {
  components: {
    Divider, ButtonTab, ButtonTabItem, Group, Cell, XInput, XButton, XScroll
  },
  data () {
    return {
      select: 0,
      proImg: '',
      iheight: document.documentElement.clientHeight
    }
  },
  methods: {
    onSelected (i) {
      this.select = i;
    }
  }
}
</script>

<style lang="less">
.pub-type{
  padding-bottom: 20px;
  .pub-type-tab{
    margin: 0 0 20px;
  }
  .updata-icon{
    line-height: 1.2;
    background: #fff;
    border: 1px dashed #D2D1D6;
    border-radius: 6px;
    color: #D2D1D6;
    padding: 10px 5px;
    font-size: 12px;
    text-align: center;
    display: block;
    width: 40%;
    .icon-plus{
      background: url(../../assets/img/plus.png) no-repeat;
      background-size: 32px;
      width: 32px;
      height: 32px;
      display: block;
      margin: 5px auto;
    }
  }
  .updata-file{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
    z-index: 2;
    width: 40%;
    input{
      opacity: 0;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  .crad-img{
    width: 132px;
    height: 78px;
    img{
      width: 100%;
    }
  }
  .crad-img-demo{
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    z-index: 4;
    width: 40%;
    img{
      width: 100%;
    }
  }
  .updata-wrap{
    margin-bottom:20px;
    position: relative;
    background: #fff;
    padding: 0 10px 10px;
    .title{
      line-height: 30px;
      font-size: 14px;
      text-indent: 10px;
    }
  }
  .help-block{
    font-size: 11px;
    color: #999;
    padding: 10px 0px 10px;
  }
  .input-info{
    margin-bottom: 20px;
  }
}
</style>
