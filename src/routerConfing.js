/***
 * 路由配置
 ***/

export default {
  '/home': {
    component: function(resolve) {
      require(['./components/home/index.vue'], resolve)
    }
  }
}
