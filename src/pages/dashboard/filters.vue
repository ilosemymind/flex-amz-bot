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
							<div class="flex flex-col gap-4">
								<section class="flex flex-col gap-2">
									<strong>Tap interval</strong>
									<p>Set your custom tapping interval below.</p>

									<form 
										class="flex flex-col items-center gap-4" 
										@submit.prevent="submitIntervalForm"
									>
										<div class="w-full flex items-center gap-4">
											<label for="interval-from">From</label>
											<AppInput 
												v-model="v$.from.$model"
												id="interval-from" 
												placeholder="from"
											/>
											<div class="" v-for="error of v$.from.$errors" :key="error.$uid">
												<small class="text-red-500">{{ error.$message }}</small>
											</div>

											<label for="interval-to">To</label>
											<AppInput 
												v-model="v$.to.$model"
												id="interval-to" 
												placeholder="to"
											/>
											<div class="" v-for="error of v$.to.$errors" :key="error.$uid">
												<small class="text-red-500">{{ error.$message }}</small>
											</div>
										</div>

										<Alert v-model="showIntervalSuccessMessage" variant="success">
											Interval updated!
										</Alert>

										<AppButton type="submit">
											Set interval
										</AppButton>
									</form>
								</section>

								<section class="flex items-center justify-between gap-2">
									<strong>Auto-Stop After Catch</strong>

									<SwitchRoot v-model="switchModel" @toggle="handleAutoStopToggle">
										<SwitchThumb/>
									</SwitchRoot>
								</section>
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
import { reactive, ref, unref } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { required, numeric, between, not, sameAs, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import botService from '@/services/bot.service';
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
import { Alert } from '@/components/ui/alert';

const switchModel = ref(true);

const filters = ref<Filter[]>([]);
filters.value = await filterService.getFilters();

const MIN_INTERVAL_VALUE = 0.1;
const MAX_INTERVAL_VALUE = 12;

const profileStore = useProfileStore();

const handleAutoStopToggle = async () => {
	if(profileStore.state) {
		const flag = profileStore.state.settings.autoStop === 0 ? 1 : 0;

		const response = await botService.toggleAutoStop({ flag });

		if(response.status === 200) {
			profileStore.state.settings.autoStop = flag;
		} 
	}
}

const intervalState = reactive({
	from: profileStore.state ? profileStore.state.settings.tapInterval.from : 1,
	to: profileStore.state ? profileStore.state.settings.tapInterval.to : 11,
});
const inyervalRules = {
	from: { 
		required, 
		numeric, 
		between: between(MIN_INTERVAL_VALUE, MAX_INTERVAL_VALUE) 
	},
	to: { 
		required, 
		numeric, 
		between: between(MIN_INTERVAL_VALUE, MAX_INTERVAL_VALUE), 
		otherProperty: helpers.withMessage(
			'The end value can not be same with the start value.', 
			not(sameAs(intervalState.from))
		) 
	},
}

const v$ = useVuelidate(inyervalRules, intervalState);

const showIntervalSuccessMessage = ref(false);
const submitIntervalForm = async () => {
	const result = await v$.value.$validate();
	if (!result) {
		// notify user form is invalid
		return;
	}

	const response = await botService.setInterval({
		...intervalState
	});

	if(response.status === 200 && profileStore.state) {
		profileStore.state.settings.tapInterval = unref(intervalState);

		showIntervalSuccessMessage.value = true;
	}
}

const handleFilterDelete = async (id: number) => {
	const response = await filterService.deleteFilter({ id });

	if(response.status === 200) {
		filters.value = filters.value.filter(filter => filter.id !== id);
	}
}
</script>