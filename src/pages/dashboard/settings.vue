<template>
	<div class="w-full flex flex-col items-center">
		<ViewHeader>Settings</ViewHeader>

		<section class="w-full 2xl:max-w-[75%] flex flex-col gap-3 text-white">
			<div class="flex justify-between items-center">
				<span>Auto-Forfeit</span>
				<SwitchRoot v-model="settings.autoForfeit">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div 
				class="flex justify-between items-center aria-disabled:opacity-25" 
				aria-disabled="true"
			>
				<span>Single Block Search</span>
				<SwitchRoot v-model="settings.singleBlock" :disabled="true">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div 
				class="flex justify-between items-center aria-disabled:opacity-25" 
				aria-disabled="true"
			>
				<span>Auto-solve Captcha (WARNING!)</span>
				<SwitchRoot v-model="settings.autoCaptcha" :disabled="true">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div class="flex justify-between items-center">
				<span>Email Notifications</span>
				<SwitchRoot v-model="settings.email">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div class="flex justify-between items-center">
				<span>SMS Notifications</span>
				<SwitchRoot v-model="settings.sms">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div class="flex justify-between items-center">
				<span>Connect to Telegram</span>
				<SwitchRoot v-model="settings.telegram">
					<SwitchThumb/>
				</SwitchRoot>
			</div>

			<Separator/>

			<div class="flex justify-between items-center">
				<span>Change password</span>
			</div>

			<Separator/>

			<div class="flex justify-between items-center">
				<span>Update Flex Locations</span>
				<AppButton>Update Delivery</AppButton>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import Separator from '@/components/ui/Separator.vue';
import { SwitchRoot, SwitchThumb } from '@/components/ui/switch';

import { reactive } from 'vue';

const settings = reactive({
	autoForfeit: false,
	singleBlock: false,
	autoCaptcha: false,
	email: false,
	sms: true,
	telegram: true
});
</script>