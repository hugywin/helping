<template>
  <div class="raise-info">
    <x-header :left-options="{showBack: true}">
      <a>众筹产品详情</a>
    </x-header>
    <div class="head-wrap">
      <img :src="raise.user.face" />
      <span>{{raise.user.name}}</span>&nbsp;&nbsp;<b>{{raise.time|format 'yyyy-MM-dd'}}</b>
      <p>剩余<strong>{{raise.day}}</strong>天</p>
    </div>
    <h2 class="title-h">{{raise.title}}</h2>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>{{raise.money}}元</span>
          <br/>
          目标金额
        </div>
        <div class="vux-1px-r">
          <span>{{raise.join_money}}元</span>
          <br/>
          已筹金额
        </div>
        <div>
          <span>{{raise.join_user_count}}次</span>
          <br/>
          支持次数
        </div>
      </div>
    </card>
    <div class="info-wrap">
      <p>{{raise.desc}}</p>
    </div>
    <flexbox :gutter="0" wrap="wrap" class="produt-pic">
     <flexbox-item v-for="pic in raise.pics" :span="1/4"><img :src="'http://crowd.iblue.cc/'+pic"/></flexbox-item>
   </flexbox>
   <div class="shipment">
     <p class="title">运费和发货时间</p>
     <div class="list">
       <label>运费:</label>
       <span>{{raise.exp_money}}</span>
     </div>
     <div class="list">
       <label>发货时间:</label>
       <span>{{raise.exp_date}}</span>
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

  <post-comment :show="show"></post-comment>

  <panel header="TA的支持者" :list="supportList" class="support-list"></panel>
  <divider class="more" @click="">查看更多支持者(共{{supportList.length}}人)</divider>

  <div class="btn-sub">
    <x-button type="primary" v-link="{path: ''}">我要支持</x-button>
  </div>
</div>
</template>

<script>
import { XHeader,XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem,  Panel, Divider} from 'vux/src/components'
import PostComment from '../public/post-comment'
import Api from 'resource/index'
export default {
  components: {
    XHeader, XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem, Panel, Divider, PostComment
  },
  ready () {
    let id = this.$route.params.id;
    this.fetch(id);
  },
  data () {
    return {
      raise: null,
      rater: 3.5,
      tagList: ['口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6'],
      panelList: [],
      show: false,

    }
  },
  methods: {
    // 留言
    leaveMsg: function() {
      this.show = true;
    },
    // 获取众筹详情
    fetch: function(id) {
      let context = this;
      Api.projectInfo({id: id}).then((response) => {
        let data = JSON.parse(response.body);
        context.raise = data.Result;
        context.panel(data.Result.reports)
      })
    },
    // 处理回报数据
    panel: function(data) {
      let reports = [];
      data.forEach((item, idx) => {
        reports.push({
          src: 'http://crowd.iblue.cc/'+item.pic,
          desc: item.desc,
          title: '支持<b class="red-color">'+item.money+'</b>元<p class="panel-tit-r">剩余<span>'+item.quantity+'</span>份</p>'
        })
      })
      this.panelList = reports;
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
  .title-h{
    text-indent: 10px;
  }
}

</style>
