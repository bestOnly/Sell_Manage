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
    meta: { title: '后台首页' },
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',

        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/dashboard/Index.vue')
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

const syncRouter = [
  {
    path: '/',
    name: 'Index',
    // meta: { title: '后台首页' },
    component: Index,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        visible: true,
        meta: { title: '后台首页' },
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/dashboard/Index.vue')
      },
      {
        path: '/order',
        meta: { title: '订单管理' },
        visible: true,
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/order/Index.vue'),
        redirect: '/order/Manage',
        children: [
          {
            path: '/order/Manage',
            visible: true,
            // 懒加载
            meta: { title: '订单详情' },
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/order/orderManage.vue'
              )
          },
          {
            path: '/order/update/:id',
            meta: { title: '修改订单' },
            // 设置props 为true 可以通过props 获取传来的参数
            props: true,
            // visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/order/updateOrder.vue'
              )
          }
        ]
      },
      {
        path: '/product',
        meta: { title: '商品管理' },
        visible: true,
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/product/Index.vue'),
        redirect: '/product/list',
        children: [
          {
            path: '/product/list',
            meta: { title: '商品列表' },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/product/productList.vue'
              )
          },
          {
            path: '/product/add',
            meta: { title: '商品添加' },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/product/productAdd.vue'
              )
          },
          {
            path: '/product/cate',
            meta: { title: '商品分类' },
            visible: true,
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
        meta: { title: '管理店铺' },
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/store/Index.vue'),
        redirect: '/store/storeManage',
        visible: true,
        children: [
          {
            path: '/store/storeManage',
            meta: { title: '店铺管理' },
            visible: true,
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
        visible: true,
        meta: { title: '账户管理', role: ['super', 'normal'] },
        redirect: '/account/accountList',
        // 懒加载
        component: () =>
          import(/* webpackchunkName: "login" */ '../views/account/Index.vue'),
        children: [
          {
            path: '/account/accountList',
            meta: { title: '账户列表', role: ['super'] },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/accountList.vue'
              )
          },
          {
            path: '/account/add',
            meta: { title: '账户添加', role: ['super'] },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/addAdmin.vue'
              )
          },
          {
            path: '/account/updatePwd',
            meta: { title: '修改密码' },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/account/updatePwd.vue'
              )
          },
          {
            path: '/account/myCenter',
            meta: { title: '个人中心' },
            visible: false,
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
        meta: { title: '销售统计', role: ['super'] },
        redirect: '/saleAccount/goodsAccount',
        visible: true,
        // 懒加载
        component: () =>
          import(
            /* webpackchunkName: "login" */ '../views/saleAccount/Index.vue'
          ),
        children: [
          {
            path: '/saleAccount/goodsAccount',
            meta: { title: '商品统计' },
            visible: true,
            // 懒加载
            component: () =>
              import(
                /* webpackchunkName: "login" */ '../views/saleAccount/goodsAccount.vue'
              )
          },
          {
            path: '/saleAccount/orderAccount',
            meta: { title: '订单统计' },
            visible: true,
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
    path: '/404',
    meta: { title: '404页面' },
    visible: false,
    // 懒加载
    component: () =>
      import(/* webpackchunkName: "login" */ '../views/dashboard/404.vue')
  },
  {
    path: '/*',
    meta: { title: '404页面' },
    visible: false,
    // 懒加载
    component: () =>
      import(/* webpackchunkName: "login" */ '../views/dashboard/404.vue')
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

// 动态路由（权限计算）
createRoute()
export function createRoute() {
  const role = local.get('role')
  if (!role) return
  const finalrouter = calcRouter(syncRouter[0].children, role)
  syncRouter[0].children = finalrouter
  console.log(finalrouter)
  // 动态路由关键方法
  router.addRoutes(syncRouter)

  // 菜单计算
  const cmenu = calcMenu(finalrouter)
  local.set('cmenu', JSON.stringify(cmenu))
  console.log(cmenu)
}
// 计算路由
function calcRouter(router, role) {
  return router.filter(item => {
    // console.log(item)
    if (hasPermiss(item, role)) {
      if (item.children && item.children.length > 0) {
        item.children = calcRouter(item.children, role)
      }
      // console.log(item)
      return true
    } else {
      return false
    }
  })
}
// 鉴权
function hasPermiss(item, role) {
  if (item.meta && item.meta.role) {
    return item.meta.role.includes(role)
  } else {
    return true
  }
}

// 计算菜单
function calcMenu(routers) {
  return routers.filter(item => {
    if (item.visible) {
      if (item.children && item.children.length > 1) {
        item.children = calcMenu(item.children)
      }
      return true
    } else {
      return false
    }
  })
}
