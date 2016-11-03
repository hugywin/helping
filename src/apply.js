import Vue from 'vue'
import App from './App'
import routerConf from './routerConfing'
import VueRouter from 'vue-router'
import filter from './utils/filter'
import recharge from './components/help/recharge.vue'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: recharge
  }
})

router.start(App, '#app')

window.router = router
