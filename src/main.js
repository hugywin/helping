import Vue from 'vue'
import App from './App'
import routerConf from './routerConfing'
import VueRouter from 'vue-router'
import filter from './utils/filter'
import utils from './utils/dateUtil'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map(routerConf)

// 判断登录状态
router.beforeEach(function(transition) {
  let user = utils.getCookie('UserStatus'),
      url = transition.to.path;
      console.log(transition.to.name)
  if (!user) {
    window.location = 'http://crowd.iblue.cc/wx/auth?url='+url;
  }
  transition.next()
})

router.start(App, '#app')

window.router = router
