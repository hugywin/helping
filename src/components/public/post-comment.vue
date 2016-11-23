<template>
  <confirm :show.sync="show" confirm-text="提交" cancel-text="取消"  title="发表评论" @on-hide="onHide"  @on-confirm="onConfirm()">
    <x-textarea :max="30" placeholder="填写评论内容" :value.sync="content"></x-textarea>
  </confirm>
</template>

<script>
import {Confirm, XTextarea} from 'vux/src/components'
import Api from 'resource/index'
export default{
  ready () {
    this.relation_id = this.$route.params.id;
  },
  components: {
    Confirm, XTextarea
  },
  props: ['show', 'replyId'],
  data () {
    return {
      relation_id: '',
      content: ''
    }
  },

  methods: {
    onConfirm: function() {
      if (this.comment != '') {
        let type = !this.replyId ? 1 : 2;
        Api.comment({
          'type': type,
          'relation_id': this.relation_id,
          'reply_id': this.replyId,
          'content': this.content
        }).then((response) => {
          this.$dispatch('get-comment');
        })
      }
    },
    onHide: function() {
      this.content = '';
      this.show = false;
    }
  }
}
</script>

<style lang="less">
.weui_dialog_bd{
  padding: 0;
}
.weui_dialog_ft{
  margin-top: 0;
}
</style>
