<template>
	<MainLayout class="relative grid grid-cols-2 gap-4">
		<section class="w-full flex flex-col gap-6">
			<label class="font-semibold text-xl">Telegram Connection</label>
			<div v-if="!profileStore.state?.telegramId" class="flex flex-col gap-6">
				<p>Connect your telegram bot to get access to the rest of the website functionality.</p>
				<form class="w-full flex">
					<AppButton 
						:href="telegramLink.link"
						target="_blank"
						class="telegram-btn w-full mx-auto text-blue-450" 
						size="md"
					>
						Go To Telegram Bot
					</AppButton>
				</form>
			</div>
			
			<div v-else class="flex items-center gap-2">
				<SvgIcon class="text-pink-400" name="check"/>
				<p>Telegram bot is already connected.</p>
			</div>
		</section>

		<section class="w-full flex flex-col gap-6">
			<label class="font-semibold text-xl">Amazon Flex Account Sync</label>

			<div v-if="!profileStore.state?.isAmazonConnected" class="flex flex-col gap-6">
				<p>Follow the steps below to synchronize the service with your Amazon Flex account.</p>

				<label class="font-semibold">Step 1.</label>
				<p>Use your Amazon Flex credentials to log in. A non functioning Amazon page will appear afterwards</p>

				<div>
					<a 
						class="
							max-w-[max-content] amazon-btn flex items-center gap-2 mx-auto px-5 py-2 text-pink-400
							border-pink-400 border-solid border-[1px] hover:text-white hover:bg-pink-400 rounded-sm 
							transition-colors
						"
						:href="amazonLink"
						target="_blank"
					>
						<SvgIcon name="amazon" width="24px" height="24px"/>
						<span class="text-lg font-medium">Login with Amazon</span>
					</a>
				</div>

				<label class="font-semibold">Step 2.</label>
				<p>Copy and paste the URL link of the non functioning Amazon page where you got redirected to.</p>
				
				<form class="flex flex-col items-center gap-5" method="POST" use:enhance>
					<div class="w-full">
						<AppInput placeholder="Paste URL link here" name="url"/>
					</div>
					<AppButton 
						class="w-full" 
						size="md"
						@click="submitAmazonConnection()"
					>
						Synchronize
					</AppButton>
				</form>
			</div>
		
			<div v-else class="flex items-center gap-2">
				<SvgIcon class="text-pink-400" name="check"/>
				<p>Amazon account is already connected.</p>
			</div>
		</section>

		<section 
			v-if="profileStore.state?.telegramId && profileStore.state?.isAmazonConnected" 
			class="col-span-2 mx-auto"
		>
			<RouterLink to="/dashboard">
				<AppButton class="w-[300px]">
					Go to Dashboard
				</AppButton>
			</RouterLink>
		</section>
	</MainLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';
import connectionsService from '@/services/connections.service';


const profileStore = useProfileStore();

const telegramLink = await connectionsService.getTelegramLink();
const amazonLink = "https://www.amazon.com/ap/signin?ie=UTF8&clientContext=134-9172090-0857541&openid.pape.max_auth_age=0&use_global_authentication=false&accountStatusPolicy=P1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&use_audio_captcha=false&language=en_US&pageId=amzn_device_na&arb=97b4a0fe-13b8-45fd-b405-ae94b0fec45b&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fap%2Fmaplanding&openid.assoc_handle=amzn_device_na&openid.oa2.response_type=token&openid.mode=checkid_setup&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.ns.oa2=http%3A%2F%2Fwww.amazon.com%2Fap%2Fext%2Foauth%2F2&openid.oa2.scope=device_auth_access&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&disableLoginPrepopulate=0&openid.oa2.client_id=device%3A32663430323338643639356262653236326265346136356131376439616135392341314d50534c4643374c3541464b&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";


const amazonState = reactive({
	link: '',
});
const amazonRules = {
	link: { required },
}

const v$ = useVuelidate(amazonRules, amazonState);

const submitAmazonConnection = async () => {
	const result = await v$.value.$validate();
	if (!result) {
		// notify user form is invalid
		return;
	}

	const response = await connectionsService.connectAmazon({
		...amazonState
	});

	if(response.ok && profileStore.state) {
		profileStore.state.isAmazonConnected = true;
	}
}
</script>