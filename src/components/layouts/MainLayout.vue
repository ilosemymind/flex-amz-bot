<template>
	<div 
		:class="cn(`
			h-full sm:w-3/4 sm:max-w-[75%] sm:max-h-[755px] m-6 p-9 
			bg-gray-900 border-8 border-blue-600 rounded-[30px]`, 
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