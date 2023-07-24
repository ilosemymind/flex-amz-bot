<template>
	<div 
		:data-open="injectedItemValue.isOpen.value"
		class="
			grid grid-rows-[0fr] transition-[grid-template-rows,margin] duration-300
			data-[open=true]:grid-rows-[1fr] data-[open=true]:mt-2
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