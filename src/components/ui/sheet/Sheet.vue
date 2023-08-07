<template>
	<slot></slot>
</template>

<script setup lang="ts">
import { InjectionKey, Ref, provide, ref } from 'vue';

const isOpen = ref(false);
const toggleOpen = () => {
	isOpen.value = !isOpen.value
}

provide<SheetProvideValue>(SHEET_INJECTION_KEY, {
  isOpen,
	toggleOpen,
});
</script>

<script lang="ts">
export const SHEET_INJECTION_KEY = Symbol() as InjectionKey<SheetProvideValue>;

export interface SheetProvideValue {
  isOpen: Readonly<Ref<boolean>>;
	toggleOpen: () => void;
}
</script>