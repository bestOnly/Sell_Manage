
import request from '@/utils/request'
/* 统一发请求 */

/*
   登录
*/
export function login(askbody) {
  return request.post('/users/checkLogin', askbody)
}
/*
   显示用户
*/
export function userList(query) {
  return request.get('/users/list', query)
}
/*
   添加用户
*/
export function userAdd(query) {
  return request.post('/users/add', query)
}
/*
   删除用户
*/
export function delAccount(id) {
  return request.get('/users/del', id)
}
/*
   批量删除用户
*/
export function delSomeUser(id) {
  return request.get('/users/batchdel', id)
}
/*
  修改用户
*/
export function updateUser(obj) {
  return request.post('/users/edit', obj)
}
/*
   旧密码是否一致
*/
export function oldPwdReg(pwd) {
  return request.get('/users/checkoldpwd', pwd)
}
/*
   修改密码
*/
export function updatePwd(pwd) {
  return request.post('/users/editpwd', pwd)
}
/*
   个人中心
*/
export function MyCenter() {
  return request.get('/users/info')
}
/*
   修改头像
*/
export function editPic(url) {
  return request.get('/users/avataredit', url)
}
