<template>
  <x-header :left-options="{showBack: true}">
    <a>添加评论</a>
  </x-header>
  <div class="product-msg">
    <x-textarea :max="50" placeholder="评论"></x-textarea>
  </div>
  <x-button type="primary" class="btn" @click="submit">提交</x-button>
</template>

<script>
import { XHeader,  XButton, XTextarea} from 'vux/src/components'
export default {
  components: {
    XHeader,
    XButton,
    XTextarea
  },
  data () {

  },
  props: [],
  methods: {
    submit: function() {

    }
  }
}
</script>

<style lang="less">
.product-msg{
  margin: 15px 0;
}
</style>
