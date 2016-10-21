<template>
  <div class="raise-info">
    <x-header :left-options="{showBack: true}">
      <a>众筹产品详情</a>
    </x-header>
    <div class="head-wrap">
      <img src="http://thumb.qschou.com/files/qschou.com/avatar/475/95a28d4a-b9c2-44da-abab-6dee7fd731cb/1475830602209d99e17c927d0471apc.jpg@!large.png" />
      <span>李怡鹏</span> &nbsp; <b>一周前</b>
      <p>剩余<strong>17</strong>天</p>
    </div>
    <h2 class="title">【80后创业把家乡放在网上卖】陕西手工擀面皮嘹咋了！</h2>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>10000元</span>
          <br/>
          目标金额
        </div>
        <div class="vux-1px-r">
          <span>10155元</span>
          <br/>
          已筹金额
        </div>
        <div>
          <span>321次</span>
          <br/>
          支持次数
        </div>
      </div>
    </card>
    <div class="info-wrap">
      <p>李怡鹏，生于1988年，2012年大学毕业后，来到深圳一家国企工作。他从最普通的基</p>
    </div>
    <flexbox :gutter="0" wrap="wrap" class="produt-pic">
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
     <flexbox-item :span="1/4"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/1475832918779171fb7e1afc746c4pc.jpg@!thumb.png"/></flexbox-item>
   </flexbox>
   <div class="shipment">
     <p class="title">运费和发货时间</p>
     <div class="list">
       <label>运费:</label>
       <span>包邮</span>
     </div>
     <div class="list">
       <label>发货时间:</label>
       <span>三天内发货</span>
     </div>
   </div>
   <group>
      <cell title="评价">
        <span>{{rater}}分</span>
        <i class="fa fa-angle-right"></i>
        <rater :value.sync="rater" slot="value" disabled></rater>
      </cell>
  </group>
  <ul class="eva-tag row">
    <li v-for="val in tagList" track-by="$index">{{val}}</li>
  </ul>
  <panel header="产品回报" :list="panelList" class="panel-list"></panel>
  <div class="dynamic-wrap">
    <p class="title">筹款动态</p>
    <timeline>
      <timeline-item class="dynamic-item">
        <div class="title">
          <span>李怡鹏</span> 发布进度更新
          <div class="fa fa-comments-o leave-msg" @click="leaveMsg"></div>
        </div>
        <p class="time">8小时前</p>
        <p class="con">开始发货！</p>
        <flexbox :gutter="0" wrap="wrap" class="timeline-pic">
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
        </flexbox>
        <div class="talk-comment">
          <div class="talk-item"><i class="fa fa-commenting-o"></i><label>清风徐来:</label>我下单了</div>
          <div class="talk-item"><i class="fa fa-commenting-o"></i><label>张三</label>回复<label>清风徐来:</label>我下单了</div>
        </div>
      </timeline-item>
      <timeline-item class="dynamic-item">
        <div class="title">
          <span>李怡鹏</span> 发布进度更新
          <div class="fa fa-comments-o leave-msg" @click="leaveMsg"></div>
        </div>
        <p class="time">8小时前</p>
        <p class="con">开始发货！</p>
        <flexbox :gutter="0" wrap="wrap" class="timeline-pic">
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
          <flexbox-item :span="1/3"><img src="http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768506788561e77420.jpg@!thumb.png" /></flexbox-item>
        </flexbox>
        <div class="talk-comment">
          <div class="talk-item"><i class="fa fa-commenting-o"></i><label>清风徐来:</label>我下单了</div>
          <div class="talk-item"><i class="fa fa-commenting-o"></i><label>张三</label>回复<label>清风徐来:</label>我下单了</div>
        </div>
      </timeline-item>
    </timeline>
  </div>

  <confirm :show.sync="show" title="发表评论" @on-cancel="onCancel" @on-confirm="onConfirm" class="dialog">
    <x-textarea :max="30" placeholder="填写评论内容" value=""></x-textarea>
  </confirm>

  <panel header="TA的支持者" :list="supportList" class="support-list"></panel>
  <divider class="more" @click="">查看更多支持者(共{{supportList.length}}人)</divider>

  <div class="btn-sub">
    <x-button type="primary" v-link="{path: ''}">我要支持</x-button>
  </div>
</div>
</template>

<script>
import { XHeader,XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem, Confirm, XTextarea, Panel, Divider} from 'vux/src/components'
export default {
  components: {
    XHeader, XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem, Confirm, XTextarea, Panel, Divider
  },
  data () {
    return {
      rater: 3.5,
      tagList: ['口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6'],
      panelList: [{
        src: 'http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768771425131cd2a9632257d296pc.png@!thumb.png',
        title: '支持<b class="red-color">1.00</b>元<p class="panel-tit-r">剩余<span>198</span>份</p>',
        desc: '【支持1元】只为创业精神点赞，【支持后不发货】让我们的梦想汇聚成一股洪流，释放我们的洪荒之力！'
      }, {
        src: 'http://thumb.qschou.com/files/qschou.com/project/665/56bf73ec-f368-413a-8237-89cccf835428/14768771425131cd2a9632257d296pc.png@!thumb.png',
        title: '支持<b class="red-color">1.00</b>元<p class="panel-tit-r">剩余<span>198</span>份</p>',
        desc: '【支持1元】只为创业精神点赞，【支持后不发货】让我们的梦想汇聚成一股洪流，释放我们的洪荒之力！'
      }],
      supportList: [{
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '零下<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '20分钟前'
      }, {
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '零下<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '20分钟前'
      }, {
        src: 'http://wx.qlogo.cn/mmopen/hs1dXA7OicRWYibTHOImXTIVq7B2YEAqsPciaSbv6gpFGKrLticUHenTDU3T0NBIrxQk7EUZ2PVicUGYXKILEicghHROvuQjS3iaftH/0',
        title: '零下<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B"> 38.00</span> </small>',
        desc: '20分钟前'
      }],
      show: false,

    }
  },
  methods: {
    // 留言
    leaveMsg: function() {
      this.show = true;
    }
  }
}
</script>

<style lang="less">
.raise-info{
  .head-wrap{
    margin: 15px 0 10px 15px;
    background: #fff;
    img{
      width: 24px;
      height:24px;
      border-radius: 48px;
      vertical-align: middle;
    }
    span{
      display: inline-block;
      line-height: 24px;
      vertical-align: middle;
      margin-left: 5px;
    }
    b{
      color: #999;
      font-size: 10px;
    }
    p{
      float: right;
      margin-right: 10px;
      line-height: 24px;
      color: #999;
      strong{
        margin: 0 2px;
        color:#F25B4B;
      }
    }
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
  .info-wrap{
    background: #fff;
    padding: 5px;
    p{
      text-indent: 10px;
      line-height: 1.8rem;
      font-size: 1.4rem;
    }
  }
  .produt-pic{
    img{
      width: 94%;
      margin: 0 3%;
    }
  }
  .shipment{
    margin-top: 15px;
    background: #edfcff;
    .title{
      border-bottom: 1px solid rgba(0,0,0,.15);
      line-height: 2rem;
      font-size: 1.4rem;
      padding: 5px 10px;
      font-weight: 400;
    }
    .list{
      padding: 5px 10px;
      label{
        display: inline-block;
        width: 70px;
        vertical-align: middle;
        line-height: 1.7rem;
        font-size: 1.2rem;
      }
    }
  }
  .eva-tag{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    padding: 10px 10px 5px;
    margin-bottom: 15px;
    li{
      float: left;
      height: 20px;
      line-height: 20px;
      margin-right: 8px;
      margin-bottom: 10px;
      padding: 0 12px;
      list-style: none;
      border-radius: 20px;
      background: #f3f3f3;
    }
  }
  .panel-list{
    margin-bottom: 15px;
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    .red-color{
      color:#F25B4B;
    }
    .panel-tit-r{
      float: right;
      font-size: 1.3rem;
      span{
        color:#000;
        font-weight: bold;
      }
    }
  }
  .dynamic-wrap{
    background: #fff;
    .title{
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      line-height: 2rem;
      font-size: 1.4rem;
      padding: 5px 10px;
      font-weight: 400;
    }
    .timeline-pic{
      img{
        width: 94%;
        margin: 0 3%;
      }
    }
    .time{
      color:#999;
    }
    .con{
      line-height: 1.5rem;
      font-size: 1.2rem;
    }
    label{
      margin-right: 5px;
      color:#4284B6;
      font-weight: 500;
    }
    .leave-msg{
      float: right;
      width: 40px;
      text-align: center;
      font-size: 20px;
      color:#43AC43;
    }
  }
  .support-list{
    .weui_media_box.weui_media_appmsg .weui_media_hd img{
      border-radius: 120px;
    }
  }
  .more{
    margin-bottom: 30px;
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    left: 20%;
    line-height: 30px;
    width: 60%;
  }
}

</style>
