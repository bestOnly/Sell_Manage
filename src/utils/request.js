/*
  封装通用的请求和信息
*/

import axios from 'axios'
import qs from 'qs'
import local from '@/utils/local.js'
import { Message } from 'element-ui'

// 基准接口路径
axios.defaults.baseURL = 'http://127.0.0.1:5000'
// 请求超时时间
axios.defaults.timeout = 5000

/* 请求拦截器  获取token身份 */
axios.interceptors.request.use(config => {
  const token = local.get('token')
  if (token) {
    config.headers.authorization = token
  }
  return config
})
/* 响应拦截器 */
// 统一设置接口提示内容
axios.interceptors.response.use(res => {
  const { code, msg } = res.data
  if (code === 0) {
    Message({
      type: 'success',
      message: msg || ''
    })
  } else if (code === 1) {
    Message({
      type: 'error',
      message: msg || ''
    })
  }
  return res
})

export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params: params })
        .then(res => {
          console.log(res)
          resolve(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    })
  },
  post(url, reqbody) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(reqbody))
        .then(res => {
          console.log(res.data)
          resolve(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
}
