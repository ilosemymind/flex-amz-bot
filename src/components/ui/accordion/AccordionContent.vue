<template>
	<div 
		:aria-hidden="!injectedItemValue.isOpen.value"
		class="
			grid grid-rows-[1fr] mt-2 transition-[grid-template-rows,margin] duration-300
			aria-[hidden=true]:grid-rows-[0fr] aria-[hidden=true]:mt-0
		"
	>
		<div class="overflow-hidden">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { ACCORDION_ITEM_INJECTION_KEY, AccordionItemProvideValue } from './AccordionItem.vue';

const injectedItemValue = inject(ACCORDION_ITEM_INJECTION_KEY) as AccordionItemProvideValue;
</script>