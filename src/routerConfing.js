/***
 * 路由配置
 ***/

export default {
  '/': {  // 首页
    component: function(resolve) {
      require(['./components/home/index.vue'], resolve)
    }
  },
  '/help': {  // 互助列表
    component: require('./components/help/list.vue')
  },
  '/help/:id': {  // 互助详情页面
    component: function(resolve) {
      require(['./components/help/index.vue'], resolve)
    }
  },
  '/help/doc/:type/:id': {  // 互助规则页
    component: function(resolve) {
      require(['./components/help/doc.vue'], resolve)
    }
  },
  '/help/join/:id': {  // 加入互助－下单
    component: function(resolve) {
      require(['./components/help/join.vue'], resolve)
    }
  },
  '/help/addp': {  // 添加互助保障人
    component: function(resolve) {
      require(['./components/help/add.vue'], resolve)
    }
  },
  '/raise': { // 众筹产品列表
    component: require('./components/raise/index.vue')
  },
  '/raise/info/:id': {  // 众筹产品详情
    component: function(resolve) {
      require(['./components/raise/info.vue'], resolve)
    }
  },
  '/raise/rate/:id': {  // 众筹产品的评价列表
    component: function(resolve) {
      require(['./components/raise/rate.vue'], resolve)
    }
  },
  '/raise/order/:id': { // 众筹产品下单页
    component: function(resolve) {
      require(['./components/raise/order.vue'], resolve)
    }
  },
  '/raise/addr/:type': {  // 众筹地址管理页
    component: function(resolve) {
      require(['./components/raise/addr.vue'], resolve)
    }
  },
  '/user': {  // 个人中心
    component: require('./components/user/index.vue')
  },
  '/user/bind': {  // 授权绑定手机号码页
    component: function(resolve) {
      require(['./components/user/bind.vue'], resolve)
    }
  },
  '/user/wallet': {  // 我的钱包页
    component: function(resolve) {
      require(['./components/user/wallet.vue'], resolve)
    }
  },
  '/order/help': { // 我的互助订单列表
    component: function(resolve) {
      require(['./components/order/helplist.vue'], resolve)
    }
  },
  '/order/help/:id': { // 我的互助订单详情
    component: function(resolve) {
      require(['./components/order/helpinfo.vue'], resolve)
    }
  },
  '/order/raise': { // 我的众筹订单列表
    component: function(resolve) {
      require(['./components/order/raiselist.vue'], resolve)
    }
  },
  '/order/raise/:id': { // 我的众筹订单详情
    component: function(resolve) {
      require(['./components/order/raiseinfo.vue'], resolve)
    }
  },
  '/order/rate/:id': {  // 众筹订单评价
    component: function(resolve) {
      require(['./components/order/rate.vue'], resolve)
    }
  },
  '/publish': {  // 众筹产品发布
    component: require('./components/publish/index.vue')
  }
}
