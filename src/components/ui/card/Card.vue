<template>
	<div 
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(`
			w-full flex justify-center items-center gap-4 p-4 text-white bg-gray-850 
			border border-blue-600 rounded-3xl overflow-hidden
		`, $attrs.class as string)" 
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>