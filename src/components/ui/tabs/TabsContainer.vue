<template>
	<div 
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn('', $attrs.class as string)"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { Ref, provide, ref } from 'vue';

const props = defineProps({
	value: { type: String, required: true }
});

const selectedTab = ref(props.value) as Ref<string>;
provide('selectedTab', selectedTab);

const selectTab = (tab: string) => {
	selectedTab.value = tab;
};
provide('selectTab', selectTab);
</script>