import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    // hidden: true,
    hidden: false,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'example' },
    }]
  },

  {
    path: '/home',
    component: Layout,
    redirect: '/home/myHome',
    name: 'Home',
    meta: { title: '房屋', icon: 'example' },
    children: [
      {
        path: 'myHome',
        name: 'MyHome',
        component: () => import('@/views/table/index'),
        meta: { title: '我的房屋', icon: 'table' }
      },
      {
        path: 'repair',
        name: 'Repair',
        component: () => import('@/views/tree/index'),
        meta: { title: '房屋维修', icon: 'tree' }
      }
    ]
  },
  // {
  //   path: '/center',
  //   component: Layout,
  //   redirect: '/center/ho',
  //   name: 'Home',
  //   meta: { title: '房屋', icon: 'example' },
  //   children: [
  //     {
  //       path: 'myHome',
  //       name: 'MyHome',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '我的房屋', icon: 'table' }
  //     },
  //     {
  //       path: 'repair',
  //       name: 'Repair',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '房屋维修', icon: 'tree' }
  //     }
  //   ]
  // },
  //
  {
    path: '/center',
    component: Layout,
    name: 'Center',
    meta: { title: '个人中心', icon: "example" },
    children: [
      {
        path: 'homepage',
        name: 'Homepage',
        component: () => import('@/views/table/index'),
        meta: { title: '我的主页', icon: 'form' }
      },
      {
        path: 'wallet',
        name: 'Wallet',
        component: () => import('@/views/form/index'),
        meta: { title: '钱包', icon: 'form' }
      },
      {
        path: 'notification',
        name: 'Notification',
        component: () => import('@/views/form/index'),
        meta: { title: '通知', icon: 'form' }
      },
      {
        path: 'loan',
        name: 'Loan',
        component: () => import('@/views/form/index'),
        meta: { title: '贷款', icon: 'form' }
      },
      {
        path: 'credit',
        name: 'Credit',
        component: () => import('@/views/form/index'),
        meta: { title: '信用分', icon: 'form' }
      },
    ]
  },


  {
    path: '/service',
    component: Layout,
    // redirect: '/service/myHome',
    name: 'Service',
    meta: { title: '其他服务', icon: 'example' },
    children: [
      {
        path: 'oldFamily',
        name: 'OldFamily',
        component: () => import('@/views/form/oldfamily'),
        meta: { title: '老年家庭申请', icon: 'table' }
      },
      {
        path: 'aid',
        name: 'Aid',
        component: () => import('@/views/form/aid'),
        meta: { title: '援助申请', icon: 'tree' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
