<template>
	<form class="flex flex-col justify-center gap-5" @submit.prevent="submitForm">
		<div class="flex flex-col gap-2">
			<strong>Filter name</strong>
			<AppInput v-model="v$.state.filterName.$model" placeholder="Enter name"/>
		
			<div class="" v-for="error of v$.state.filterName.$errors" :key="error.$uid">
				<small class="text-red-500">{{ error.$message }}</small>
			</div>
		</div>

		<Separator/>

		<div class="flex flex-col gap-2">
			<strong>Service areas</strong>
		
			<div class="flex justify-center flex-wrap gap-2">
				<AppButton 
					v-for="area in filterServiceAreas" 
					:key="area.serviceAreaId"
					variant="flat"
					class="max-w-max"
					:active="
						v$.state.filterValue.serviceIds.$model 
						&& v$.state.filterValue.serviceIds.$model.includes(area.serviceAreaId)
					"
					@click="handleServiceAreaClick(area)"
				>
					{{ abbreviateServiceAreas ? area.serviceAreaAbbr : area.serviceAreaName }}
				</AppButton>

				<div class="w-full flex justify-between items-center gap-2">
					<div class="" v-for="error of v$.state.filterValue.serviceIds.$errors" :key="error.$uid">
						<small class="text-red-500">{{ error.$message }}</small>
					</div>

					<div class="flex items-center gap-3 mt-2 ml-auto">
						<label for="service-areas-switch">Abbreviate service area</label>
					
						<SwitchRoot
							v-model="abbreviateServiceAreas"
							id="service-areas-switch"
						>
							<SwitchThumb/>
						</SwitchRoot>
					</div>
				</div>
			</div>
		</div>

		<Separator/>

		<div class="flex flex-col gap-2">
			<strong>Days and Time</strong>

			<div 
				v-for="day in days"
				:key="day.key"
				class="w-full flex gap-2 items-center"
			>
				<span class="min-w-[110px]">{{ day.name }}</span>

				<div class="w-full flex gap-2">
					<AppInput
						v-model="v$.state.filterValue.daysAndTime[day.key].from.$model"
						type="time"
						class="w-1/2" 
					/>
					<span class="text-2xl text-gray-350 font-extralight cursor-default">→</span>
					<AppInput
						v-model="v$.state.filterValue.daysAndTime[day.key].to.$model"
						type="time"
						class="w-1/2" 
					/>
				</div>
			</div>
		</div>

		<Separator/>

		<div class="flex flex-col gap-2">
			<strong>Duration and Pay</strong>

			<ValidateEach
				v-for="(item, index) in v$.state.filterValue.payPerHour.$model"
				:key="index"
				:state="item"
				:rules="payPerHourRules"
			>
			<template #default="{ v }">
					<div class="flex flex-col gap-2">
						<div class="flex gap-2">
							<AppInput v-model="v.duration.$model" type="time"/>
							
							<AppInput
								v-model="v.pay.$model"
								type="number"
							>
								<template #prepend>
									<span class="text-black">$</span>
								</template>
							</AppInput>
							<AppButton
								class="min-w-max bg-red-300 border-red-300"
								@click="handlePayPerHourDelete(index)"
							>
								Delete
							</AppButton>
						</div>

						<div class="flex gap-2">
							<div 
								v-for="error of v.duration.$errors" 
								:key="error.$uid"
								class="" 
							>
								<small class="text-red-500">{{ error.$message }}</small>
							</div>

							<div 
								v-for="error of v.pay.$errors" 
								:key="error.$uid"
								class="" 
							>
								<small class="text-red-500">{{ error.$message }}</small>
							</div>
						</div>
					</div>
				</template>
			</ValidateEach>

			<div 
				v-for="error of v$.state.filterValue.payPerHour.$errors" 
				:key="error.$uid"
				class="" 
			>
				<small class="text-red-500">{{ error.$message }}</small>
			</div>

			<AppButton @click="handlePayPerHourAdd">Add</AppButton>
		</div>

		<Separator/>

		<div class="flex flex-col gap-2">
			<strong>Time to arrive</strong>
			<AppInput 
				v-model="v$.state.filterValue.timeToArrive.$model"
				placeholder="Enter time in hours"
				type="time"
			/>
		
			<div class="" v-for="error of v$.state.filterValue.timeToArrive.$errors" :key="error.$uid">
				<small class="text-red-500">{{ error.$message }}</small>
			</div>
		</div>
		
		<AppButton type="submit">
			Submit
		</AppButton>
	</form>
</template>

<script setup lang="ts">
import filterService from '@/services/filter.service';
import { required, minLength, helpers } from '@vuelidate/validators';
import { ValidateEach } from '@vuelidate/components';
import useVuelidate from '@vuelidate/core';
import { PropType, reactive, ref, unref } from 'vue';

import AppButton from '@/components/ui/AppButton.vue';
import { SwitchRoot, SwitchThumb } from '@/components/ui/switch';
import Separator from '@/components/ui/Separator.vue';
import AppInput from '@/components/ui/AppInput.vue';

import Filter, { FilterServiceArea } from '@/types/Filter';

const filterServiceAreas = await filterService.getFilterServiceAreas();

const props = defineProps({
	value: { 
		type: Object as PropType<Filter>, 
		default: {
			filterName: "",
			filterValue: {
				daysAndTime: { 
					mon: { from: undefined, to: undefined }, 
					tue: { from: undefined, to: undefined }, 
					wed: { from: undefined, to: undefined }, 
					thur: { from: undefined, to: undefined }, 
					fri: { from: undefined, to: undefined }, 
					sat: { from: undefined, to: undefined }, 
					sun: { from: undefined, to: undefined } 
				}, 
				payPerHour: [{ duration: "00:00", pay: 0 }], 
				serviceIds: [], 
				// @ts-ignore
				timeToArrive: undefined, 
				isOn: 0
			}
		} 
	}
});

const emit = defineEmits([ 'submit' ]);

const abbreviateServiceAreas = ref(true);

const days = [
	{ name: "Monday", key: "mon" },
	{ name: "Tuesday", key: "tue" },
	{ name: "Wednesday", key: "wed" },
	{ name: "Thursday", key: "thur" },
	{ name: "Friday", key: "fri" },
	{ name: "Saturday", key: "sat" },
	{ name: "Sunday", key: "sun" },
];


const filterFormState = reactive<{ state: Filter}>({ state: props.value });
const filterFormDefaultState = unref(filterFormState);
const filterFormRules = {
	state: {
		filterName: { required },
		filterValue: { 
			timeToArrive: { required },
			payPerHour: {
				required: helpers.withMessage('At least one value is required', required),
				minLength: minLength(1),
			},
			serviceIds: {
				required: helpers.withMessage('Select at least one service area', required), 
				minLength: minLength(1),
			},
			daysAndTime: { 
				mon: { from: {}, to: {} }, 
				tue: { from: {}, to: {} }, 
				wed: { from: {}, to: {} }, 
				thur: { from: {}, to: {} }, 
				fri: { from: {}, to: {} }, 
				sat: { from: {}, to: {} }, 
				sun: { from: {}, to: {} } 
			},
		},
	}
}

const payPerHourRules = {
	duration: { 
		required: helpers.withMessage('Duration value is required!', required), 
	}, 
	pay: { 
		required: helpers.withMessage('Pay value is required!', required),
	}
}

const v$ = useVuelidate(filterFormRules, filterFormState);

const submitForm = async () => {
	const result = await v$.value.$validate();

	if (!result) {
		// notify user form is invalid
		return;
	}

	emit('submit', filterFormState.state);

	v$.value.$reset();
	filterFormState.state = filterFormDefaultState.state;
}

const handleServiceAreaClick = (area: FilterServiceArea) => {
	if(!v$.value.state.filterValue.serviceIds.$model) {
		v$.value.state.filterValue.serviceIds.$model = [];
	}

	if(v$.value.state.filterValue.serviceIds.$model.includes(area.serviceAreaId)) {
		v$.value.state.filterValue.serviceIds.$model = 
			v$.value.state.filterValue.serviceIds.$model.filter(id => id !== area.serviceAreaId);
	} else {
		v$.value.state.filterValue.serviceIds.$model.push(area.serviceAreaId);
	}
}

const handlePayPerHourAdd = () => {
	filterFormState.state.filterValue.payPerHour.push({ duration: '00:00', pay: 0 });
}

const handlePayPerHourDelete = (index: number) => {
	filterFormState.state.filterValue.payPerHour.splice(index, 1);
}
</script>