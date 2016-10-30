<template>
  <x-header :left-options="{showBack: false}">
    <a>绑定手机</a>
  </x-header>
  <group>
    <x-input title="手机号码" :value.sync="mobile" name="mobile" :validation.sync="validMobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
  </group>
  <group class="weui_cells_form">
    <x-input title="发送验证码" :min="4" :max="4" :value.sync="vcode" :validation.sync="validCode" class="weui_vcode">
      <x-button slot="right" @click="sendcode()" type="primary">发送验证码</x-button>
    </x-input>
  </group>
  <p class="tips">接收短信大约需要({{second}})s</p>
  <x-button @click="submit()" type="primary">提交</x-button>
</template>

<script>
import { XInput, Group, XButton, Cell, XHeader} from 'vux/src/components'
import Api from 'resource/index'
export default{
  components: {
    XInput, Group, XButton, Cell, XHeader
  },
  data () {
    return {
      second: 60,
      mobile: '',
      vcode: '',
      validMobile: false,
      validCode: false
    }
  },
  methods: {
    // 提交绑定
    submit: function() {
      if (this.validMobile && this.validCode) {
        Api.bind({mobile: this.mobile, smsCode: this.vcode}).then((response)=> {
          let data = JSON.parse(response.body);
          if (data.Code == 0) {
            router.go('/');
          }
        })
      }
    },
    // 获取验证码
    sendcode: function() {
      if (this.validMobile) {
        let context = this;
        Api.sendcode({'mobile': this.mobile}).then((response) => {
          let time = setInterval(function() {
            if (context.second == 0) {
              clearInterval(time);
              context.second = 60;
            } else {
              --context.second;
            }
          }, 1000)
        })
      }
    }
  }
}

</script>

<style lang="less">
.tips{
  padding: 4rem 0;
  line-height: 1.6rem;
  font-size: 1.2rem;
  color:#666;
  text-align: center;
}
</style>
