import type { App } from 'vue';
import type { Router, RouteRecordRaw } from 'vue-router';
import type { Pinia } from 'pinia';
import type { ModuleInstance, CustomRouteRecordRaw, MenuItemType } from './models';

export class ModuleManager {
  private static instance: ModuleManager;
  private modules: ModuleInstance[] = [];
  private app: App | null = null;
  private router: Router | null = null;
  private pinia: Pinia | null = null;

  private constructor() { }

  static init(app: App, router: Router, pinia: Pinia): ModuleManager {
    if (!ModuleManager.instance) {
      ModuleManager.instance = new ModuleManager();
      ModuleManager.instance.app = app;
      ModuleManager.instance.router = router;
      ModuleManager.instance.pinia = pinia;
    }
    return ModuleManager.instance;
  }

  static getInstance(): ModuleManager {
    if (!ModuleManager.instance) {
      throw new Error("ModuleManager not initialized, Please use ModuleManager.init() in main.ts");
    }
    return ModuleManager.instance;
  }

  // setApp(app: App) {
  //   this.app = app;
  // }

  // setRouter(router: Router) {
  //   this.router = router;
  // }

  // setPinia(pinia: Pinia) {
  //   this.pinia = pinia;
  // }

  public async registerModule(module: ModuleInstance) {
    if (!this.app || !this.router || !this.pinia) {
      throw new Error('App, Router or Pinia not initialized');
    }

    // 注册模块
    await module.install(this.app, { pinia: this.pinia });

    // 注册路由
    if (module.config.routes) {
      module.config.routes.forEach(route => {
        this.router!.addRoute(this.convertToRouteRecord(route));
      });
    }

    this.modules.push(module);
  }

  // public getModules(): ModuleInstance[] {
  //   return Array.from(this.modules.values());
  // }

  // 获取所有模块的菜单
  // public getMenus() {
  //   return this.modules.flatMap(module => module.config.routes || []);
  // }

  public getMenus(): MenuItemType[] {
    const allMenus: MenuItemType[] = [];

    this.modules.forEach(module => {
      if (module.config.routes) {
        const moduleMenus = this.routesToMenuItems(module.config.routes);
        allMenus.push(...moduleMenus);
      }
    });

    return allMenus;
  }

  private convertToRouteRecord(route: CustomRouteRecordRaw): RouteRecordRaw {
    const { components, ...rest } = route;
    return rest as RouteRecordRaw;
  }

  // 将路由配置转换为菜单项
  private routesToMenuItems(routes: CustomRouteRecordRaw[], parentPath = ''): MenuItemType[] {
    const menuItems: MenuItemType[] = [];

    routes.forEach(route => {
      // 跳过在菜单中隐藏的路由
      if (route.meta?.hideInMenu) {
        return;
      }

      const fullPath = parentPath ? `${parentPath}/${route.path}` : route.path;

      const menuItem: MenuItemType = {
        key: route.name as string,
        title: route.meta?.title || route.name as string,
        icon: route.meta?.icon,
        path: fullPath,
        permission: route.meta?.permission
      };

      // 处理子路由
      if (route.children && route.children.length > 0) {
        menuItem.children = this.routesToMenuItems(route.children, fullPath);
      }

      menuItems.push(menuItem);
    });

    // 根据order排序
    return menuItems.sort((a, b) => {
      const orderA = routes.find(r => r.name === a.key)?.meta?.order || 0;
      const orderB = routes.find(r => r.name === b.key)?.meta?.order || 0;
      return orderA - orderB;
    });
  }
}
