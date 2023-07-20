<template>
	<div
		v-bind="excludeAttrs($attrs, ['class', 'role'])"
		role="tablist"
		:class="cn('', $attrs.class as string)"
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