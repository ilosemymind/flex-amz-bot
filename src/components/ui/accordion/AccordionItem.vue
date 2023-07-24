<template>
	<div class="flex flex-col px-10 py-6 bg-gray-850 border-blue-600 border rounded-2xl">
		<slot :isOpen="isOpen"></slot>
	</div>
</template>

<script setup lang="ts">
import { ComputedRef, InjectionKey, Ref, computed, inject, provide, toRefs } from 'vue';
import { ACCORDION_STATE_INJECTION_KEY, AccordionStateProvideValue } from './AccordionContainer.vue';

const props = defineProps({
	value: { type: String, required: true },
	disabled: { type: Boolean, default: false }
});

const { disabled } = toRefs(props);

const injectedStateValue = inject(ACCORDION_STATE_INJECTION_KEY) as AccordionStateProvideValue;

const isOpen = computed(() => {
	return injectedStateValue.value.value.includes(props.value);
});

provide(ACCORDION_ITEM_INJECTION_KEY, {
	value: props.value,
	disabled,
	isOpen
});
</script>

<script lang="ts">
export interface AccordionItemProvideValue {
  value: string
  disabled?: Ref<boolean>
	isOpen: ComputedRef<boolean>
}

export const ACCORDION_ITEM_INJECTION_KEY = Symbol() as InjectionKey<AccordionItemProvideValue>;
</script>