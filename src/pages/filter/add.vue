<template>
	<DashboardLayout>
		<div class="w-full flex flex-col overflow-hidden">
			<ViewHeader>Add Filter</ViewHeader>

			<section class="flex flex-col overflow-scroll no-scrollbar">
				<FilterForm
					@submit="submitFilterAdding"
				/>
			</section>
		</div>
	</DashboardLayout>
</template>

<script setup lang="ts">
import filterService from '@/services/filter.service';
import { router } from '@/plugins/router';

import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import FilterForm from '@/components/dashboard/FilterForm.vue';

import Filter from '@/types/Filter';


const submitFilterAdding = async (formData: Filter) => {
	console.log(formData, 'form data of filter add')

	await filterService.addFilter({
		filter: {
			...formData
		}
	});

	router.push({ path: '/dashboard/filters' });
}
</script>