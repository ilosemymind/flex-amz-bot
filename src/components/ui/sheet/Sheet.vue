<template>
	<div class="contents" ref="sheetRef">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { InjectionKey, Ref, provide, ref } from 'vue';

const isOpen = ref(false);
const toggleOpen = () => {
	isOpen.value = !isOpen.value
}
const closeSheet = () => {
	isOpen.value = false;
}

provide<SheetProvideValue>(SHEET_INJECTION_KEY, {
  isOpen,
	toggleOpen,
	closeSheet
});

const sheetRef = ref();

onClickOutside(sheetRef, () => {
	if(isOpen.value) closeSheet();
});
</script>

<script lang="ts">
export const SHEET_INJECTION_KEY = Symbol() as InjectionKey<SheetProvideValue>;

export interface SheetProvideValue {
  isOpen: Readonly<Ref<boolean>>;
	toggleOpen: () => void;
	closeSheet: () => void;
}
</script>