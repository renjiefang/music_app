import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/css/index.scss'
import fastclick from 'fastclick'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
import Cube from 'cube-ui'


Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(VueLazyload)
fastclick.attach(document.body)
Vue.use(Cube)
Vue.use(VueLazyload, {
  preLoad: 1.3,
   loading: require('common/images/load.gif'),
   attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
