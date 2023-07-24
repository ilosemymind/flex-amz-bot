<template>
	<button
		:disabled="injectedItemValue.disabled?.value"
		:data-open="injectedItemValue.isOpen.value"
		type="button"
		class="group w-full flex transition-transform text-left"
		@click="handleClick"
	>
		<slot></slot>

		<SvgIcon 
			name="plus" 
			class="
				min-w-[24px] min-h-[24px] ml-auto text-sky-200 transition-[inherit]
				group-data-[open=true]:rotate-45 group-data-[open=true]:text-pink-400
			"
		/>
	</button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { ACCORDION_STATE_INJECTION_KEY, AccordionStateProvideValue } from './AccordionContainer.vue';
import { ACCORDION_ITEM_INJECTION_KEY, AccordionItemProvideValue } from './AccordionItem.vue';

import SvgIcon from '../SvgIcon.vue';

const injectedStateValue = inject(ACCORDION_STATE_INJECTION_KEY) as AccordionStateProvideValue;
const injectedItemValue = inject(ACCORDION_ITEM_INJECTION_KEY) as AccordionItemProvideValue;

const handleClick = () => {
	const value = injectedItemValue.value;

	if(injectedItemValue.isOpen.value) {
		injectedStateValue.onItemClose(value);
	} else {
		injectedStateValue.onItemOpen(value);
	}
}
</script>

<script lang="ts">

</script>