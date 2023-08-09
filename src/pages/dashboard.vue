<template>
	<MainLayout class="relative flex">
		<div class="flex flex-col gap-4"> 
			<RouterLink to="/">
				<img 
					:src="logoImg" 
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
			<template v-if="Component">
				<Transition name="fade" appear mode="out-in">
					<KeepAlive :include="keepAliveViews">
						<Suspense>
							<component :is="Component" :key="route.fullPath"/>

							<template #fallback>
								<div class="w-full flex flex-1 justify-center items-center">Loading...</div>
							</template>
						</Suspense>
					</KeepAlive>
				</Transition>
			</template>
		</RouterView>

		<div class="h-[60px] flex items-center">
			<Sheet>
				<SheetTrigger class="z-50"/>

				<SheetContent class="px-7 pt-20 pb-5">
					<div v-if="isXsScreen"></div>
					<NavList v-else/>

					<AppButton
						class="font-bold text-xl mt-auto" 
						variant="ghost"
						@click="handleLogout()"
					>
						Logout
					</AppButton>
				</SheetContent>
			</Sheet>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import authService from '@/services/auth.service';
import { router } from '@/plugins/router';
import logoImg from "@/assets/images/logo.png";

import MainLayout from '@/components/layouts/MainLayout.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
import Separator from '@/components/ui/Separator.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { isXsScreen } from '@/utils/breakpoints';

const keepAliveViews = "index,settings";

const handleLogout = () => {
	authService.logout();
	router.push({ path: "/login" });
}
</script>