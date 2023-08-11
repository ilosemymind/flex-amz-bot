<template>
	<div class="w-full flex flex-col gap-6 overflow-hidden">
		<ViewHeader>Filters</ViewHeader>
		
		<div class="flex flex-col gap-4 overflow-scroll no-scrollbar">
			<BotPanel/>

			<section class="w-full flex flex-col gap-4">
				<AccordionContainer class="2xl:max-w-[75%]" type="single">
					<AccordionItem value="first">
						<AccordionTrigger>
							<strong class="text-lg">Bot settings</strong>
						</AccordionTrigger>
						
						<AccordionContent>
							<div class="flex flex-col gap-2">
								<strong>Tap interval</strong>
								<p>Set your custom tapping interval below.</p>

								<form class="flex flex-col items-center gap-4">
									<div class="w-full flex items-center gap-4">
										<label for="interval-from">From</label>
										<AppInput id="interval-from" placeholder="from"/>

										<label for="interval-to">To</label>
										<AppInput id="interval-to" placeholder="to"/>
									</div>

									<AppButton>Set interval</AppButton>
								</form>
							</div>

							<div class="flex items-center justify-between gap-2">
								<strong>Auto-Stop After Catch</strong>
								<SwitchRoot v-model="switchModel">
									<SwitchThumb/>
								</SwitchRoot>
							</div>
						</AccordionContent>
					</AccordionItem>
				</AccordionContainer>
			</section>
			
			<section class="flex flex-col gap-4">
				<RouterLink class="ml-auto" to="/filter/add">
					<AppButton>Add New Filter</AppButton>
				</RouterLink>

				<TransitionGroup name="fade">
					<Card class="flex" v-for="filter in filters">
						<strong class="cursor-default">{{ filter.filterName }}</strong>

						<RouterLink class="ml-auto" :to="`/filter/${filter.id}/edit`">
							<AppButton size="sm">
								Edit
							</AppButton>
						</RouterLink>

						<AppButton 
							class="bg-red-300 border-red-300"
							size="sm" 
							@click="handleFilterDelete(filter.id)"
						>
							Delete
						</AppButton>

						<SwitchRoot v-model="filter.filterValue.isOn">
							<SwitchThumb/>
						</SwitchRoot>
					</Card>
				</TransitionGroup>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import filterService from '@/services/filter.service';

import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import { SwitchRoot, SwitchThumb } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import BotPanel from '@/components/dashboard/BotPanel.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import { 
	AccordionContainer, 
	AccordionContent, 
	AccordionItem, 
	AccordionTrigger 
} from '@/components/ui/accordion';

import Filter from '@/types/Filter';

const switchModel = ref(true);

const filters = ref<Filter[]>([]);
filters.value = await filterService.getFilters();

const handleFilterDelete = async (id: number) => {
	const response = await filterService.deleteFilter({ id });

	if(response.status === 200) {
		filters.value = filters.value.filter(filter => filter.id !== id);
	}
}
</script>