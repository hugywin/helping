<template>
  <x-scroll :iheight="iheight">
    <panel header="发布产品列表" :list="pushlist" type="1"></panel>
  </x-scroll>
</template>

<script>
import {Panel, Group} from 'vux/src/components'
import XScroll from '../public/scroll'
import Api from 'resource/index'
import util from '../../utils/dateUtil.js'
export default {
  components: {
    Panel, Group, XScroll
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
    this.fetch();
  },
  methods: {
    // 获取我发布的产品列表
    fetch () {
      Api.pushlist({size: this.size, page: this.page})
      .then((response) => {
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
        if (compareDate == -1) {
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
          url: '/publish/support/'+item.id
        })
      })
      this.pushlist = array
    }
  }
}
</script>
