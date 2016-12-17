<template>
  <x-header :left-options="{showBack: false}">
    <a>众筹产品详情</a>
  </x-header>
  <x-scroll :iheight="iheight">
    <div class="raise-info" v-if="raise">
      <div class="head-wrap">
        <img :src="raise.user.face" />
        <span>{{raise.user.name}}</span>&nbsp;&nbsp;<b>{{raise.time}}</b>
        <p v-if="raise.day > 0">剩余<strong>{{raise.day}}</strong>天</p>
        <p v-else>已结束</p>
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
            <span>{{raise.join_count}}次</span>
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
         <flexbox :gutter="0" wrap="wrap" class="list">
           <flexbox-item :span="1/4"><label>运费:</label></flexbox-item>
           <flexbox-item :span="3/4"><span>{{raise.exp_money}}</span></flexbox-item>
         </flexbox>
         <flexbox :gutter="0" wrap="wrap" class="list">
           <flexbox-item :span="1/4"><label>发货时间:</label></flexbox-item>
           <flexbox-item :span="3/4"><span>{{raise.exp_date}}</span></flexbox-item>
         </flexbox>
       </div>
       <!-- <group>
          <cell title="评价">
            <span>{{rater}}分</span>
            <i class="fa fa-angle-right"></i>
            <rater :value.sync="rater" slot="value" disabled></rater>
          </cell>
      </group>
      <ul class="eva-tag row">
        <li v-for="val in tagList" track-by="$index">{{val}}</li>
      </ul> -->
      <panel header="产品回报" :list="panelList" class="panel-list"></panel>
      <!-- <div class="dynamic-wrap">
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
      </div> -->

      <post-comment :show="show"></post-comment>

      <panel header="TA的支持者" :list="supportList" class="support-list" v-if="supportList.length"></panel>
      <divider class="more" v-if="supportList.length" @click="">查看更多支持者(共{{supportList.length}}人)</divider>
    </div>
  </x-scroll>
  <div class="raise-btn-sub">
    <x-button type="primary" v-if="showJoinBtn" v-link="{path: '/raise/order/'+$route.params.id}">我要支持</x-button>
    <x-button type="primary" v-else @click="manage()">项目管理</x-button>
  </div>
  <popup :show.sync="showPopup" class="raise-popup"  v-if="!showJoinBtn">
    <p class="title">项目管理</p>
    <flexbox :gutter="0" wrap="wrap">
       <flexbox-item :span="1/4"><a v-link="{path: '/publish/support/'+id}" class="item"><i class="icon icon-support"></i>支持记录</a></flexbox-item>
       <flexbox-item :span="1/4"><a v-link="{path: '/publish/'+id}" class="item"><i class="icon icon-edit"></i>编辑项目</a></flexbox-item>
       <flexbox-item :span="1/4"><a v-link="{path: '/'}" class="item"><i class="icon icon-update"></i>更新动态</a></flexbox-item>
       <flexbox-item :span="1/4"><a @click="endShow = true" class="item"><i class="icon icon-end"></i>提前结束</a></flexbox-item>
       <flexbox-item :span="1/4"><a v-link="{path: '/publish/type/'+id}" class="item"><i class="icon icon-verify"></i>项目验证</a></flexbox-item>
       <flexbox-item :span="1/4"><a @click="telShow = true" class="item"><i class="icon icon-kftel"></i>联系客服</a></flexbox-item>
       <flexbox-item :span="1/4"><a @click="menuShow = true" class="item"><i class="icon icon-delete"></i>删除项目</a></flexbox-item>
       <flexbox-item :span="1/4"><a v-link="{path: '/'}" class="item"><i class="icon icon-help"></i>使用帮助</a></flexbox-item>
    </flexbox>
    <div class="cancel" @click="cancelManage()">取消</div>
  </popup>
  <actionsheet :show.sync="menuShow" :menus="menus" @on-click-menu-delete="onDelete"></actionsheet>
  <actionsheet :show.sync="endShow" :menus="endMenus" @on-click-menu-delete="onEnd"></actionsheet>
  <actionsheet :show.sync="telShow" :menus="telMenus"></actionsheet>
</template>

<script>
import { XHeader,XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem,  Panel, Divider, Popup, Actionsheet} from 'vux/src/components'
import PostComment from '../public/post-comment'
import Api from 'resource/index'
import XScroll from '../public/scroll'
import utils from '../../utils/dateUtil'
export default {
  components: {
    XHeader, XButton, Flexbox, FlexboxItem, Card, Scroller, Group, Cell, Rater, Timeline, TimelineItem, Panel, Divider, PostComment, XScroll, Popup, Actionsheet
  },
  ready () {
    this.id = this.$route.params.id;
    this.type = this.$route.params.type || '';
    this.$dispatch('loading', true);
    this.fetch(this.id);
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight - 90,
      id: '',
      type: '',
      raise: null,
      rater: 3.5,
      tagList: ['口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6', '口感佳6'],
      panelList: [],
      supportList: [],
      show: false,
      showJoinBtn: true, //是否显示“我要支持” 按钮
      showPopup: false,
      menuShow: false,
      menus: {
        'title.noop': '确定删除项目？',
        delete: '<span style="color:red">删除</span>'
      },
      endShow: false,
      endMenus: {
        'title.noop': '确定提前结束项目？',
        delete: '<span style="color:#43AC43">确定</span>'
      },
      telShow: false,
      telMenus: {
        'title.noop': '欢迎致电：<a href="tel:13611216850" style="color:#43AC43">13611216850</a>'
      }
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
        context.panel(data.Result.reports);
        context.support(data.Result.joins);
        let uid = utils.getCookie('UserId');
        if (uid == data.Result.user.id) {
          context.showJoinBtn = false;
        }

        this.$dispatch('loading', false);
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
    },
    // 处理支持者数据
    support: function(data) {
      let supports = [];
      data.forEach((item, idx) => {
        supports.push({
          src: item.face,
          title: item.name+'<small> <span style="color:#666"> 支持了 </span><span style="color:#F25B4B">'+item.money+'</span> </small>',
          desc: item.time
        })
      })
      this.supportList = supports;
    },
    // 项目管理
    manage: function () {
      this.showPopup = true;
    },
    // 取消项目管理
    cancelManage: function () {
      this.showPopup = false;
    },
    // 删除项目
    onDelete: function () {
      console.log('delete');
    },
    // 结束项目
    onEnd: function () {
      console.log('end');
    }
  }
}
</script>

<style lang="less">
.raise-info{
  margin-bottom: 25px;
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
      font-size: 1.2rem;
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
      padding: 5px 0px;
      label{
        display: inline-block;
        width: 80%;
        margin: 0 10%;
        vertical-align: middle;
        line-height: 1.7rem;
        font-size: 1.2rem;
        text-align: center;
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
    margin-bottom: 40px;
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
.raise-btn-sub{
  position: fixed;
  bottom: 0;
  left: 10%;
  line-height: 30px;
  width: 80%;
}
.vux-header .vux-header-right a{
  color: #fff!important;
}
.vux-popup-dialog{
  .title{
    font-size: 17px;
    text-align: center;
    padding: 10px 0;
  }
  .cancel{
    padding: 12px 16px;
    border-radius: 0;
    border: none;
    background: #fff;
    font-size: 16px;
    text-align: center;
  }
  .item{
    text-align: center;
    color: #666;
    font-size: 12px;
    margin-bottom: 10px;
    display: block;
    .icon{
      width: 60px;
      height: 60px;
      border-radius: 50px;
      -webkit-border-radius: 50px;
      display: block;
      margin: 5px auto;
      background: url(../../../static/icon-project.png) no-repeat #fff;
      background-size: 60px
    }
    .icon-support {
      background-position: 0 0;
    }
    .icon-edit {
      background-position: 0 -60px;
    }
    .icon-update {
      background-position: 0 -180px;
    }
    .icon-end {
      background-position: 0 -300px;
    }
    .icon-verify {
      background-position: 0 -240px;
    }
    .icon-kftel {
      background-position: 0 -840px;
    }
    .icon-delete {
      background-position: 0 -540px;
    }
    .icon-help {
      background-position: 0 -720px;
    }
  }
}
</style>
