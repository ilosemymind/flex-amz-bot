<template>
	<div class="w-full flex flex-col items-center">
		<ViewHeader>Offers</ViewHeader>

		<section class="w-3/4 flex flex-col overflow-hidden">
			<div class="overflow-scroll no-scrollbar">
				<OfferCard 
					v-for="_ in 5" 
					:offer="{ status: 'active' }"
					class="mb-5"
				>
					<template #actions>
						<AppButton
							class=""
							size="sm"
						>
							Accept
						</AppButton>
						<AppButton 
							class="bg-red-300 border-red-300"
							size="sm"
						>
							Decline
						</AppButton>
					</template>
				</OfferCard>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import OfferCard from '@/components/dashboard/OfferCard.vue';
import AppButton from '@/components/ui/AppButton.vue';
</script>