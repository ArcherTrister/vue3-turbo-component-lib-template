<template>
  <div class="example-component">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <a-button type="primary" @click="count++">
      Count is: {{ count }}
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = 'Example Component';
const count = ref(0);
</script>
