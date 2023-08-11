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

		<slot></slot>

		<div class="h-[60px] flex items-center ml-auto">
			<Sheet>
				<SheetTrigger class="z-50"/>

				<SheetContent class="flex flex-col justify-between px-7 pt-20 pb-5">
					<NavList v-if="!isXsScreen"/>

					<LocalizationSelect/>

					<AppButton
						class="font-light text-xl mt-10" 
						variant="ghost"
						@click="handleLogout()"
					>
						Logout
					</AppButton>

					<div v-if="isXsScreen" class="flex flex-col items-center gap-5">
						<button>
							<SvgIcon name="facebook"/>
						</button>
						
						<button>
							<SvgIcon name="send"/>
						</button>
					</div>

					<div v-if="isXsScreen">
						<img class="" :src="logoImg" alt="Logo"/>
						<p class="text-center">
							2023 All rights reserved ©
							<br/>
							Partners
						</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { isXsScreen } from '@/utils/breakpoints';
import authService from '@/services/auth.service';
import { router } from '@/plugins/router';
import logoImg from "@/assets/images/logo.png";

import { RouterLink } from 'vue-router';
import MainLayout from './MainLayout.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LocalizationSelect from '@/components/LocalizationSelect.vue';
import NavList from '@/components/dashboard/nav/NavList.vue';
import Separator from '@/components/ui/Separator.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const handleLogout = () => {
	authService.logout();
	router.push({ path: "/login" });
}
</script>