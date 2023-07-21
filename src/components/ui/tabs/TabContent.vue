<template>
	<div 
		v-if="selected"
		v-bind="excludeAttrs($attrs, ['class', 'role', 'tabindex'])"
		:class="cn(`
			w-full text-white
		`, $attrs.class as string)"
		role="tabpanel"
		:tabindex="0"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { computed, inject } from 'vue';
import { TABS_INJECTION_KEY, TabsProvideValue } from './TabsContainer.vue';

const props = defineProps({
	value: { type: String, required: true }
});

const injectedValue = inject(TABS_INJECTION_KEY) as TabsProvideValue;

const selected = computed(() => {
	return injectedValue.value.value === props.value;
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>