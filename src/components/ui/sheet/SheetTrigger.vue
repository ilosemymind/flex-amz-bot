<template>
	<div 
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(``, $attrs.class as string)" 
		@click="injectedValue.toggleOpen"
	>
		<slot>
			<div 
				class="flex flex-col gap-[5px] group transition duration-300 cursor-pointer"
			>
				<span 
					class="w-8 h-[5px] bg-white rounded-full transition-[inherit]"
					:class="{
						'-rotate-45 translate-y-[10px]': injectedValue.isOpen.value
					}"
				></span>
				<span 
					class="w-8 h-[5px] bg-white rounded-full transition-[inherit] group-hover:-translate-x-4"
					:class="{
						'group-hover:!-translate-x-12 opacity-0': injectedValue.isOpen.value
					}"
				></span>
				<span 
					class="w-8 h-[5px] bg-white rounded-full transition-[inherit]"
					:class="{
						'rotate-45 -translate-y-[10px]': injectedValue.isOpen.value
					}"
				></span>
			</div>
		</slot>
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { SHEET_INJECTION_KEY, SheetProvideValue } from './Sheet.vue';
import { cn, excludeAttrs } from '@/components/utils';

const injectedValue = inject(SHEET_INJECTION_KEY) as SheetProvideValue;
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>