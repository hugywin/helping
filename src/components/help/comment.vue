<template>
  <div class="comment-tit">
    <p class="title">用户评论</p>
    <a class="leave" @click="postComment()">我要留言</a>
  </div>
  <div style="padding: 15px; background-color: #fff; margin-bottom:35px;" v-if="total">
    <ul class="discuss_list">
      <li class="discuss_item" v-for="comment in list">

        <div class="user_info">
          <strong class="nickname">{{comment.nick_name}}</strong>
          <img class="avatar" :src="comment.face">
        </div>

        <div class="discuss_message">
          <div class="discuss_message_content">{{comment.content}}</div>
        </div>
        <p class="discuss_extra_info">{{comment.created}}</p>

        <div class="reply_result" v-if="comment.reply && comment.reply.length">
          <div class="nickname">{{comment.reply.nick_name}}</div>
          <div class="discuss_message">
            <div class="discuss_message_content">{{comment.reply.content}}</div>
          </div>
        </div>

      </li>
    </ul>
    <Divider class="more" @click="moreComment">更多评论({{total}})</Divider>
  </div>
  <post-comment :show="show" :reply-id="replyId"></post-comment>
  <no-content v-if="!total"></no-content>
</template>

<script>
import { Divider } from 'vux/src/components'
import Api from 'resource/index'
import NoContent from '../public/no-content'
import PostComment from '../public/post-comment'
export default {
  ready () {
    this.params.relation_id = this.$route.params.id;
    this.getComment();
  },
  components: {
    Divider, NoContent, PostComment
  },
  data () {
    return {
      params: {
        relation_id: '',
        type: 1,
        page: 1,
        size: 10
      },
      list: [],
      total: 0,
      show: false,
      replyId: 0
    }
  },
  methods: {
    // 更多评论
    moreComment: function() {

    },

    //获取评论
    getComment: function() {
      let context = this;
      Api.commentList(this.params).then((response) => {
        let data = JSON.parse(response.body);
        context.total = data.Result.Total;
        context.list = data.Result.List;
      })
    },

    // 留言
    postComment: function() {
      this.show = true;
    }

  },

  events: {
    'get-comment': function() {
      this.params.page = 1;
      this.getComment();
    }
  }
}
</script>

<style lang="less">
.comment-tit{
  padding-left: .75rem;
  height: 3rem;
  padding-right: .75rem;
  line-height: 3rem;
  position: relative;
  padding-top: .4rem;
  padding-bottom: .35rem;
  overflow: hidden;
  font-size: 1.6rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 15px;
  .title{
    color: #333;
    font-size: 2rem;
    font-weight: bold;
  }
  .leave{
    position: absolute;
    right: 30px;
    font-size: 1.5rem;
    top: 0.8rem;
    color: #49A1FD;
  }
}
.discuss_btn_wrp {
  display: none;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: right
}
.btn_discuss {
  padding-left: 1.5em;
  padding-right: 1.5em
}
.discuss_list {
  margin-top: -5px;
  padding-bottom: 20px;
  font-size: 16px
}
.discuss_item {
  position: relative;
  padding-left: 45px;
  margin-top: 15px;
}
.discuss_item:after {
  content: "\200B";
  display: block;
  height: 0;
  clear: both
}
.discuss_item .user_info {
  min-height: 20px;
  overflow: hidden
}
.discuss_item .nickname {
  display: block;
  font-weight: 400;
  font-style: normal;
  color: #727272;
  width: 9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal
}
.discuss_item .avatar {
  position: absolute;
  top: 0;
  left: 0;
  top: 3px;
  width: 35px;
  height: 35px;
  background-color: #ccc;
  vertical-align: top;
  margin-top: 0;
  border-radius: 2px;
}
.discuss_item .discuss_message {
  color: #3e3e3e;
  line-height: 1.5
}
.discuss_item .discuss_extra_info {
  color: #8c8c8c;
  font-size: 12px
}
.discuss_item .discuss_extra_info a {
  margin-left: .5em
}
.discuss_item .discuss_status {
  color: #ff7a21;
  white-space: nowrap
}
.discuss_item .discuss_status i {
  font-style: normal;
  margin-right: 2px
}
.discuss_item .discuss_opr {
  float: right
}
.discuss_item .discuss_opr .meta_praise {
  display: inline-block;
  text-align: right;
  padding-top: 5px;
  margin-top: -5px
}
.discuss_item .discuss_del {
  margin-left: .5em
}
.discuss_icon_tips {
  margin-bottom: 20px
}
.discuss_icon_tips img {
  vertical-align: middle;
  margin-left: 3px;
  margin-top: -4px
}
.discuss_icon_tips .icon_edit {
  width: 12px
}
.discuss_icon_tips .icon_access {
  width: 13px
}
.reply_result {
  position: relative;
  margin-top: .5em;
  padding-top: .5em;
  padding-left: .4em
}
.reply_result:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #dadada;
  transform-origin: 0 0;
  transform: scaleY(0.5)
}
.reply_result .nickname {
  position: relative;
  overflow: visible
}
.reply_result .nickname:before {
  content: " ";
  position: absolute;
  left: -0.4em;
  top: 50%;
  margin-top: -7px;
  width: 3px;
  height: 14px;
  background-color: #02bb00
}
.rich_tips.discuss_title_line {
  margin-top: 50px
}
.meta_praise {
  tap-highlight-color: rgba(0,0,0,0);
  outline: 0;
  min-width: 3.5em
}
.meta_praise .praise_num {
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
  color: #666;
}
.icon_praise_gray {
  background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA+CAYAAAA1dwvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACd0lEQVRYhe2XMWhUMRjHfycdpDg4iJN26CQih4NUlFIc3iTasaAO+iZBnorIId2CDg6PLqWDXSy0p28TJ6ejILgoKiLFSeRcnASLnDf2HPKll8b3ah5NQPB+cHzJl0v+73J5Sf6NwWCAD6kqxoEV4BywCTwA2j59V9QlxrxUNJeBOSkfBtaAHvDcp/O+GkJHJd4H7kr5nm/nOkJHJH4FHkv5WAyhUxLfAgelvBlUKFXFBNCU6oYl+j6oEHohADwFtoDTUn8dTChVxX7gjlSfSJyS+CaYEDCPXs4d4IXkzDR+8BWqfI9SVUyil/ENST20ml8BF4Afu4z9HT3V80B/TAY9CxTABNAHxp1Oj4B1q34dWAamGa5Al0PALfSs3TS/aE1EcERWgQXgozPIN+Ai6O2ljFQVM8BLZJqN0KTEhgj9kvrViqf1wYz5BcoXQ38Pg9uckfiuSigU0xLXowmlqpgCjgNd4FM0IeCKxGcmEUtoRqLZScILpaqYA06iN9/tTTfGLzKvxLKdDCqUquIEcB59xK9GE2J4xLeBn3ZD1abaq/sQqSpmgWvo82rBbTdCPeAA4N69/noXS1XhphaBz27SPPVtapz/FXSBFsNDcgcN3wvkiBEjRoSndAtqLXXKvuvtYfMs+SP3T3tYm6ge1iaqh7UJ62HRTqNZko/mYV3CeVjA9rAuUTxsGd4edrcX1vWwddn2sHmWaA/bWuq4HnYLff3aC7U8bAiaMPyPJp3GhnxCUOlhQxPdwxrieViLbp4lUT2sIbqHNcTzsBYbeZZE9bCGeB7WIrqHNbTzLNnhYWMIlXpYI9Rz8gM8/GsFi3mW/Ace9jf8QZwIX5o4uQAAAABJRU5ErkJggg==) no-repeat 0 0;width: 13px;
  height: 13px;
  vertical-align: middle;
  display: inline-block;
  background-size: 100% auto
}
.icon_praise_gray.praised {
  background-position: 0 -18px
}
.praised .icon_praise_gray {
  background-position: 0 -18px
}
.more{
  color:#49A1FD;
}
</style>
