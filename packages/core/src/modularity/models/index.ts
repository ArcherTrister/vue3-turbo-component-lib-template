import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import type { Pinia } from 'pinia';


// 扩展路由配置
export interface CustomRouteRecordRaw extends Omit<RouteRecordRaw, 'children'> {
  meta?: {
    title?: string;          // 菜单标题
    icon?: string;           // 菜单图标
    hideInMenu?: boolean;    // 是否在菜单中隐藏
    order?: number;          // 菜单排序
    permission?: string[];   // 权限配置
  };
  children?: CustomRouteRecordRaw[];
}

export interface ModuleConfig {
  name: string;
  routes?: CustomRouteRecordRaw[];
  // store?: any;
  // components?: any[];
  store?: (pinia: Pinia) => any;
  components?: Record<string, any>;
  dependencies?: string[];
  version?: string;
}

export interface MenuItemType {
  key: string;
  title: string;
  icon?: string;
  children?: MenuItemType[];
  path: string;
  permission?: string[];
}

export interface ModuleInstance {
  install: (app: App, options?: any) => Promise<void>;
  config: ModuleConfig;
}
