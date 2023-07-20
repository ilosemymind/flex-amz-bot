<template>
	<div
		:class="cn(`
			relative flex items-center gap-2 text-sm border-b border-black cursor-text
			before:content-[''] before:absolute before:bottom-[-1px] before:top-[auto] before:left-0 before:right-[100%] before:h-[2px] before:bg-black before:transition-all before:duration-300
			[&:has(input:focus)]:before:right-0 disabled:opacity-70
		`, $attrs.class as string)" 
	>
		<slot name="prepend"></slot>
		<input 
			v-model="modelValue"
			v-bind="excludeAttrs($attrs, ['class'])"
			class="w-full py-2 bg-transparent outline-none cursor-[inherit]"
		/>
		<slot name="append"></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '../utils';

const modelValue = defineModel();
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>