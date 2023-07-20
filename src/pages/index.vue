<template>
	<MainLayout class="flex flex-col gap-16">
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

				<button 
					class="flex flex-col gap-[5px] group transition duration-300"
					@click="toggleMenuSheet"
				>
					<span 
						class="w-8 h-[5px] bg-white rounded-full transition-[inherit]"
						:class="{
							'-rotate-45 translate-y-[10px]': showMenuSheet
						}"
					></span>
					<span 
						class="w-8 h-[5px] bg-white rounded-full transition-[inherit] group-hover:-translate-x-4"
						:class="{
							'group-hover:!-translate-x-12 opacity-0': showMenuSheet
						}"
					></span>
					<span 
						class="w-8 h-[5px] bg-white rounded-full transition-[inherit]"
						:class="{
							'rotate-45 -translate-y-[10px]': showMenuSheet
						}"
					></span>
				</button>
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

import MainLayout from '@/components/layouts/MainLayout.vue';

const [ emblaNode, emblaApi ] = emblaCarouselVue({ loop: true });

const showMenuSheet = ref(false);
const toggleMenuSheet = () => {
	showMenuSheet.value = !showMenuSheet.value;
}

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