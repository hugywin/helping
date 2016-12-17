<template>
  <x-scroll :iheight="iheight">
    <div class="pub-list">
      <panel header="发布产品列表" :list="pushlist" type="1"></panel>
      <div class="no-data" v-if="pushlist.length == 0">
        暂无数据
      </div>
    </div>
  </x-scroll>
</template>

<script>
import {Panel} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
import util from '../../utils/dateUtil.js'
export default {
  components: {
    Panel, XScroll
  },
  data () {
    return {
      iheight: document.documentElement.clientHeight,
      pushlist: [],
      size: 10,
      page: 1,
      total: 0
    }
  },
  ready () {
    this.$dispatch('loading', true);
    this.fetch();
  },
  methods: {
    // 获取我发布的产品列表
    fetch () {
      Api.pushlist({size: this.size, page: this.page})
      .then((response) => {
        this.$dispatch('loading', false);
        let data = JSON.parse(response.body);
        this.process(data);
      })
    },
    // 数据处理
    process (data) {
      let array = [];
      this.total = data.Result.Total;
      data.Result.List.forEach((item) => {
        let compareDate = util.compare(new Date(), new Date(item.end_date)),
            diff = util.daysDiff(util.format(new Date(), 'yyyy-MM-dd'), item.end_date),
            desc = '';
        if (compareDate == 1) {
          if (item.money - item.join_money > 0) {
            desc = '已失败'
          } else {
            desc = '已结束'
          }
        } else {
          desc = '剩余'+diff+'天'
        }
        array.push({
          title: item.title,
          desc: desc,
          con: item.time,
          src: item.pics[0],
          url: '/raise/info/'+item.id
        })
      })
      this.pushlist = array
    }
  }
}
</script>
<style lang="less">
.pub-list{
  .no-data{
    padding: 30px;
    text-align: center;
    font-size: 1.7rem;
  }
}
</style>
