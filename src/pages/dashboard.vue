<template>
	<MainLayout class="flex">
		<div class="flex flex-col gap-4"> 
			<RouterLink to="/">
				<img 
					src="../assets/images/logo.png" 
					class="w-[194px]" 
					alt="Logo"
				/>
			</RouterLink>
			
			<nav class="h-full flex">
				<NavList/>
				<Separator class="mx-6" orientation="vertical"/>
			</nav>
		</div>
		
		<RouterView v-slot="{ Component, route }">
			<Transition name="fade" appear mode="out-in">
				<KeepAlive :include="keepAliveViews">
					<component :is="Component" :key="route.fullPath"/>
				</KeepAlive>
			</Transition>
		</RouterView>

		<div class="h-[60px] flex items-center">
			<AppButton
				class="font-bold text-xl" 
				variant="ghost"
				@click="authService.logout()"
			>
				Logout
			</AppButton>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import authService from '@/services/auth.service';

import MainLayout from '@/components/layouts/MainLayout.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
import Separator from '@/components/ui/Separator.vue';
import AppButton from '@/components/ui/AppButton.vue';

const keepAliveViews = "index,settings";
</script>