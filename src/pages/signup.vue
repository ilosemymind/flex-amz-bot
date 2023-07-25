<template>
	<MainLayout class="flex justify-between">
		<RouterLink class="w-1/5 h-[60px]" to="/">
			<img 
				src="../assets/images/logo.png" 
				class="w-[194px]" 
				alt="Logo"
			/>
		</RouterLink>

		<form class="w-1/3 flex flex-col justify-center items-center gap-2 text-white">
			<label class="w-full text-left" for="full-name">Full name</label>
			<AppInput id="full-name" placeholder="First and last name"/>

			<label class="w-full text-left" for="full-name">E-Mail</label>
			<AppInput id="full-name" placeholder="example@mail.com" type="email"/>

			<label class="w-full text-left" for="full-name">Phone</label>
			<AppInput id="full-name" placeholder="+1"/>

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

			<label class="w-full text-left" for="full-name">Repeat password</label>
			<AppInput id="full-name" placeholder="Repeat password" type="password">
				<template #append>
					<button 
						type="button"
						@click="showRepeatPassword = !showRepeatPassword"
					>
						<SvgIcon :name="showRepeatPassword ? 'eyeOpen' : 'eyeClosed'"/>
					</button>
				</template>
			</AppInput>

			<AppButton class="text-lg my-3" variant="ghost">Sign up</AppButton>

			<RouterLink to="/login">
				<AppButton class="text-pink-400 font-bold" variant="ghost">Already have an account?</AppButton>
			</RouterLink>
		</form>

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
const showRepeatPassword = ref(false);
</script>