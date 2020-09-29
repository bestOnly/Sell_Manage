import request from '@/utils/request'
/* 统一发的请求 */

/*
   店铺详情
*/
export function HomeInfo() {
  return request.get('/order/totaldata')
}
