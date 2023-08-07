<template>
	<div 
		class="
			absolute top-0 right-0 w-full sm:w-[284px] h-full translate-x-0 opacity-100 rounded-2xl overflow-hidden
			aria-[hidden=true]:opacity-0 aria-[hidden=true]:pointer-events-none aria-[hidden=true]:translate-x-full
			transition-[opacity,transform] duration-500
		"
		:aria-hidden="!injectedValue.isOpen.value"
	>
		<div 
			v-bind="excludeAttrs($attrs, ['class'])"
			:class="cn(`
				w-full h-full relative bg-glass bg-inherit
			`, $attrs.class as string)"
		>
			{{ injectedValue.isOpen }}
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { inject } from 'vue';
import { SHEET_INJECTION_KEY, SheetProvideValue } from './Sheet.vue';

const injectedValue = inject(SHEET_INJECTION_KEY) as SheetProvideValue;
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>