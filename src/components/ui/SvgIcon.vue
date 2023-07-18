<template>
  <component
		v-bind="$attrs"
    :is="dynamicComponent"
		:stroke-opacity="opacity"
		:fill-opacity="opacity"
  />
</template>

<script setup lang="ts">
import { computed, toRefs } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const props = defineProps({
	name: { type: String, required: true },
	opacity: { type: Number, default: 1 },
});

const { name } = toRefs(props);

const dynamicComponent = computed(() => {
	const iconName = name.value.charAt(0).toUpperCase() + name.value.slice(1) + 'Icon';

  return defineAsyncComponent(() => import(`../icons/${iconName}.vue`));
});
</script>