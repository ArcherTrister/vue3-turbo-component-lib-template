import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import ArcoVue from '@arco-design/web-vue';
import { ModuleManager } from '@mylib/core';

import App from './App.vue';
import { routes } from './router';
import { mainStore } from './store';

import '@arco-design/web-vue/dist/arco.css';
import './assets/styles/tailwind.css';

// import identityModule from '@mylib/identity';
// console.log(identityModule)

const app = createApp(App);
const pinia = createPinia();
mainStore(pinia);
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

// 初始化模块管理器
//const moduleManager = ModuleManager.getInstance(app, router, store);// createModuleManager(app, router, store);
const moduleManager = ModuleManager.init(app, router, pinia);

//import identity from '@mylib/identity'
//console.log(identity);
// import(/* @vite-ignore */ '@mylib/identity').then((identity) => {
//   console.log(identity);
// });

// const identity = await import(/* @vite-ignore */ '@mylib/identity');
// console.log(identity);

const load = async (moduleName: string) => {
  const module = await import(moduleName);
  console.log(module);
  console.log(222);
}

load('@mylib/identity');

const test: string = '@mylib/identity';
const test2 = await import(test);
console.log(test2);

console.log(333)


// 加载模块
const loadModules = async () => {
  try {
    // 这里可以从配置或API获取要加载的模块列表
    // const modules = [
    //   '@mylib/identity'
    // ];
    // console.log(111)
    // for (const moduleName of modules) {
    //   //const module = await import(moduleName);
    //   const module = await import(/* @vite-ignore */ moduleName);
    //   console.log(module);
    //   await moduleManager.registerModule(module.default);
    // }
    // const identityModule = '@mylib/identity';
    // const identity = await import(identityModule);
    // console.log(identity);

    // 使用模块映射对象来处理动态导入
    // const moduleMap = {
    //   'identity': () => import('@mylib/identity')
    // };

    // 这里可以从配置或API获取要加载的模块列表
    const modules = [
      'identity'
    ];

    for (const moduleName of modules) {
      const fullPath = `@mylib/${moduleName}`;
      console.log('Attempting to import:', fullPath);
      try {
        const module = await import(/* @vite-ignore */ fullPath);
        await moduleManager.registerModule(module.default || module);
      } catch (error) {
        console.error(`Failed to load module ${moduleName}:`, error);
      }
    }

    for (const moduleName of modules) {
      // 使用映射对象来导入模块
      // const importModule = moduleMap[moduleName as keyof typeof moduleMap];
      // if (importModule) {
      //   const module = await importModule();
      //   await moduleManager.registerModule(module.default);
      // }

      console.log(`@mylib/${moduleName}`);
      // const resolvedPath = await import.meta.resolve(`@mylib/${moduleName}`, import.meta.url);
      // //const module = await import(resolvedPath);
      // console.log(resolvedPath);

      const baseUrl = new URL('.', import.meta.url).href;
      const modulePath = new URL(`@mylib/${moduleName}`, baseUrl).href;
      console.log(modulePath);
      const module1 = await import(/* @vite-ignore */ modulePath);

      //const module = await import('@mylib/identity');
      debugger;

      const module = await import(/* @vite-ignore */ `@mylib/${moduleName}`);
      await moduleManager.registerModule(module.default);
    }
  } catch (error) {
    console.error('Failed to load modules:', error);
  }
};

// 加载模块后挂载应用
loadModules().then(() => {
  app.use(router);
  app.use(pinia);
  app.use(ArcoVue);
  app.mount('#app');
});
