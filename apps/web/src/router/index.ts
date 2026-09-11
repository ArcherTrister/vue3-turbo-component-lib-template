import type { RouteRecordRaw } from 'vue-router';
// import { CustomRouteRecordRaw } from '@mylib/core';
import MainLayout from '@/layouts/MainLayout.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: []
  }
];
