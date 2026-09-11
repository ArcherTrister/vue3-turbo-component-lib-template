import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++;
    }
  }
});

// 导出 store 工厂函数
export const mainStore = (pinia: any) => {
  return useMainStore(pinia);
};
