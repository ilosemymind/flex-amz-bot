<template>
	<DashboardLayout>
		<div class="w-full flex flex-col overflow-hidden">
			<ViewHeader>Edit Filter</ViewHeader>

			<section class="flex flex-col overflow-scroll no-scrollbar">
				<FilterForm
					:value="selectedFilter"
					@submit="submitFilterEdit"
				/>
			</section>
		</div>
	</DashboardLayout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router/auto';

import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import FilterForm from '@/components/dashboard/FilterForm.vue';
import filterService from '@/services/filter.service';

import Filter from '@/types/Filter';
const route = useRoute();
console.log(route.params);
const router = useRouter();

// @ts-ignore
const selectedFilter = await filterService.getFilter({ id: route.params.id });

console.log(selectedFilter);

const submitFilterEdit = async (formData: Filter) => {
	await filterService.editFilter({
		filter: {
			...formData
		}
	});

	router.push({ path: '/dashboard/filters' });
}
</script>