<template>
	<button
		v-bind="excludeAttrs($attrs, ['class', 'role', 'tabindex'])"
		role="tab"
		:tabindex="selected ? 0 : -1"
		:class="cn(classList, $attrs.class as string)"
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

const classList = computed(() => {
	let result = "w-full text-white hover:text-pink-400 transition-colors ";

	if(selected.value) {
		result += "text-pink-400" 
	}

	return result;
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>