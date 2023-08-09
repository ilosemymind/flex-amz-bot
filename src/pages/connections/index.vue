<template>
	<MainLayout class="relative grid grid-cols-2 gap-4">
		<section class="w-full flex flex-col gap-6">
			<label class="font-semibold text-xl">Telegram Connection</label>
			<div v-if="!profileStore.state?.telegramId" class="flex flex-col gap-6">
				<p>Connect your telegram bot to get access to the rest of the website functionality.</p>
				<form class="w-full flex">
					<AppButton 
						href=""
						target="_blank"
						class="telegram-btn w-full mx-auto text-blue-450" 
						size="xl"
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
						href=""
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
					<AppButton class="w-full" size="xl">Synchronize</AppButton>
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
import { useProfileStore } from '@/stores/profile';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const profileStore = useProfileStore();
</script>