/***
 * 路由配置
 ***/

export default {
  '/': {
    component: function(resolve) {
      require(['./components/home/index.vue'], resolve)
    }
  },
  '/help': {
    component: function(resolve) {
      require(['./components/help/list.vue'], resolve)
    }
  },
  '/help/:id': {
    component: function(resolve) {
      require(['./components/help/index.vue'], resolve)
    }
  },
  '/help/doc/:type/:id': {
    component: function(resolve) {
      require(['./components/help/doc.vue'], resolve)
    }
  },
  // '/help/msg': {
  //   component: function(resolve) {
  //     require(['./components/help/message.vue'], resolve)
  //   }
  // },
  '/help/join/:id': {
    component: function(resolve) {
      require(['./components/help/join.vue'], resolve)
    }
  },
  '/help/addp': {
    component: function(resolve) {
      require(['./components/help/add.vue'], resolve)
    }
  },
  '/help/recharge': {
    component: function(resolve) {
      require(['./components/help/recharge.vue'], resolve)
    }
  },
  '/help/rechargeInfo': {
    component: function(resolve) {
      require(['./components/help/rechargeInfo.vue'], resolve)
    }
  },
  '/raise': {
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
  },
  '/raise/addr/:user': {
    component: function(resolve) {
      require(['./components/raise/addr.vue'], resolve)
    }
  },
  '/user': {
    component: function(resolve) {
      require(['./components/user/index.vue'], resolve)
    }
  },
  '/user/bind': {
    component: function(resolve) {
      require(['./components/user/bind.vue'], resolve)
    }
  },
  '/user/wallet': {
    component: function(resolve) {
      require(['./components/user/wallet.vue'], resolve)
    }
  },
  '/order/help': {
    component: function(resolve) {
      require(['./components/order/helplist.vue'], resolve)
    }
  },
  '/order/help/:id': {
    component: function(resolve) {
      require(['./components/order/helpinfo.vue'], resolve)
    }
  },
  '/order/raise': {
    component: function(resolve) {
      require(['./components/order/raiselist.vue'], resolve)
    }
  },
  '/order/raise/:id': {
    component: function(resolve) {
      require(['./components/order/raiseinfo.vue'], resolve)
    }
  },
  '/order/rate/:id': {
    component: function(resolve) {
      require(['./components/order/rate.vue'], resolve)
    }
  },
  '/publish': {
    component: function(resolve) {
      require(['./components/publish/index.vue'], resolve)
    }
  }
}
