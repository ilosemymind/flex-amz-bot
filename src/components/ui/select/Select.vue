<template>
	<div ref="selectRef">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { InjectionKey, Ref, provide, ref } from 'vue';
import { useFloating, flip } from '@floating-ui/vue';
import { onClickOutside } from '@vueuse/core';

const modelValue = defineModel<unknown>();
const changeModelValue = (newValue: unknown) => { 
	modelValue.value = newValue;
}

const selectRef = ref();

const selectedElement = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();
const contentElement = ref<HTMLElement>();
const isOpen = ref(false);

useFloating(triggerElement, contentElement, {
  middleware: [flip()],
});

const showOptions = () => { isOpen.value = true; }
const hideOptions = () => { isOpen.value = false; }

provide<SelectProvideValue>(SELECT_INJECTION_KEY, {
	triggerElement,
	contentElement,
  selectedElement: selectedElement,
  changeSelected: (value: HTMLElement) => {
    selectedElement.value = value;
    // selectedElement.value!.focus();
  },
  modelValue,
  changeModelValue: changeModelValue,
  isOpen,
  showOptions,
  hideOptions
});

onClickOutside(selectRef, hideOptions);
</script>

<script lang="ts">
export type SelectProvideValue = {
	triggerElement: Ref<HTMLElement | undefined>
	contentElement: Ref<HTMLElement | undefined>
	selectedElement: Ref<HTMLElement | undefined>
	changeSelected: (value: HTMLElement) => void
  modelValue: Readonly<Ref<unknown | undefined>>
	changeModelValue: (value: unknown) => void
  isOpen: Readonly<Ref<boolean>>
	showOptions(): void;
	hideOptions(): void;
}

export const SELECT_INJECTION_KEY = Symbol() as InjectionKey<SelectProvideValue>; 
</script>