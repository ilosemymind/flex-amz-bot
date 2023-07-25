<template>
	<MainLayout class="flex justify-between">
		<RouterLink class="w-1/5 h-[60px]" to="/">
			<img 
				src="../assets/images/logo.png" 
				class="w-[194px]" 
				alt="Logo"
			/>
		</RouterLink>

		<div class="w-1/3 flex flex-col justify-center gap-5">
			<form class="w-full flex flex-col items-center gap-2 text-white">
				<label class="w-full text-left" for="full-name">E-Mail</label>
				<AppInput id="full-name" placeholder="example@mail.com" type="email"/>

				<label class="w-full text-left" for="full-name">Password</label>
				<AppInput id="full-name" placeholder="Password" type="password">
					<template #append>
						<button 
							type="button"
							@click="showPassword = !showPassword"
						>
							<SvgIcon :name="showPassword ? 'eyeOpen' : 'eyeClosed'"/>
						</button>
					</template>
				</AppInput>
				<AppButton class="text-lg my-3" variant="ghost">Login</AppButton>

				<RouterLink to="/signup">
					<AppButton class="text-pink-400 font-bold" variant="ghost">Create an account</AppButton>
				</RouterLink>
			</form>

			<form class="w-full flex flex-col gap-2 text-white">
				<p class="text-center text-gray-400 underline underline-offset-4 cursor-default">
					Request password reset
				</p>
				<label class="w-full text-left" for="full-name">E-Mail</label>
				<AppInput id="full-name" placeholder="example@mail.com" type="email"/>
				<AppButton class="mx-auto my-5" variant="ghost">Send</AppButton>
			</form>
		</div>

		<div class="w-1/5 h-[60px] flex justify-end items-center">
			<AppButton
				class="font-bold text-xl" 
				variant="ghost"
				@click=""
			>
				Exit
			</AppButton>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
import { ref } from 'vue';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const showPassword = ref(false);
</script>