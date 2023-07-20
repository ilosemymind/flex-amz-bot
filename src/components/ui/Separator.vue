<template>
	<div
		v-bind="excludeAttrs($attrs, ['class', 'role'])"
		:class="cn(classList, $attrs.class as string)" 
		:role="decorative ? 'none' : 'separator'"
	>
	</div>
</template>

<script setup lang="ts">
import { PropType, computed, toRefs } from 'vue';
import { cn, excludeAttrs } from '../utils';

const props = defineProps({
	orientation: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" },
	decorative: { type: Boolean as PropType<boolean>, default: false }
});

const { orientation } = toRefs(props);

const classList = computed(() => {
	let result = "shrink-0 bg-black ";

	if(orientation.value === "horizontal") {
		result += "h-[1px] w-full" 
	} else {
		result += "h-auto w-[1px]";
	}

	return result;
});
</script>