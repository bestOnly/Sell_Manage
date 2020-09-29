import request from '@/utils/request'
/* 统一发订单的请求 */

/*
   订单
*/
export function getOrder(obj) {
  return request.get('/order/list', obj)
}
/*
   订单查询
*/
export function findOrder(obj) {
  return request.get('/order/search', obj)
}
/*
   修改订单
*/
export function updateOrder(obj) {
  return request.post('/order/edit', obj)
}
/*
   订单详细
*/
export function orderList(obj) {
  return request.get('/order/detail', obj)
}
