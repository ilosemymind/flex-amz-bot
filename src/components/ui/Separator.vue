<template>
	<div
		v-bind="excludeAttrs($attrs, ['class', 'role', 'data-orientation'])"
		:class="cn(`
			shrink-0 bg-gray-800 
			data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full
			data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[1px]
		`, $attrs.class as string)" 
		:role="decorative ? 'none' : 'separator'"
		:data-orientation="orientation"
	>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { cn, excludeAttrs } from '../utils';

defineProps({
	orientation: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" },
	decorative: { type: Boolean as PropType<boolean>, default: false }
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>