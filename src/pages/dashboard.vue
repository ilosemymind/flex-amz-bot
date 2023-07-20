<template>
	<MainLayout class="flex">
		<div class="flex flex-col gap-4"> 
			<img 
				src="../assets/images/logo.png" 
				class="w-[194px]" 
				alt="Logo"
			/>
			<NavList/>
		</div>
		
		<RouterView v-slot="{ Component, route }">
			<Transition name="fade" appear mode="out-in">
				<component :is="Component" :key="route.fullPath"/>
			</Transition>
		</RouterView>

		
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
</script>