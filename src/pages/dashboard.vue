<template>
	<div class="flex">
		<NavList/>
		
		<RouterView v-slot="{ Component, route }">
			<Transition name="fade" appear mode="out-in">
				<component :is="Component" :key="route.fullPath"/>
			</Transition>
		</RouterView>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavList from '@/components/dashboard/nav/NavList.vue';
</script>