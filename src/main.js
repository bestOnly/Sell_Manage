import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import './assets/css/reset.css'
import './assets/css/index.css'
import echarts from 'echarts'
import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
// Vue.use(axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 时间过滤器
// Vue.filter('validateTime', function (value) {
//   var date = new Date(value)
//   var Y = date.getFullYear()
//   var M = (date.getMonth() + 1).toString().padStart(2, 0)
//   var D = date.getDate().toString().padStart(2, 0)
//   var h = date.getHours().toString().padStart(2, 0)
//   var m = date.getMinutes().toString().padStart(2, 0)
//   var s = date.getSeconds().toString().padStart(2, 0)
//   return `${Y}-${M}-${D}  ${h}:${m}:${s}`
// })
