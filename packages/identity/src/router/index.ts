import { CustomRouteRecordRaw } from '@mylib/core';
// import ExampleView from '../views/ExampleView.vue';
// import ExampleList from '../views/ExampleList.vue';
// import ExampleDetail from '../views/ExampleDetail.vue';

export const routes: CustomRouteRecordRaw[] = [
  {
    path: '/users',
    name: 'users',
    //component: ExampleView,
    //component: () => import('@/views/ExampleView.vue'),
    component: () => import('../views/ExampleView.vue'),
    meta: {
      title: '示例模块',
      icon: 'icon-apps',
      order: 1
    },
    children: [
      // {
      //   path: 'list',
      //   name: 'example-list',
      //   component: ExampleList,
      //   meta: {
      //     title: '列表页面',
      //     icon: 'icon-list',
      //     permission: ['example:list:view']
      //   }
      // },
      // {
      //   path: 'detail/:id',
      //   name: 'example-detail',
      //   component: ExampleDetail,
      //   meta: {
      //     title: '详情页面',
      //     hideInMenu: true // 在菜单中隐藏详情页
      //   }
      // }
    ]
  }
]; 
