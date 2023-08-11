<template>
	<div
		:class="cn(`
			relative w-full flex items-center gap-2 px-5 text-sm bg-white border border-black rounded-xl cursor-text
			disabled:opacity-50
		`, $attrs.class as string)" 
	>
		<slot name="prepend"></slot>
		<input 
			v-model="modelValue"
			v-bind="excludeAttrs($attrs, ['class'])"
			class="w-full py-2 text-black bg-transparent outline-none cursor-[inherit] placeholder:text-gray-400"
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