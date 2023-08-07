<template>
	<MainLayout class="relative flex">
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
				@click="handleLogout()"
			>
				Logout
			</AppButton>

			<Sheet>
				<SheetTrigger>
					<AppButton>Open</AppButton>
				</SheetTrigger>

				<SheetContent>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, et.
					<SheetTrigger>
						<AppButton>Close</AppButton>
					</SheetTrigger>
				</SheetContent>
			</Sheet>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
import Separator from '@/components/ui/Separator.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const keepAliveViews = "index,settings";

const handleLogout = () => {
	
}
</script>