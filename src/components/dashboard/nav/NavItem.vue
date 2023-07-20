<template>
	<li>
		<RouterLink 
			class="
				w-[194px] flex justify-between items-center gap-2 p-1 cursor-pointer 
				hover:text-pink-400 [&>svg]:hover:text-sky-200 transition-colors [&>*]:transition-[inherit] duration-100
			"
			:class="{
				'text-pink-400 [&>svg]:text-sky-200': active
			}"
			:to="to"
		>
			<slot></slot>
		</RouterLink>
	</li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router/auto';
import { RouterLink } from 'vue-router/auto';

const props = defineProps({
	to: { type: String, required: true } 
})

const route = useRoute();

const active = computed(() => route.fullPath === props.to);
</script>