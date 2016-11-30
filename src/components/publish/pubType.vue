<template>
  <scroller lock-x scrollbar-y :height="iheight+'px'"  :prevent-default="false"  v-ref:scroller>
    <group title="项目发起方">
      <cell title="个人名义发起" link="/" inline-desc='需上传个人手持身份证照片'></cell>
      <cell title="个体工商/企业名义发起" link="/" inline-desc='需上传营业执照'></cell>
    </group>
  </scroller>
</template>

<script>
import {Group, Cell, Scroller} from 'vux/src/components'
export default {
  ready () {
    this.iheight = window.screen.height - 65;
  },
  components: {
    Group, Cell, Scroller
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
</style>
