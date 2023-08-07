<template>
	<div 
		:class="cn(`
			sm:w-3/4 sm:max-w-[75%] sm:h-[755px] sm:max-h-[inherit] m-6 p-9 text-white
			bg-gray-900 border-8 border-blue-600 rounded-[30px] overflow-hidden`, 
			$attrs.class as string
		)" 
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn } from '../utils';
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>