import type { ModuleConfig, ModuleInstance } from './models';
import { App } from 'vue';
import { Pinia } from 'pinia';

export abstract class BaseModule implements ModuleInstance {
  abstract config: ModuleConfig;
  protected pinia: Pinia | null = null;

  async install(app: App, options?: { pinia?: Pinia }) {
    console.log(`Installing module: ${this.config.name}`);

    // 保存 Pinia 实例
    if (options?.pinia) {
      this.pinia = options.pinia;
    }

    // 注册组件
    if (this.config.components) {
      Object.entries(this.config.components).forEach(([name, component]) => {
        app.component(name, component);
      });
    }

    // 注册 store
    if (this.config.store && this.pinia) {
      this.config.store(this.pinia);
    }

    await this.onInstall(app, options);
  }

  // @ts-ignore
  protected async onInstall(app: App, options?: any) { }
} 
