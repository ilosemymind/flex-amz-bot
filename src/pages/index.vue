<template>
	<MainLayout class="relative flex flex-col gap-16">
		<header>
			<nav class="flex justify-between text-white">
				<ul class="flex gap-4">
					<li>
						<RouterLink to="/">
							Main
						</RouterLink>
					</li>
					<li>
						<a href="#pricing">
							Price
						</a>
					</li>
				</ul>

				<Sheet>
					<SheetTrigger class="z-50"/>

					<SheetContent class="flex flex-col justify-between px-7 pt-20 pb-5">
						<LocalizationSelect/>

						<RouterLink v-if="profileStore.state" to="/dashboard">
							<AppButton
								class="font-light text-md mt-auto"
								variant="ghost"
								size="sm"
							>
								Dashboard
							</AppButton>
						</RouterLink>
						
						<div v-else class="flex flex-col gap-4">
							<RouterLink to="/login">
								<AppButton
									class="font-light text-md mt-auto"
									variant="ghost"
									size="sm"
								>
									Sign in
								</AppButton>
							</RouterLink>
							<RouterLink to="/signup">
								<AppButton
									class="font-light text-md mt-auto"
									variant="ghost"
									size="sm"
								>
									Sign up
								</AppButton>
							</RouterLink>
						</div>

						<div class="flex flex-col items-center gap-5">
							<button>
								<SvgIcon name="facebook"/>
							</button>
							
							<button>
								<SvgIcon name="send"/>
							</button>
						</div>

						<div>
							<img class="" :src="logoImg" alt="Logo"/>
							<p class="text-center">
								2023 All rights reserved ©
								<br/>
								Partners
							</p>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>

		<main>
			<article class="h-full flex justify-between gap-4 cursor-default">
				<section class="flex flex-col gap-12">
					<span class="text-blue-700 text-[50px]">
						Amazon Flex Bot
					</span>

					<span class="font-light text-white text-lg">
						Stop watching how others earn. Get the best offers with Flex-grabber!
					</span>

					<div
						class="relative w-[200px] h-[200px] xs:w-[300px] xs:h-[300px]" 
						@pointerover="animation?.goToAndPlay(1)"
					>
						<img 
							src="../assets/images/hand.png" 
							class="" 
							alt="Hand images"
						>
						<div 
							class="absolute inset-0 translate-x-[30%] translate-y-[-14%] rotate-[25deg] scale-[0.7]" 
							id="geometcism"
						></div>
					</div>
				</section>

				<section class="flex gap-16 font-light text-white text-lg vertical-lr">
					<span>#traffic</span>
					<span>#lead</span>
					<span>#creative</span>
				</section>
			</article>

			<div class="overflow-hidden" ref="emblaNode">
				<div class="flex">
					<div class="embla__slide">Slide 1</div>
					<div class="embla__slide">Slide 2</div>
					<div class="embla__slide">Slide 3</div>
				</div>
			</div>
			
			<button @click="emblaApi?.scrollPrev">&lt;</button>
			<button @click="emblaApi?.scrollNext">></button>
		</main>
	</MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import emblaCarouselVue from 'embla-carousel-vue';
import bodymovin, { AnimationItem } from 'lottie-web';
import { useProfileStore } from '@/stores/profile';
import logoImg from '@/assets/images/logo.png';

import MainLayout from '@/components/layouts/MainLayout.vue';
import AppButton from '@/components/ui/AppButton.vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SvgIcon from '@/components/ui/SvgIcon.vue';
import LocalizationSelect from '@/components/LocalizationSelect.vue';

const profileStore = useProfileStore();

const [ emblaNode, emblaApi ] = emblaCarouselVue({ loop: true });

const animation = ref<AnimationItem>();

onMounted(() => {
	const animationContainer = document.getElementById('geometcism');
	if(animationContainer) {
		animation.value = bodymovin.loadAnimation({
			container: animationContainer,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			path: '/src/assets/animations/geometcism.json'
		});
	}
});
</script>

<style scoped>
.embla__slide {
	flex: 0 0 100%;
	min-width: 0;
	background: lavender;
}
</style>