import Vue from 'vue'
import App from './App'
import routerConf from './routerConfing'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map(routerConf)

router.start(App, '#app')

window.router = router
