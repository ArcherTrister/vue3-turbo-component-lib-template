import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      //'@mylib/identity': resolve(__dirname, '../web/node_modules/@mylib/identity/dist/esm/index.mjs'),
      //'~@mylib/identity': resolve(import.meta.dirname, '../packages/identity/src'),
      // '~': resolve(import.meta.dirname, '../packages/identity/src'),
      //'~@mylib/identity': resolve(import.meta.dirname, '../packages/identity/src'),
      '@mylib': resolve(__dirname, 'node_modules/@mylib'),
    },
  },
  optimizeDeps: {
    include: ['@mylib/identity'], // 预构建包含的依赖
  },
  build: {
    commonjsOptions: {
      include: [/@mylib\/.*/, /node_modules/], // 支持 CommonJS 模块的路径
    },
  },
});
