import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: function(resolve) {
      require(['./components/user/apply.vue'], resolve)
    }
  }
})

router.start(App, '#app')

window.router = router
