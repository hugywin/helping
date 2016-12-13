/***
 * 路由配置
 ***/

export default {
  '/': {  // 首页
    component: function(resolve) {
      require(['./components/home/index.vue'], resolve)
    },
    name: "index"
  },
  '/help': {  // 互助列表
    component: require('./components/help/list.vue'),
    name: "help_index"
  },
  '/help/:id': {  // 互助详情页面
    component: function(resolve) {
      require(['./components/help/index.vue'], resolve)
    },
    name: "help_info"
  },
  '/help/doc/:type/:id': {  // 互助规则页
    component: function(resolve) {
      require(['./components/help/doc.vue'], resolve)
    }
  },
  '/help/join/:id': {  // 加入互助－下单
    component: function(resolve) {
      require(['./components/help/join.vue'], resolve)
    },
    name: "help_join"
  },
  '/help/addp': {  // 添加互助保障人
    component: function(resolve) {
      require(['./components/help/add.vue'], resolve)
    },
    name: "help_add_contact"
  },
  '/raise': { // 众筹产品列表
    component: require('./components/raise/index.vue'),
    name: "project_index"
  },
  '/raise/info/:id': {  // 众筹产品详情
    component: function(resolve) {
      require(['./components/raise/info.vue'], resolve)
    },
    name: "project_info"
  },
  '/raise/rate/:id': {  // 众筹产品的评价列表
    component: function(resolve) {
      require(['./components/raise/rate.vue'], resolve)
    }
  },
  '/raise/order/:id': { // 众筹产品下单页
    component: function(resolve) {
      require(['./components/raise/order.vue'], resolve)
    },
    name: "project_join"
  },
  '/raise/addr/:type': {  // 众筹地址管理页
    component: function(resolve) {
      require(['./components/raise/addr.vue'], resolve)
    },
    name: "project_address_manage"
  },
  '/user': {  // 个人中心
    component: require('./components/user/index.vue'),
    name: "user_index"
  },
  '/user/bind': {  // 授权绑定手机号码页
    component: function(resolve) {
      require(['./components/user/bind.vue'], resolve)
    },
    name: "bind_mobile"
  },
  '/user/wallet': {  // 我的钱包页
    component: function(resolve) {
      require(['./components/user/wallet.vue'], resolve)
    },
    name: "user_wallet"
  },
  '/order/help': { // 我的互助订单列表
    component: function(resolve) {
      require(['./components/order/helplist.vue'], resolve)
    },
    name: "user_help"
  },
  '/order/help/:id': { // 我的互助订单详情
    component: function(resolve) {
      require(['./components/order/helpinfo.vue'], resolve)
    },
    name: "user_help_info"
  },
  '/order/raise': { // 我的众筹订单列表
    component: function(resolve) {
      require(['./components/order/raiselist.vue'], resolve)
    },
    name: "user_project"
  },
  '/order/raise/:id': { // 我的众筹订单详情
    component: function(resolve) {
      require(['./components/order/raiseinfo.vue'], resolve)
    },
    name: "user_project_info"
  },
  '/order/rate/:id': {  // 众筹订单评价
    component: function(resolve) {
      require(['./components/order/rate.vue'], resolve)
    },
    name: "user_project_comment"
  },
  '/publish': {  // 众筹产品发布
    component: require('./components/publish/index.vue'),
    name: "user_project_add"
  },
  '/publish/type': {  // 发起产品方
    component: require('./components/publish/pubType.vue'),
    name: "user_project_add"
  },
  '/publish/list': {  // 发布产品列表
    component: require('./components/publish/pubList.vue'),
    name: "user_project_add"
  },
  '/publish/success': {  // 发布成功
    component: require('./components/publish/success.vue'),
    name: "user_project_add"
  },
  '/publish/support/:id': {  // 支持者列表
    component: require('./components/publish/support.vue'),
    name: "user_project_add"
  },
  '/publish/express/:id': {  // 选择物流-发货
    component: require('./components/publish/express.vue'),
    name: "user_project_add"
  },
  '/publish/expressinfo/:id': {  // 选择物流信息
    component: require('./components/publish/expressInfo.vue'),
    name: "user_project_add"
  },
  '/publish/order/:id': {  // 选择物流信息
    component: require('./components/publish/order.vue'),
    name: "user_project_add"
  }
}
