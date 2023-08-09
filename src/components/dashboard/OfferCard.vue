<template>
	<Card v-bind="$attrs" class="relative">
		<CardContent class="grid grid-cols-[repeat(2,max-content)] gap-x-5 gap-y-3">
			<SvgIcon name="location"/>
			<strong>Portland OR (VOR3) - Sub Same-Day</strong>
			
			<SvgIcon name="clock"/>
			<p class="flex gap-4">
				<span>Tue Jun 20</span>
				<span>2:00 PM - 6:00 PM</span>
			</p>
			<p v-if="offer.status === 'ignored'" class="col-start-2">
				Reason ignored: Low rate
			</p>
			<p v-if="offer.status === 'ignored'" class="col-start-2">
				Block found at: 11:01 AM
			</p>

			<div 
				v-if="actionsSlots && actionsSlots.length > 0"
				class="mt-5 col-span-2 flex gap-4"
			>
				<slot name="actions"></slot>
			</div>
		</CardContent>

		<div 
			class="
				absolute bottom-0 right-0 px-3 py-2 flex flex-col items-center 
				border-l border-t border-blue-700 rounded-tl-3xl shadow-[-3px_-3px_15px_rgba(255,255,255,0.1)]
			"
		>
			<strong>$84</strong>
			<small class="text-gray-300">$25,00 / hr</small>
		</div>
	</Card>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

import { Card, CardContent } from '@/components/ui/card';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const slots = useSlots();
const actionsSlots = computed(() => slots.actions && slots.actions());

defineProps({
	offer: { type: Object, required: true }
});
</script>