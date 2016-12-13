<template>
  <div id="j-xscroll" :style="{height: iheight+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  ready () {
    this.xscroll = new xScroll({
      el: "#j-xscroll",
    });
  },
  props: ['iheight'],
  data () {
    return {
      xscroll: null
    }
  }
}
</script>

<style lang="less">
#j-xscroll{
  position: relative;
  width: 100%;
}
</style>
