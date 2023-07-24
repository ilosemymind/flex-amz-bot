<template>
	<div class="w-full flex flex-col items-center">
		<ViewHeader>Dashboard</ViewHeader>

		<TabsContainer value="accepted" class="w-4/5">
			<TabsList>
				<TabTrigger value="accepted">Accepted</TabTrigger>
				<Separator class="mx-2 my-1" orientation="vertical" :decorative="true"/>
				<TabTrigger value="missed">Missed</TabTrigger>
				<Separator class="mx-2 my-1" orientation="vertical" :decorative="true"/>
				<TabTrigger value="ignored">Ignored</TabTrigger>
			</TabsList>

			<Separator class="mx-4"/>

			<TabContent value="accepted">Accepted content</TabContent>
			<TabContent value="missed">Missed content</TabContent>
			<TabContent value="ignored">Ignored content</TabContent>
		</TabsContainer>
	</div>
</template>

<script setup lang="ts">
import { TabsContainer, TabsList, TabTrigger, TabContent } from '@/components/ui/tabs';
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import Separator from '@/components/ui/Separator.vue';
</script>