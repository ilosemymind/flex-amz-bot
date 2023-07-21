<template>
	<div
		v-bind="excludeAttrs($attrs, ['class', 'role'])"
		role="tablist"
		:class="cn('flex', $attrs.class as string)"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { useSlots } from 'vue';

const slots = useSlots();

const defaultSlots = () => slots.default && slots.default();
console.log(defaultSlots);
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>