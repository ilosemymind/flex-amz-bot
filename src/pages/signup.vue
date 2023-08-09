<template>
	<MainLayout class="flex justify-between">
		<RouterLink class="w-1/5 h-[60px]" to="/">
			<img 
				:src="logoImg" 
				class="w-[194px]" 
				alt="Logo"
			/>
		</RouterLink>

		<form class="w-1/3 flex flex-col items-center gap-2 text-white overflow-scroll no-scrollbar">
			<div class="w-full flex flex-col gap-3">
				<label class="w-full text-left" for="full-name">Full name</label>
				<AppInput v-model="v$.username.$model" id="full-name" placeholder="First and last name"/>

				<div class="" v-for="error of v$.username.$errors" :key="error.$uid">
					<small class="text-red-500">{{ error.$message }}</small>
				</div>
			</div>

			<div class="w-full flex flex-col gap-3">
				<label class="w-full text-left" for="email">E-Mail</label>
				<AppInput 
					v-model="v$.email.$model" 
					id="email" 
					name="email" 
					placeholder="example@mail.com" 
					type="email"
				/>

				<div class="" v-for="error of v$.email.$errors" :key="error.$uid">
					<small class="text-red-500">{{ error.$message }}</small>
				</div>
			</div>

			<div class="w-full flex flex-col gap-3">
				<label class="w-full text-left" for="phone">Phone</label>
				<AppInput 
					v-maska="signUpState.maskedPhone"
					v-model="v$.phone.$model"
					id="phone" 
					name="phone" 
					placeholder="+###-##-####-###-###"
					:data-maska="phoneMask"
					@maska="onMaska"
				/>

				<div class="" v-for="error of v$.phone.$errors" :key="error.$uid">
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

			<div class="w-full flex flex-col gap-3">
				<label class="w-full text-left" for="repeat-password">Repeat password</label>
				<AppInput 
					v-model="v$.repeatPassword.$model" 
					id="repeat-password" 
					name="repeat-password" 
					placeholder="Repeat password" 
					:type="showRepeatPassword ? 'text' : 'password'"
				>
					<template #append>
						<button
							type="button"
							@click="showRepeatPassword = !showRepeatPassword"
						>
							<SvgIcon :name="showRepeatPassword ? 'eyeOpen' : 'eyeClosed'"/>
						</button>
					</template>
				</AppInput>

				<div class="" v-for="error of v$.repeatPassword.$errors" :key="error.$uid">
					<small class="text-red-500">{{ error.$message }}</small>
				</div>
			</div>

			<AppButton 
				class="text-lg my-3" 
				variant="ghost"
				@click="submitSignUp"
				:disabled="v$.$errors.length"
			>
				Sign up
			</AppButton>

			<RouterLink to="/login">
				<AppButton class="text-pink-400 font-bold" variant="ghost">Already have an account?</AppButton>
			</RouterLink>
		</form>

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
import { RouterLink } from 'vue-router/auto';
import { computed, reactive, ref } from 'vue';
import logoImg from "@/assets/images/logo.png";
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';
import { vMaska, MaskaDetail } from "maska";
import phoneCodes from '@/utils/phone-codes.json';
import authService from '@/services/auth.service';
import { router } from '@/plugins/router';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const showPassword = ref(false);
const showRepeatPassword = ref(false);

const signUpState = reactive({
	username: '',
	email: '',
	phone: '',
	maskedPhone: {} as MaskaDetail,
	password: '',
	repeatPassword: ''
});
const phoneMask = ref('+###-##-####-###-###');
const onMaska = (event: CustomEvent<MaskaDetail>) => {
	if(
		event.detail.masked 
		&& (event.detail.masked.length === 0 
		|| event.detail.masked.length === 1)
	) {
		phoneMask.value = '+###-##-####-###-###';
	} 

	const availableMasks = phoneCodes.filter(code => code.mask.startsWith(event.detail.masked));
	if(availableMasks.length === 1 && availableMasks[0]) {
		phoneMask.value = availableMasks[0].mask;
	}
};
const passwordRef = computed(() => signUpState.password);
const signUpRules = {
	username: { required },
	email: { required, email },
	phone: { required },
	password: { required, minLength: minLength(8) },
	repeatPassword: { required, sameAsPassword: sameAs(passwordRef) }
}

const v$ = useVuelidate(signUpRules, signUpState);

const submitSignUp = async () => {
	const result = await v$.value.$validate();
	if (!result) {
		// notify user form is invalid
		return;
	}

	authService.register({
		...signUpState
	});

	router.push({ path: '/dashboard' });
}
</script>