<template>
	<div>
		<div class="embla" ref="emblaNode">
			<div class="embla__container">
				<div class="embla__slide">Slide 1</div>
				<div class="embla__slide">Slide 2</div>
				<div class="embla__slide">Slide 3</div>
			</div>
		</div>

		<button @click="emblaApi?.scrollPrev">&lt;</button>
		<button @click="emblaApi?.scrollNext">></button>
	</div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';

const [ emblaNode, emblaApi ] = emblaCarouselVue({ loop: true });
</script>

<style scoped>
.embla {
	overflow: hidden;
}

.embla__container {
	display: flex;
}

.embla__slide {
	flex: 0 0 100%;
	min-width: 0;
}
</style>