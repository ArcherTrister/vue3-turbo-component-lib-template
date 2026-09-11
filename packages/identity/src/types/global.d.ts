// // For this project development
// import 'vue';

/**
 * 用作给全局引入的UI组件类型提示：
 * tsconfig.json 需要添加配置："types": ["@mylib/identity/global.d.ts"]
 *
 * 或者
 * 一个全局的类型声明文件.d.ts写入：/// <reference types="@mylib/identity/global.d.ts" />
 * 类似于：/// <reference types="vite/client" /> 具体可参考playground下的env.d.ts
 */
declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    // Users: (typeof import('@mylib/identity'))['Users'];
    // VDialog: (typeof import('@mylib/identity'))['VDialog'];
    // VCard: (typeof import('@mylib/identity'))['VCard'];
    // VGradient: (typeof import('@mylib/identity'))['VGradient'];
    // VPage: (typeof import('@mylib/identity'))['VPage'];
  }
}

export {};
