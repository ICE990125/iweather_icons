<template>
  <svg
    aria-hidden="true"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'i-icon',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import 'virtual:svg-icons-register';

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
