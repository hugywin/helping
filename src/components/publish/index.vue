<template>
<div class="publish-wrap">
  <x-header :left-options="{showBack: false}">
    <a>发布预售</a>
  </x-header>

  <div class="publish">
    <group>
      <x-input title="众筹金额" keyboard="number" placeholder="填写筹款目标金额"></x-input>
    </group>
    <group>
      <cell title="截止日期" :value="" >
        <span slot="value">{{rangeDate|getDisAllDate range 'yyyy-MM-dd hh:mm'}}<b>共{{range}}天</b></span>
      </cell>
      <cell title="选择众筹时间" primary="content">
        <range :value.sync="range" :min="3" :max="30"></range>
      </cell>
    </group>
    <group>
      <switch :value.sync="addrFlag" title="需要支持者的收件地址"></switch>
      <x-input title="运费" placeholder="填写运费金额或包邮"></x-input>
      <x-input title="发货时间" placeholder="填写发货时间"></x-input>
    </group>
    <group>
      <cell title="项目标签" :value="tags1+' '+tags2+' '+tags3" is-link @click="showPopup=true"></cell>
    </group>
    <popup :show.sync="showPopup" class="checker-popup">
      <div style="padding:10px 10px 40px 10px;">
        <p style="padding: 5px 5px 5px 2px;color:#888;">产品属性</p>
        <checker
        :value.sync="tags1"
        default-item-class="demo4-item"
        selected-item-class="demo4-item-selected"
        disabled-item-class="demo4-item-disabled"
        @on-item-click="showPopup=false">
          <checker-item value="养生">养生</checker-item>
          <checker-item value="水果生鲜">水果生鲜</checker-item>
          <checker-item value="粮油">粮油</checker-item>
          <checker-item value="私厨">私厨</checker-item>
          <checker-item value="文创">文创</checker-item>
          <checker-item value="健康健康">粮油</checker-item>
        </checker>
        <p style="padding: 5px 5px 5px 2px;color:#888;">生产工艺</p>
        <checker
        :value.sync="tags2"
        default-item-class="demo4-item"
        selected-item-class="demo4-item-selected"
        disabled-item-class="demo4-item-disabled"
        @on-item-click="showPopup=false">
          <checker-item value="天赐美食">天赐美食</checker-item>
          <checker-item value="良心之作">良心之作</checker-item>
          <checker-item value="匠人制造">匠人制造</checker-item>
        </checker>
        <p style="padding: 5px 5px 5px 2px;color:#888;">商家标签</p>
        <checker
        :value.sync="tags3"
        default-item-class="demo4-item"
        selected-item-class="demo4-item-selected"
        disabled-item-class="demo4-item-disabled"
        @on-item-click="showPopup=false">
          <checker-item value="原产地">原产地</checker-item>
          <checker-item value="自主创业">自主创业</checker-item>
          <checker-item value="助农">助农</checker-item>
          <checker-item value="优选良品">优选良品</checker-item>
        </checker>
      </div>
      <p style="padding: 5px 5px 5px 2px;color:#888;">每项选择一种</p>
    </popup>
    <group>
      <x-input  placeholder="填写你要预售什么产品？"></x-input>
      <x-textarea placeholder="详情介绍下你的产品内容" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
    </group>
    <div class="updata-img">
      <ul class="row">
        <li v-if="true" class="updata-list col-3"><img src="http://thumb.qschou.com/temp/2016/10/26/72604920b6d980afb8235f24f30aceb4267fb967h5.jpg@!thumb.png" /></li>
        <li class="col-3 updata-list">
          <div class="updata-icon">
            <i class="icon-plus"></i>
            上传图片</br>(最多8张)
          </div>
          <div class="updata-file" style="opacity:1">
            <form id="uploadForm" action="" method="post" enctype="multipart/form-data">
              <input type="file" value="" name="imgFile" />
              <input type="button" style="left:120px; opacity:1" value="上传" @click="upload()" >
            </form>
          </div>
        </li>
      </ul>
      <div class="help-block">
        请上传清晰的产品图片，建议图片尺寸大于 <strong>750 x 400</strong>
      </div>
    </div>
    <group title="设置回报方式">
      <cell title="支持1元" is-link inline-desc="支持1元">
        <img class="pro-min-pic" slot="icon" src="http://thumb.qschou.com/temp/2016/10/26/72604920b6d980afb8235f24f30aceb4267fb967h5.jpg@!thumb.png">
      </cell>
    </group>
    <div class="add-pro-wrap" @click="showPopupPro=true">
      <i class="fa fa-plus"></i>添加回报方式
    </div>
    <popup :show.sync="showPopupPro" class="checker-popup">
      <div style="padding:10px 10px 40px 10px;">
        <group>
          <x-input title="支持金额" keyboard="number" placeholder="填写支持金额(元)"></x-input>
          <x-textarea placeholder="填写回报具体内容" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
        </group>
        <div class="popup-pro-pic">
          <div class="updata-icon">
            <i class="icon-plus"></i>
            上传图片
          </div>
          <div class="updata-file">
            <input type="file" />
          </div>
          <img v-if="false" :src="" />
        </div>
        <group>
          <x-input title="限制数量" keyboard="number" placeholder="默认不限制(份)"></x-input>
        </group>
        <x-button class="popup-btn" type="primary">添加保存</x-button>
      </div>
    </popup>
    <x-button class="publish-btn" type="primary">发布项目</x-button>
</div>
</template>

<script>
import { XHeader, Group, XInput, Cell, Range, Checker, CheckerItem, Popup, Switch, XTextarea, XButton} from 'vux/src/components'
import upload from 'resource/upload'
export default{
  components: {
    XHeader, Group, XInput, Cell, Range, Checker, CheckerItem, Popup, Switch, XTextarea, XButton
  },
  ready () {
    this.rangeDate = new Date();
  },
  data () {
    return {
      range: 3,
      rangeDate: 0,
      addrFlag: true,
      tags1: '',
      tags2: '',
      tags3: '',
      showPopup: false,
      showPopupPro: false
    }
  },
  methods: {
    upload: function () {
      let ajax = new upload({
        id: 'uploadFrom',
        url: '/api/common/upload',
        method: 'POST',
        timeout: 5000,
        onTimeout: function(event){
      		alert('It is timeout.');
      	},
      	onProgress: function(loaded, total){
          console.log(loaded+"---"+total)
      	},
      	onComplete: function(result){
      		console.log(result);
      	}
      })
      ajax.request();
    }
  }
}
</script>

<style lang="less">
.publish-wrap{
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    line-height: 18px;
    border-radius: 15px;
  }
  .demo4-item-selected {
    background-color: #43ac43;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
  .updata-img{
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 15px;
    background: #fff;
    padding: 8px 5px 3px;
    .updata-list{
      position: relative;
      img{
        margin: 0 2%;
        vertical-align: top;
        width: 96%;

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
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 2;
        input{
          opacity: 0;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }
      }
    }
    .help-block{
      line-height: 1.4rem;
      font-size: .7rem;
      text-indent: 3px;
      color:#999;
      padding-top: 8px;
    }
  }
  .pro-min-pic{
    width: 50px;
    margin-right: 10px;
  }
  .add-pro-wrap{
    padding: 12px;
    display: block;
    color: #43AC43;
    font-size: 16px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .publish-btn{
    margin-top: 15px;
  }
  .popup-pro-pic{
    position: relative;
    img{
      margin: 0 2%;
      vertical-align: top;
      width: 96%;

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
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;
      input{
        opacity: 0;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
    }
  }
  .popup-btn{
    margin-top: 10px;
  }
}

</style>
