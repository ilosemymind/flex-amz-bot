<template>
	<div
		v-if="modelValue"
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(buttonVariants({
			className: $attrs.class as string,
			variant,
		}))" 
	>
		<slot></slot>

		<button 
			class="opacity-50 hover:opacity-100 transition-opacity" 
			@click="modelValue = false"
		>
			<SvgIcon name="cross"/>
		</button>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { cn, excludeAttrs } from '@/components/utils';
import { cva, VariantProps } from "class-variance-authority";

import SvgIcon from '../SvgIcon.vue';

defineProps({
	variant: { type: String as PropType<Variant>, default: 'default' },
});

const modelValue = defineModel<boolean>();

const buttonVariants = cva(`
		flex items-center justify-center gap-3 py-3 px-5 text-sm leading-3 whitespace-nowrap
		bg-opacity-70 border rounded-lg
	`,
	{
		variants: {
			variant: {
				default: `
					text-gray-500 bg-gray-200 border-gray-500
				`,
				success: `
					text-green-600 bg-green-100 border-green-600
				`,
				warning: `
					text-amber-600 bg-amber-200 border-amber-600
				`,
				error: `
					text-red-300 bg-red-100 border-red-300
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