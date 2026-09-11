<template>
    <div class="example-view">
      <h1 class="text-3xl font-bold mb-6">Example Module</h1>
      <users-component />
      <div class="mt-4">
        <p>Store value: {{ counter }}</p>
        <a-button type="primary" @click="increment">
          Increment
        </a-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useExampleStore } from '../store';
  import UsersComponent from '../components/Users/Users.vue';
  
  const store = useExampleStore();
  const counter = computed(() => store.counter);
  const increment = () => store.increment();
  </script>
