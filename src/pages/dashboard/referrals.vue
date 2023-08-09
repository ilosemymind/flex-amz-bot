<template>
	<div class="w-full flex flex-col">
		<ViewHeader>Referrals</ViewHeader>

		<section class="w-full flex flex-1 justify-center items-center">
			<Card class="w-3/4 flex-col gap-12 p-7">
				<div class="flex flex-col items-center gap-5 cursor-default">
					<span>
						REFER FRIENDS 
					</span>

					<span class="w-3/4 text-center">
						Refer your friends and earn 5 days of Membership when they subscribe!
					</span>
				</div>

				<div class="grid grid-cols-2 grid-rows-2 items-center gap-2 cursor-default">
					<SvgIcon 
						name="referrals"
						width="72" height="72"
						class="row-span-2 text-sky-200"
					/>

					<div>
						Joined <span class="text-pink-400">0</span>
					</div>
				
					<div>
						Subscribed <span class="text-pink-400">0</span>
					</div>
				</div>

				<AppButton class="w-[260px] flex justify-between">
					<span>Share link</span>
					<SvgIcon name="share"/>
				</AppButton>
			</Card>
		</section>
	</div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import AppButton from '@/components/ui/AppButton.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';
import { Card } from '@/components/ui/card';


</script>