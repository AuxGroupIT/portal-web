// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'

import './styles/bootstrap/bootstrap.min.css'
import './styles/font-awesome/scss/font-awesome.scss'
import './styles/animate.css'
import './styles/style.scss'

// import './assets/js/jquery-3.1.1.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/plugins/metisMenu/jquery.metisMenu.js'
import './assets/js/plugins/slimscroll/jquery.slimscroll.min.js'

import './assets/js/inspinia.js'
import './assets/js/plugins/pace/pace.min.js'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
