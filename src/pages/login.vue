<template>
	<MainLayout class="flex justify-between">
		<RouterLink class="w-1/5 h-[60px]" to="/">
			<img 
				:src="logoImg" 
				class="w-[194px]" 
				alt="Logo"
			/>
		</RouterLink>

		<div class="w-1/3 flex flex-col justify-center gap-5">
			<form class="w-full flex flex-col items-center gap-2 text-white overflow-scroll no-scrollbar">
				<div class="w-full flex flex-col gap-3">
					<label class="w-full text-left" for="email">E-Mail</label>
					<AppInput v-model="v$.email.$model" id="email" name="email" placeholder="example@mail.com" type="email"/>

					<div class="" v-for="error of v$.email.$errors" :key="error.$uid">
						<small class="text-red-500">{{ error.$message }}</small>
					</div>
				</div>

				<div class="w-full flex flex-col gap-3">
					<label class="w-full text-left" for="password">Password</label>
					<AppInput 
						v-model="v$.password.$model" 
						id="password" 
						name="password" 
						placeholder="Password" 
						:type="showPassword ? 'text' : 'password'"
					>
						<template #append>
							<button
								type="button"
								@click="showPassword = !showPassword"
							>
								<SvgIcon :name="showPassword ? 'eyeOpen' : 'eyeClosed'"/>
							</button>
						</template>
					</AppInput>

					<div class="" v-for="error of v$.password.$errors" :key="error.$uid">
						<small class="text-red-500">{{ error.$message }}</small>
					</div>
				</div>

				<AppButton 
					class="text-lg my-3" 
					variant="ghost"
					@click="submitLogin"
					:disabled="v$.$errors.length"
				>
					Login
				</AppButton>

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
				<AppButton 
					class="mx-auto my-5" 
					variant="ghost"
					@click="handlePasswordReset"
				>
					Send
				</AppButton>
			</form>
		</div>

		{{ v$.$model }}

		<div class="w-1/5 h-[60px] flex justify-end items-center">
			<RouterLink to="/">
				<AppButton
					class="font-bold text-xl" 
					variant="ghost"
					@click=""
				>
					Exit
				</AppButton>
			</RouterLink>
		</div>
	</MainLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router/auto';
import logoImg from "@/assets/images/logo.png";
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import authService from '@/services/auth.service';
import { router } from '@/plugins/router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const showPassword = ref(false);

const loginState = reactive({
	email: '',
	password: '',
});
const loginRules = {
	email: { required, email },
	password: { required, minLength: minLength(8) },
}

const v$ = useVuelidate(loginRules, loginState);

const submitLogin = async () => {
	const result = await v$.value.$validate();
	if (!result) {
		// notify user form is invalid
		return;
	}

	await authService.login({
		...loginState
	});

	router.push({ path: '/dashboard' });
}

const handlePasswordReset = () => {
	authService.resetPassword({});
}
</script>