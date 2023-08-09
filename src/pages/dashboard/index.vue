<template>
	<div class="w-full flex flex-col items-center gap-6">
		<ViewHeader>Dashboard</ViewHeader>

		<BotPanel/>

		<section class="w-full flex justify-center overflow-hidden">
			<TabsContainer value="accepted" class="w-4/5 flex flex-col">
				<TabsList>
					<TabTrigger value="accepted">Accepted</TabTrigger>
					<Separator class="mx-2 my-1" orientation="vertical" :decorative="true"/>
					<TabTrigger value="missed">Missed</TabTrigger>
					<Separator class="mx-2 my-1" orientation="vertical" :decorative="true"/>
					<TabTrigger value="ignored">Ignored</TabTrigger>
				</TabsList>

				<Separator class="mb-8"/>

				<div class="overflow-scroll no-scrollbar">
					<TabContent value="accepted">Accepted content</TabContent>
					<TabContent value="missed">Missed content</TabContent>
					<TabContent value="ignored">
						<OfferCard 
							v-for="_ in 5" :offer="{ status: 'ignored' }"
							class="mb-5"
						/>
					</TabContent>
				</div>
			</TabsContainer>
		</section>
	</div>
</template>

<script setup lang="ts">
import { TabsContainer, TabsList, TabTrigger, TabContent } from '@/components/ui/tabs';
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import Separator from '@/components/ui/Separator.vue';
import BotPanel from '@/components/dashboard/BotPanel.vue';
import OfferCard from '@/components/dashboard/OfferCard.vue';
</script>