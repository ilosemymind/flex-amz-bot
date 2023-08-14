<template>
	<button
		v-bind="excludeAttrs($attrs, ['class', 'type', 'role'])"
		:class="cn(``, $attrs.class as string)"
		type="button"
		role="option"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { InjectionKey, inject, provide } from 'vue';
import { SELECT_INJECTION_KEY, type SelectProvideValue } from "./Select.vue";

export interface SelectItemProps {
  value: unknown;
  id?: string;
  name?: string;
  onSelect?: void;
}

const props = defineProps<SelectItemProps>();

const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const handleClick = () => {
	if(injectedValue) {
		injectedValue.changeModelValue(props.value);
		injectedValue.hideOptions();
	}
}

provide<SelectItemProvideValue>(SELECT_ITEM_INJECTION_KEY, {
  value: props.value,
});
</script>

<script lang="ts">
export type SelectItemProvideValue = {
  value: unknown;
};

export const SELECT_ITEM_INJECTION_KEY = Symbol() as InjectionKey<SelectItemProvideValue>; 

export default {
	inheritAttrs: false
}
</script>