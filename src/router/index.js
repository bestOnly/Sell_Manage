import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../layout/Index.vue'
import local from '@/utils/local.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',
        // meta: { title: '首页' },
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/dashboard/Index.vue')
      },
      {
        path: '/order',
        meta: { title: '订单管理' },
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/order/Index.vue'),
        redirect: '/order/Manage',
        children: [
          {
            path: '/order/Manage',
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/order/orderManage.vue'
              )
          }
        ]
      },
      {
        path: '/product',
        meta: { title: '商品管理' },
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/product/Index.vue'),
        redirect: '/product/list',
        children: [
          {
            path: '/product/list',
            meta: { title: '商品列表' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/product/productList.vue'
              )
          },
          {
            path: '/product/add',
            meta: { title: '商品添加' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/product/productAdd.vue'
              )
          },
          {
            path: '/product/cate',
            meta: { title: '商品分类' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/product/productCate.vue'
              )
          }
        ]
      },
      {
        path: '/store',
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/store/Index.vue'),
        redirect: '/store/storeManage',
        children: [
          {
            path: '/store/storeManage',
            meta: { title: '店铺管理' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/store/storeManage.vue'
              )
          }
        ]
      },
      {
        path: '/account',
        meta: { title: '账户管理' },
        redirect: '/account/accountList',
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/account/Index.vue'),
        children: [
          {
            path: '/account/accountList',
            meta: { title: '账户列表' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/accountList.vue'
              )
          },
          {
            path: '/account/add',
            meta: { title: '账户添加' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/addAdmin.vue'
              )
          },
          {
            path: '/account/updatePwd',
            meta: { title: '修改密码' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/updatePwd.vue'
              )
          },
          {
            path: '/account/myCenter',
            meta: { title: '个人中心' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/myCenter.vue'
              )
          }
        ]
      },
      {
        path: '/saleAccount',
        meta: { title: '销售统计' },
        redirect: '/saleAccount/goodsAccount',
        // 懒加载
        component: () =>
          import(
            /* webpackchunkName: "login" */ '../views/saleAccount/Index.vue'
          ),
        children: [
          {
            path: '/saleAccount/goodsAccount',
            meta: { title: '商品统计' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/saleAccount/goodsAccount.vue'
              )
          },
          {
            path: '/saleAccount/orderAccount',
            meta: { title: '订单统计' },
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/saleAccount/orderAccount.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'loginIndex',
    // 懒加载
    component: () =>
      import(/* webpackchunkName: "login" */ '../views/login/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
/*
  导航守卫
*/
router.beforeEach((to, from, next) => {
  const token = local.get('token')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

// 解决导航重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
