<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    :class="[
      'inline-flex',
      'items-center',
      'justify-center',
      sizeClass,
      colorClass
    ]"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import * as ArcoIcons from '@arco-design/web-vue/es/icon';

interface BaseIconProps {
  /** 图标类型名称 */
  type: string;
  /** 图标大小: 'small' | 'medium' | 'large' | 'custom' */
  size?: 'small' | 'medium' | 'large' | 'custom';
  /** 图标颜色: 'primary' | 'success' | 'warning' | 'danger' | 'info' */
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

const props = defineProps<BaseIconProps>();

/**
 * 将图标名称转换为驼峰命名
 * 例如：'user-filled' -> 'IconUserFilled'
 */
const formatIconName = (name: string): string => {
  return 'Icon' + name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

// 计算图标组件
const iconComponent = computed(() => {
  const iconName = formatIconName(props.type);
  return (ArcoIcons as Record<string, any>)[iconName];
});

// 计算尺寸类名
const sizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-sm';
    case 'large':
      return 'text-lg';
    case 'custom':
      return '';
    default:
      return 'text-base';
  }
});

// 计算颜色类名
const colorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'text-blue-600';
    case 'success':
      return 'text-green-600';
    case 'warning':
      return 'text-yellow-600';
    case 'danger':
      return 'text-red-600';
    case 'info':
      return 'text-gray-600';
    default:
      return 'text-current';
  }
});
</script>
