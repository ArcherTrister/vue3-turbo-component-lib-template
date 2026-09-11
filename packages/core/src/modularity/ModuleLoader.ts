import type { ModuleInstance } from './models';

export class ModuleLoader {
  private static instance: ModuleLoader;
  private moduleCache: Map<string, Promise<ModuleInstance>> = new Map();
  private moduleImporters: Record<string, () => Promise<any>> = {};

  private constructor() { }

  static getInstance(): ModuleLoader {
    if (!ModuleLoader.instance) {
      ModuleLoader.instance = new ModuleLoader();
    }
    return ModuleLoader.instance;
  }

  /**
   * 注册模块导入器
   * @param moduleName 模块名称
   * @param importer 导入函数
   */
  registerModuleImporter(moduleName: string, importer: () => Promise<any>) {
    this.moduleImporters[moduleName] = importer;
  }

  /**
   * 加载模块
   * @param moduleName 模块名称
   * @returns 模块实例
   */
  async loadModule(moduleName: string): Promise<ModuleInstance> {
    if (this.moduleCache.has(moduleName)) {
      return this.moduleCache.get(moduleName)!;
    }

    const importer = this.moduleImporters[moduleName];
    if (!importer) {
      throw new Error(`No importer registered for module: ${moduleName}`);
    }

    const modulePromise = this.importModule(moduleName, importer);
    this.moduleCache.set(moduleName, modulePromise);
    return modulePromise;
  }

  /**
   * 批量加载模块
   * @param moduleNames 模块名称数组
   * @returns 模块实例数组
   */
  async loadModules(moduleNames: string[]): Promise<ModuleInstance[]> {
    return Promise.all(moduleNames.map(name => this.loadModule(name)));
  }

  private async importModule(
    moduleName: string,
    importer: () => Promise<any>
  ): Promise<ModuleInstance> {
    try {
      const module = await importer();
      return module.default;
    } catch (error) {
      console.error(`Failed to load module: ${moduleName}`, error);
      throw error;
    }
  }
}
