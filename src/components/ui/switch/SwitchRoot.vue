<template>
	<div
		:class="cn(`
			relative w-[80px] h-[38px] bg-white rounded-full flex items-center
			data-[disabled]:opacity-25 
		`, $attrs.class as string)"
		role="switch"
		:aria-checked="modelValue"
		:data-state="modelValue ? 'checked' : 'unchecked'"
		:data-disabled="props.disabled ? '' : undefined"
	>
		<slot></slot>
		<input
			v-bind="modelValue"
			type="checkbox"
			:id="props.id"
			class="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
			:name="props.name"
			aria-hidden="true"
			:disabled="props.disabled"
			:required="props.required"
			:data-state="modelValue ? 'checked' : 'unchecked'"
			@click="toggleModelValue"
			@keydown="handleKeydown"
		/>
	</div>
</template>

<script setup lang="ts">
import { InjectionKey, Ref, provide, toRefs } from 'vue';
import { cn } from '@/components/utils';

const modelValue = defineModel<boolean>({ required: true });
const toggleModelValue = () => { 
	modelValue.value = !modelValue.value;
}

const props = defineProps({
	id: { type: String, default: null },
	name: { type: String, default: null },
	required: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false }
});

const { disabled } = toRefs(props);

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    toggleModelValue();
  }
}

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  checked: modelValue,
  toggleChecked: toggleModelValue,
  disabled
});
</script>

<script lang="ts">
export const SWITCH_INJECTION_KEY = Symbol() as InjectionKey<SwitchProvideValue>;

export interface SwitchProvideValue {
  checked: Readonly<Ref<boolean>>;
	toggleChecked: () => void;
  disabled: Ref<boolean>;
}

export default {
	inheritAttrs: false
}
</script>