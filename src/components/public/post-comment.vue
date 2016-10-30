<template>
  <confirm :show.sync="show"  title="发表评论"  @on-confirm="onConfirm()">
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
      relation_id: ''
    }
  },

  methods: {
    onConfirm: function() {
      if (this.comment != '') {
        let type = !this.replyId ? 1 : 2;
        let content = this;
        Api.comment({
          'type': type,
          'relation_id': this.relation_id,
          'reply_id': this.replyId,
          'content': this.content
        }).then((response) => {
          content.$dispatch('get-comment');
        })
      }
    }
  }
}
</script>
