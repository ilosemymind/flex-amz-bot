<template>
	<section class="w-full flex flex-col items-center gap-4">
		<button class="relative w-[128px] h-[128px] bg-gray-925 shadow-[inset_0_35px_60px_-15px_rgb(12,12,12)] rounded-full">
			<div 
				class="rotate-[25deg] scale-[1.5] pointer-events-none" 
				ref="animationContainerRef"
			></div>

			<div 
				class="absolute inset-0 w-full h-full flex justify-center items-center"
				@click="handleBotToggle"
			>
				<img 
					v-if="profileStore.state?.isBotRunning === 1"
					:src="stopImg" 
					alt="Stop"
					class="w-[42px] h-[42px]"
				>

				<img 
					v-else
					:src="playImg" 
					alt="Play"
					class="w-[42px] h-[42px]"
				>
			</div>
		</button>

		<b class="cursor-default">
			{{ profileStore.state?.isBotRunning === 1 ? "Start" : "Stop" }}
		</b>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import bodymovin, { AnimationItem } from 'lottie-web';
import playImg from '@/assets/images/play.png';
import stopImg from '@/assets/images/stop.png';
import { useProfileStore } from '@/stores/profile';
import botService from '@/services/bot.service';

const profileStore = useProfileStore();

const animation = ref<AnimationItem>();
const animationContainerRef = ref();

onMounted(() => {
	const animationContainer = animationContainerRef.value;

	if(animationContainer) {
		animation.value = bodymovin.loadAnimation({
			container: animationContainer,
			renderer: 'svg',
			loop: true,
			autoplay: false,
			path: '/src/assets/animations/geometcism.json'
		});

		if(profileStore.state?.isBotRunning === 1) {
			if(animation.value)  animation.value.goToAndPlay(1);
		}
	}
});

const handleBotToggle = async () => {
	if(profileStore.state) {
		if(profileStore.state.isBotRunning === 1) {
			const response = await botService.stopBot();

			if(response.status === 200) {
				profileStore.state.isBotRunning = 0;
			}
		} 

		if(profileStore.state.isBotRunning === 0) {
			const response = await botService.startBot();

			if(response.status === 200) {
				profileStore.state.isBotRunning = 1;
			}
		}
	}
}

watchEffect(() => {
	if(profileStore.state && profileStore.state.isBotRunning === 1) {
		if(animation.value) animation.value.goToAndPlay(1);
	} else {
		if(animation.value) animation.value.stop();
	}
});
</script>