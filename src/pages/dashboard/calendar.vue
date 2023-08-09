<template>
	<div class="w-full flex flex-col items-center">
		<ViewHeader>Calendar</ViewHeader>

		<section class="w-full flex justify-center gap-5 overflow-hidden">
			<div class="flex flex-col justify-between">
				<Card v-for="index in 7" class="flex-col gap-0 py-2 px-6">
					<span 
						class="text-center cursor-default" 
						v-html="dayjs().add(index, 'day').format('D </br> ddd')"
					></span>
				</Card>
			</div>

			<div class="w-3/4 overflow-scroll no-scrollbar">
				<div class="max-w-max px-5 py-2 mb-5 text-white bg-pink-400 rounded-lg cursor-default">
					I've arrived
				</div>

				<OfferCard 
					v-for="_ in 5" 
					:offer="{ status: 'active' }"
					class="mb-5"
				>
					<template #actions>
						<AppButton
							class=""
							size="sm"
						>
							Enable Auto-Forfeit
						</AppButton>
						<AppButton
							class="bg-red-300 border-red-300"
							size="sm"
						>
							Forfeit
						</AppButton>
					</template>
				</OfferCard>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import { Card } from '@/components/ui/card';
import OfferCard from '@/components/dashboard/OfferCard.vue';
import AppButton from '@/components/ui/AppButton.vue';
</script>