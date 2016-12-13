<template>
  <x-scroll :iheight="iheight">
    <div class="doc">{{{doc}}}</div>
  </x-scroll>
</template>

<script>
import Api from 'resource/index'
import XScroll from '../public/scroll'
export default {
  ready () {
    this.$dispatch('loading', true);
    this.type = this.$route.params.type;
    this.id = this.$route.params.id;
    this.getMutual(this.type);
  },
  components: {
    XScroll
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight,
      type: '',
      id: '',
      doc: null
    }
  },
  methods: {
    getMutual: function(id) {
      Api.mutual({code: id}).then((response)=> {
        let data = JSON.parse(response.body);
        if (data.Code == 0) {
          this.doc = data.Result.info.item[this.id].content;
        }
        this.$dispatch('loading', false);
      })
    }
  }
}
</script>

<style lang="less">
  .doc{
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
