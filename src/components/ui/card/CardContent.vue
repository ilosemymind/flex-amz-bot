<template>
	<div
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(`w-full`, $attrs.class as string)" 
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>