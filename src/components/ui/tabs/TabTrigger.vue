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
import { Ref, computed, inject } from 'vue';

const props = defineProps({
	value: { type: String, required: true }
});

const selectedTab = inject('selectedTab') as Ref<string>;
const selectTab = inject('selectTab') as (tab: string) => void;

const selected = computed(() => {
	return selectedTab.value === props.value;
});

const classList = computed(() => {
	let result = "text-white hover:text-pink-400 transition-colors ";

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