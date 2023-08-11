<template>
	<input 
		v-bind="excludeAttrs($attrs, ['class', 'type'])"
		:class="cn(`
			min-w-[1.15em] min-h-[1.15em] w-[1.15em] h-[1.15em] grid place-items-center m-0 bg-transparent appearance-none 
			border border-solid border-[currentColor] cursor-pointer rounded-full opacity-60
			before:w-[0.6em] before:h-[0.6em] before:content-[''] before:rounded-full before:scale-0 before:transition-all before:shadow-[inset_1em_1em_currentColor]
			checked:opacity-100 checked:before:scale-100 disabled:opacity-30 disabled:cursor-not-allowed
		`, $attrs.class as string)" 
		type="radio"
	>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>