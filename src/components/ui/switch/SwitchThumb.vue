<template>
	<span
		:class="cn(`
			absolute w-[var(--size)] h-[var(--size)] flex justify-center items-center bg-gray-400 rounded-full overflow-hidden
			transition-[left,background] left-[var(--padding)] data-[state=checked]:left-[calc(100%-var(--padding)-var(--size))] data-[state=checked]:bg-sky-200
		`, $attrs.class as string)"
		:data-state="injectedValue.checked.value ? 'checked' : 'unchecked'"
		:style="`--size: ${size}; --padding: ${padding}`"
	>
		<slot></slot>
	</span>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { SWITCH_INJECTION_KEY, SwitchProvideValue } from './SwitchRoot.vue';
import { cn } from '@/components/utils';

const injectedValue = inject(SWITCH_INJECTION_KEY) as SwitchProvideValue;

defineProps({
	size: { type: String, default: '26px' }, 
	padding: { type: String, default: '6px' } 
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>