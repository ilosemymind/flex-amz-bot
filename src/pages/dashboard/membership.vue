<template>
	<div class="w-full flex flex-col gap-5">
		<ViewHeader>Memsbership</ViewHeader>

		<section class="text-center">
			<strong class="underline">You are subscribed!</strong>
			<p>Subscription ends: 06/23/2023, 02:06:44 AM</p> 
			<p>Time Remaining: 1 day, 12 hours</p>
		</section>

		<section class="flex gap-4">
			<Card v-for="_ in 4" class="h-full flex-col">
				<strong class="text-2xl">Trial</strong>
				<strong class="text-center text-sm">
					0$
					<br/>
					2 trial days on us
				</strong>
				<Separator class="!h-[6px] rounded-full"/>
				<ul class="text-sm list-disc ml-4">
					<li>Unlimited search</li>
					<li>SMS Notifications</li>
					<li>I've arrived</li>
					<li>Unique Virtual Machine</li>
					<li>Instant offers</li>
				</ul>
			</Card>
		</section>
	</div>
</template>

<script setup lang="ts">
import ViewHeader from '@/components/dashboard/ViewHeader.vue';
import Separator from '@/components/ui/Separator.vue';
import { Card  } from '@/components/ui/card';

</script>