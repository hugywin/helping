<template>
  <div class="doc">{{{doc}}}</div>
</template>

<script>
import product from '../../product'
export default {
  ready () {
    let type = this.$route.params.type,
        id = this.$route.params.id;
    this.doc = product[id][type].content;
  },
  data () {
    return{
      doc: ''
    }
  }
}
</script>

<style lang="less">
  .doc-block{
    margin: 1.75rem 0;
    padding: 0 .75rem;
    color: #6d6d72;
    h2{
      display: block;
      font-size: 2em;
      -webkit-margin-before: 0.83em;
      -webkit-margin-after: 0.83em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
      font-weight: bold;
    }
    p{
      margin: 1em 0;
    }
  }
</style>
