import Vue from 'vue'
import App from './App'
import routerConf from './routerConfing'
import VueRouter from 'vue-router'
import filter from './utils/filter'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: function(resolve) {
      require(['./components/help/recharge.vue'], resolve)
    }
  }
})

router.start(App, '#app')

window.router = router
