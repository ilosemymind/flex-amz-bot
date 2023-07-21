<template>
	<div class="w-full flex flex-col items-center">
		<ViewHeader>Help</ViewHeader>

		<p class="w-3/4 my-auto text-center text-white">
			We're here to help you, so please don't hesitate to reach out if you have any questions or need assistance. Our goal is to provide you with the best possible service. 
			<br/>
			<br/>
			Please check our <RouterLink class="text-pink-400 underline underline-offset-4" to="/dashboard/faq">FAQ</RouterLink> for answers to common questions.
		</p>

		<div class="flex gap-12">
			<button>
				<SvgIcon name="gmail"/>
			</button>
			<button>
				<SvgIcon name="whatsapp"/>
			</button>
			<button>
				<SvgIcon name="telegram"/>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';

import SvgIcon from '@/components/ui/SvgIcon.vue';
import ViewHeader from '@/components/dashboard/ViewHeader.vue';

</script>