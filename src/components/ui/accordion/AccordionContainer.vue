<template>
	<div 
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(`text-white text-lg overflow-scroll`, $attrs.class as string)"
	>
		<PerfectScrollbar
			:options="{ wheelPropagation: false, suppressScrollX: true }"
			class="h-full flex flex-col gap-9 no-scrollbar"
		>
			<slot></slot>
		</PerfectScrollbar>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { InjectionKey, PropType, Ref, provide, ref } from 'vue';

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const props = defineProps({
	type: { type: String as PropType<'single' | 'multiple'>, required: true }
});

const value = ref<string[]>([]);

const onItemOpen = (item: string) => {
	if(props.type === 'single') {
		value.value = [ item ];
	} else {
		value.value.push(item);
	}
}

const onItemClose = (item: string) => {
	if(props.type === 'single') {
		value.value = [];
	} else {
		value.value = value.value.filter(i => i !== item);
	}
}

provide<AccordionStateProvideValue>(ACCORDION_STATE_INJECTION_KEY, {
	value,
	onItemOpen,
	onItemClose
});
</script>

<script lang="ts">
export interface AccordionStateProvideValue {
  value: Ref<string[]>;
  onItemOpen(value: string): void;
  onItemClose(value: string): void;
}

export const ACCORDION_STATE_INJECTION_KEY = Symbol() as InjectionKey<AccordionStateProvideValue>;

export default {
	inheritAttrs: false
}
</script>