<template>
	<div
		v-bind="excludeAttrs($attrs, ['class', 'role', 'aria-label'])"
		:class="cn(`flex flex-col`, $attrs.class as string)"
    role="group"
    aria-label="group"
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