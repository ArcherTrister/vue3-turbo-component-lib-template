<template>
  <a-layout class="h-screen">
    <a-layout-sider collapsible>
      <div class="logo p-4 text-white text-xl font-bold">
        Base App
      </div>
      <a-menu
        :selected-keys="[currentRoute]"
        :default-open-keys="openKeys"
        @menu-item-click="handleMenuClick"
      >
        <template v-for="item in menus" :key="item.key">
          <!-- 递归渲染菜单项 -->
          <template v-if="item.children">
            <a-sub-menu :key="item.key">
              <template #icon>
                <icon-component :type="item.icon!" />
              </template>
              <template #title>{{ item.title }}</template>
              <menu-items :items="item.children" />
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.key">
              <template #icon>
                <icon-component :type="item.icon!" />
              </template>
              {{ item.title }}
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    
    <a-layout>
      <a-layout-header>
        <div class="text-white">
          {{ currentTitle }}
        </div>
      </a-layout-header>
      
      <a-layout-content class="p-6">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, computed, defineComponent, type PropType } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ModuleManager, type MenuItemType } from '@mylib/core';
import { Menu, MenuItem, SubMenu, Layout, LayoutHeader, LayoutContent, LayoutSider } from '@arco-design/web-vue';
import IconComponent from '../components/BaseIcon.vue';

// 更新类型引用
const MenuItems = defineComponent({
  name: 'MenuItems',
  props: {
    items: {
      type: Array as PropType<MenuItemType[]>,
      required: true
    }
  },
  components: {
    IconComponent
  },
  template: `
    <template v-for="item in items" :key="item.key">
      <a-sub-menu v-if="item.children" :key="item.key">
        <template #icon>
          <icon-component v-if="item.icon" :type="item.icon" />
        </template>
        <template #title>{{ item.title }}</template>
        <menu-items :items="item.children" />
      </a-sub-menu>
      <a-menu-item v-else :key="item.key">
        <template #icon>
          <icon-component v-if="item.icon" :type="item.icon" />
        </template>
        {{ item.title }}
      </a-menu-item>
    </template>
  `
});

const router = useRouter();
const route = useRoute();

const moduleManager = ModuleManager.getInstance();
const menus = computed(() => moduleManager.getMenus());

const currentRoute = computed(() => route.name as string);
const openKeys = ref<string[]>([]);

// 获取当前路由的标题
const currentTitle = computed(() => {
  const findTitle = (items: MenuItemType[]): string => {
    for (const item of items) {
      if (item.key === currentRoute.value) {
        return item.title;
      }
      if (item.children) {
        const title = findTitle(item.children);
        if (title) return title;
      }
    }
    return '';
  };
  
  return findTitle(menus.value);
});

const handleMenuClick = (key: string) => {
  const findPath = (items: MenuItemType[]): string | undefined => {
    for (const item of items) {
      if (item.key === key) {
        return item.path;
      }
      if (item.children) {
        const path = findPath(item.children);
        if (path) return path;
      }
    }
  };
  
  const path = findPath(menus.value);
  if (path) {
    router.push(path);
  }
};
</script>

<style scoped>
.logo {
  height: 64px;
  line-height: 64px;
  background: rgba(255, 255, 255, 0.1);
  white-space: nowrap;
  overflow: hidden;
}
</style> 
