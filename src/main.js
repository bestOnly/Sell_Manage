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
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(axios, VueAxios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
