import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
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
export const exampleStore = (pinia: any) => {
  return useExampleStore(pinia);
};
