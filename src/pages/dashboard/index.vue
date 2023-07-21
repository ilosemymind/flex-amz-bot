<template>
	<div class="w-full flex flex-col">
		<ViewHeader>Dashboard</ViewHeader>

		<TabsContainer value="accepted">
			<TabsList>
				<TabTrigger value="accepted">Accepted</TabTrigger>
				<TabTrigger value="missed">Missed</TabTrigger>
				<TabTrigger value="ignored">Ignored</TabTrigger>
			</TabsList>

			<TabContent value="accepted">Accepted content</TabContent>
			<TabContent value="missed">Missed content</TabContent>
			<TabContent value="ignored">Ignored content</TabContent>
		</TabsContainer>
	</div>
</template>

<script setup lang="ts">
import { TabsContainer, TabsList, TabTrigger, TabContent } from '@/components/ui/tabs';
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
</script>