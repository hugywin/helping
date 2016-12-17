<template>
  <x-scroll :iheight="iheight">
    <div class="pub-type">
      <divider>项目发起方</divider>
      <sticky>
        <tab :line-width=1>
          <tab-item :selected="select === 1" @click="select = 1">个人名义发起</tab-item>
          <tab-item :selected="select === 2" @click="select = 2">企业名义发起</tab-item>
        </tab>
      </sticky>
      <div>
        <group class="input-info">
          <x-input :value.sync="name" title="真实姓名" placeholder="请填写真实姓名"></x-input>
          <x-input :value.sync="cradId" title="身份证号" placeholder="请填写身份证号"></x-input>
          <x-input :value.sync="phone" title="联系电话" placeholder="请填写联系电话"></x-input>
        </group>
        <div class="updata-wrap">
          <p class="title">手持身份证照片</p>
          <div class="updata-icon" v-if="!card">
            <i class="icon-plus"></i>
            上传手持身份证照片
          </div>
          <div class="updata-file" style="opacity:1" v-if="!card">
            <form id="uploadCard" action="" method="post" enctype="multipart/form-data">
              <input type="file" name="imgFile" @change="uploadCard()" />
            </form>
          </div>
          <div class="crad-img" v-if="card">
            <img :src="card" />
          </div>
          <div class="help-block">身份证上的所有信息必须清晰可见，必须能看清身份证号</div>
        </div>
        <div class="updata-wrap" v-if="select == 2">
          <p class="title">手持营业照照片</p>
          <div class="updata-icon" v-if="!file">
            <i class="icon-plus"></i>
            上传手持营业照照片
          </div>
          <div class="updata-file" style="opacity:1" v-if="!file">
            <form id="uploadFile" action="" method="post" enctype="multipart/form-data">
              <input type="file" name="imgFile" @change="uploadFile()"/>
            </form>
          </div>
          <div class="crad-img" v-if="file">
            <img :src="file" />
          </div>
          <div class="help-block">营业执照上的所有信息必须清晰可见</div>
        </div>
        <x-button type="primary" @click="onSubmit()">提交验证</x-button>
      </div>
    </div>
  </x-scroll>
</template>

<script>
import {Divider, Sticky, Tab, TabItem, Group, Cell, XInput, XButton} from 'vux/src/components'
import XScroll from '../public/scroll'
import upload from 'resource/upload'
import Api from 'resource/index'
export default {
  ready () {
    this.id = this.$route.params.id;
  },
  components: {
    Divider, Sticky, Tab, TabItem, Group, Cell, XInput, XButton, XScroll
  },
  data () {
    return {
      select: 1,
      id: '',
      card: '',
      file: '',
      name: '',
      cradId: '',
      phone: '',
      iheight: document.documentElement.clientHeight
    }
  },
  methods: {
    // 上传身份证
    uploadCard () {
      let context = this;
      this.upload('uploadCard', function(result) {
        if (result.Code == 0) {
          context.card = result.Result.path;
        } else {
          context.$dispatch('toast', '上传失败！');
        }
      })
    },
    // 上传营业执照
    uploadFile () {
      let context = this;
      this.upload('uploadFile', function(result) {
        if (result.Code == 0) {
          context.file = result.Result.path;
        } else {
          context.$dispatch('toast', '上传失败！');
        }
      })
    },
    // 上传
    upload (id, complete) {
      new upload({
        id: id,
        url: '/api/common/upload',
        method: 'POST',
      	onComplete: function(result){
          result = JSON.parse(result);
          complete(result);
      	}
      }).request()
    },
    // 提交
    onSubmit () {
      if (this.name == '') {
        this.$dispatch('toast', '请填写真实姓名');
        return;
      }
      if (this.cradId == '') {
        this.$dispatch('toast', '请填写身份证号');
        return;
      }
      if (this.phone == '') {
        this.$dispatch('toast', '请填写联系电话');
        return;
      }
      if (this.card == '') {
        this.$dispatch('toast', '请上传手持身份证照片');
        return;
      }
      if (this.file == '' && this.select == 2) {
        this.$dispatch('toast', '请上传手持营业照照片');
        return;
      }
      Api.ownerauth({
        project_id: this.id,
        type: this.select,
        real_name: this.name,
        mobile: this.phone,
        id_car: this.cradId,
        id_car_pic: this.card,
        license_pic: this.file
      }).then((response) => {
        let data = JSON.parse(response.body);
        if (data.Code != 0) {
          this.$dispatch('toast', '接口异常');
          return;
        }
        window.location.href = '/#!/publish/order/list';
      })
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
      height: 100%;
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
