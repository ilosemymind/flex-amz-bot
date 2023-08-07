<template>
	<div @click="injectedValue.toggleOpen">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { SHEET_INJECTION_KEY, SheetProvideValue } from './Sheet.vue';

const injectedValue = inject(SHEET_INJECTION_KEY) as SheetProvideValue;
</script>