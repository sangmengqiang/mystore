// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


//引入vuex
import { store } from './store/store'

// console.log(axios)
// 配置axios的请求地址默认路径
axios.defaults.baseURL='https://wd0237726689deztlx.wilddogio.com/'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
