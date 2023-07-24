<template>
	<button
		v-bind="excludeAttrs($attrs, ['class', 'role', 'tabindex'])"
		role="tab"
		:tabindex="selected ? 0 : -1"
		:data-selected="selected"
		:class="cn(`
			w-full p-2 text-white hover:text-pink-400 transition-colors data-[selected=true]:text-pink-400
		`, $attrs.class as string)"
		@click="selectTab(value)"
	>
		<slot></slot>
	</button>
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

const selectTab = (value: string) => {
	injectedValue.changeValue(value);
}
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>