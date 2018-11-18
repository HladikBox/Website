// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.global = global

axios.defaults.baseURL = 'http://cmsdev.app-link.org/alucard263096/applink/api/';
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
