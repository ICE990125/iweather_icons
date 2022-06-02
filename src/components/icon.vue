<template>
  <svg
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String, // dir-name or name
    required: true,
  },
  size: {
    type: Number,
    default: 50,
  },
  type: {
    type: String,
    default: 'qweather',
  },
});

const symbolId = computed(() => {
  return `#${props.prefix}-${props.type}-${props.name}`;
});
</script>
