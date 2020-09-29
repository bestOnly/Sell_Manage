import request from '@/utils/request'
/* 统一发商品的请求 */

/*
   添加分类
*/
export function addCate(obj) {
  return request.post('/goods/addcate', obj)
}
/*
   查询分类
*/
export function cateList(param) {
  return request.get('/goods/catelist', param)
}
/*
   删除分类
*/
export function delCate(param) {
  return request.get('/goods/delcate', param)
}
/*
   修改分类
*/
export function editProCate(param) {
  return request.post('/goods/editcate', param)
}
/*
   添加商品
*/
export function addGoods(param) {
  return request.post('/goods/add', param)
}
/*
   商品列表
*/
export function getGoods(param) {
  return request.get('/goods/list', param)
}
/*
   商品删除
*/
export function removeGoods(param) {
  return request.get('/goods/del', param)
}
/*
   商品修改
*/
export function updateGoods(param) {
  return request.post('/goods/edit', param)
}

/*
  查询所有分类
*/
export function findAllCate() {
  return request.get('/goods/categories')
}
