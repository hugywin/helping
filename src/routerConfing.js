/***
 * 路由配置
 ***/

export default {
  '/home': {
    component: function(resolve) {
      require(['./components/home/index.vue'], resolve)
    }
  },
  '/product/:id': {
    component: function(resolve) {
      require(['./components/product/index.vue'], resolve)
    }
  },
  '/product/doc/:type/:id': {
    component: function(resolve) {
      require(['./components/product/doc.vue'], resolve)
    }
  },
  '/product/msg': {
    component: function(resolve) {
      require(['./components/product/message.vue'], resolve)
    }
  },
  '/order/join': {
    component: function(resolve) {
      require(['./components/order/join.vue'], resolve)
    }
  },
  '/order/addp': {
    component: function(resolve) {
      require(['./components/order/add.vue'], resolve)
    }
  },
  '/order/recharge': {
    component: function(resolve) {
      require(['./components/order/recharge.vue'], resolve)
    }
  },
  '/order/rechargeInfo': {
    component: function(resolve) {
      require(['./components/order/rechargeInfo.vue'], resolve)
    }
  },
  '/raise/list': {
    component: function(resolve) {
      require(['./components/raise/index.vue'], resolve)
    }
  },
  '/raise/info/:id': {
    component: function(resolve) {
      require(['./components/raise/info.vue'], resolve)
    }
  },
  '/raise/rate/:id': {
    component: function(resolve) {
      require(['./components/raise/rate.vue'], resolve)
    }
  },
  '/raise/order/:id': {
    component: function(resolve) {
      require(['./components/raise/order.vue'], resolve)
    }
  }
}
