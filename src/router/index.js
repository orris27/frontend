import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)
//

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
  { path: '/signup', component: () => import('@/views/login/signup'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'Dashboard',
  //   // hidden: true,
  //   hidden: false,
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     //meta: { title: '首页', icon: 'example' },
  //   }]
  // },
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
      meta: { title: 'Homepage', icon:'dashboard' }

    }]//,{ path: 'dragKanban', component: () => import('@/views/dragKanban'), hidden: true }]
  },
  {
    path: '/house',
    component: Layout,
    redirect: '/house/myHouse',
    name: 'House',
    meta: { title: 'House', icon: 'peoples' },
    children: [
      {
        path: 'myHouse',
        name: 'MyHouse',
        component: () => import('@/views/myhouse/index'),
        meta: { title: 'My House', icon: 'table' }
      },
      {
        path: 'rentedHouse',
        name: 'rentedHouse',
        component: () => import('@/views/rentedhouses/index'),
        meta: { title: 'Rented House', icon: 'drag' }
      },
      {
        path: 'repair',
        name: 'Repair',
        component: () => import('@/views/repair/index'),
        redirect: '/house/repair/apply',
        meta: { title: 'Repair', icon: 'tree' },
        children: [
          {
            path: 'apply',
            name: 'Apply',
            component: () => import('@/views/repair/apply/index'),
            meta: { title: 'Apply', icon: 'form' }

          },
          {
            path: 'myRepair',
            name: 'MyRepair',
            component: () => import('@/views/repair/myrepair/index'),
            meta: { title: 'My Repair', icon: 'form' }
          },
          {
            path: 'chart',
            name: 'chart',
            component: () => import('@/views/repair/chart/index'),
            meta: { title: 'Chart', icon: 'chart' }
          }
        ]
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
    path: '/info',
    component: Layout,
    redirect: '/info/homepage',
    name: 'Info',
    meta: { title: 'Info', icon: 'example' },
    children: [
      {
        path: 'homepage',
        name: 'Homepage',
        component: () => import('@/views/homepage/index'),
        meta: { title: 'Homepage', icon: 'form' }
      },
      // {
      //   path: 'eWallet',
      //   name: 'EWallet',
      //   component: () => import('@/views/ewallet/index'),
      //   meta: { title: 'eWallet', icon: 'form' }
      // },
      {
        path: 'notification',
        name: 'Notification',
        // component: () => import('@/views/form/index'),
        component: () => import('@/views/test/dragKanban'),
        meta: { title: 'Notification', icon: 'clipboard' }
      },
      {
        path: 'loan',
        name: 'Loan',
        component: () => import('@/views/loan/index'),
        meta: { title: 'Loan', icon: 'example' }
      },
      {
        path: 'credit',
        name: 'Credit',
        component: () => import('@/views/credit/index'),
        meta: { title: 'Credit', icon: 'theme' }
      }
    ]
  },

  {
    path: '/server',
    component: Layout,
    name: 'Server',
    meta: { title: 'Server', icon: 'guide' },
    children: [
      {
        path: 'info',
        name: 'Info',
        component: () => import('@/views/server/info/index'),
        meta: { title: 'Info', icon: 'user' }
      },
      {
        path: 'repair',
        name: 'Repair',
        component: () => import('@/views/server/repair/index'),
        meta: { title: 'Repair', icon: 'lock' }
      },
      {
        path: 'service',
        name: 'Service',
        component: () => import('@/views/server/service/index'),
        meta: { title: 'Service', icon: 'shopping' }
      }
    ]
  },
  {
    path: '/ewallet',
    component: Layout,
    redirect: '/ewallet/homepage',
    name: 'eWallet',
    meta: { title: 'eWallet', icon: 'money' },
    children: [
    {
        path: 'homepage',
        name: 'Homepage',
        // component: () => import('@/views/homepage/index'),
        component: () => import('@/views/ewallet/index'),
        meta: { title: 'eWallet', icon: 'money' }
      },
    ]
  },
  {
    path: '/service',
    component: Layout,
    // redirect: '/service/myHome',
    name: 'Service',
    meta: { title: 'Service', icon: 'international' },
    children: [
      {
        path: 'oldFamily',
        name: 'OldFamily',
        component: () => import('@/views/form/oldfamily'),
        meta: { title: 'Old Family', icon: 'table' }
      },
      {
        path: 'aid',
        name: 'Aid',
        component: () => import('@/views/form/aid'),
        meta: { title: 'Map', icon: 'tree' }
      }
    ]
  },
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
        // path: 'menu1',
        // component: () => import('@/views/nested/menu1/index'), // Parent router-view
        // name: 'Menu1',
        // meta: { title: 'Menu1' },
        // children: [
        //   {
        //     path: 'menu1-1',
        //     component: () => import('@/views/nested/menu1/menu1-1'),
        //     name: 'Menu1-1',
        //     meta: { title: 'Menu1-1' }
        //   },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  {
    path: '/handle',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'apply',
        component: () => import("@/views/repair/apply/handle")
      },
      {
        path: 'map',
        component: () => import("@/views/server/service/map")
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    meta: { title: 'External Link', icon:'link' },
    children: [
      {
        path: 'https://www.zillow.com/',
        meta: { title: 'Zillow', icon: 'guide' }
      },
      {
        path: 'https://streeteasy.com/',
        meta: { title: 'StreetEasy', icon: 'peoples' }
      },
      {
        path: 'https://www.nak  edapartments.com/',
        meta: { title: 'NakeDapartments', icon: 'peoples' }
      },
      {
        path: 'https://www.trulia.com/',
        meta: { title: 'Trulia', icon: 'guide 2' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
