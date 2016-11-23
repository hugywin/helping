import Vue from 'vue'
import App from './App'
import routerConf from './routerConfing'
import VueRouter from 'vue-router'
import filter from './utils/filter'
import utils from './utils/dateUtil'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

// const router = new VueRouter({
//   history: true,
//   saveScrollPosition: true,
//   suppressTransitionError: true
// })
const router = new VueRouter()

router.map(routerConf)

// 判断登录状态
router.beforeEach(function(transition) {
  let user = utils.getCookie('UserStatus'),
      url = transition.to.path;

      //需要授权的路由
  //     let authNames = [
  //       'help_join',
  //       'help_add_contact',
  //       'project_join',
  //       'project_address_manage',
  //       'user_index',
  //       'user_help',
  //       'user_help_info',
  //       'user_project',
  //       'user_project_info',
  //       'user_project_comment',
  //       'user_project_add'
  //     ];
  // if (!user && authNames.indexOf(transition.to.name) != -1) {
  //   window.location = 'http://crowd.iblue.cc/wx/auth?return='+encodeURIComponent(url);
  // }
  transition.next()
})

router.start(App, '#app')

window.router = router
