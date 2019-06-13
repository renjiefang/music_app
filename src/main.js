import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/css/index.scss'
import fastclick from 'fastclick'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(elementUI)
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
