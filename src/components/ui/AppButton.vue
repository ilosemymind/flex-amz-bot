<template>
	<component
		v-bind="excludeAttrs($attrs, ['class'])"
		:is="element"
		:class="cn(buttonVariants({
			className: $attrs.class as string,
			variant
		}))" 
		:type="$attrs.href ? 'text/html' : 'button'"
	>
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
import { PropType, computed, useAttrs } from 'vue';
import { cn, excludeAttrs } from '../utils';
import { cva, VariantProps } from "class-variance-authority";

const attrs = useAttrs();

const element = computed(() => {
	return attrs.href ? 'a' : 'button';
});


defineProps({
	variant: { type: String as PropType<Variant>, default: 'default' }
});

const buttonVariants = cva(
	`flex items-center justify-center gap-2 text-sm leading-3 transition duration-200 whitespace-nowrap
	disabled:cursor-not-allowed`,
	{
		variants: {
			variant: {
				default: `
					min-w-[162px] px-7 py-3 text-white bg-blue-600 borde rounded-lg
					hover:bg-transparent disabled:opacity-60
				`,
				ghost: `
					relative p-1 text-lavender-500 bg-transparent
					before:content-[''] before:absolute before:bottom-[-1px] before:top-[auto] before:left-0 before:right-[100%] before:h-[1px] before:bg-[currentColor] before:transition-all before:duration-300
					hover:before:right-0 disabled:text-gray-400
				`
			}
		}
	}
);

type Variant = VariantProps<typeof buttonVariants>["variant"];
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>