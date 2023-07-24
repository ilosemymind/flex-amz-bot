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
			<nav class="flex">
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
			<button 
				class="font-bold text-xl text-white hover:text-pink-400 transition-colors"
				@click="authService.logout()"
			>
				Logout
			</button>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import authService from '@/services/auth.service';

import MainLayout from '@/components/layouts/MainLayout.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
import Separator from '@/components/ui/Separator.vue';

const keepAliveViews = "index,settings";
</script>