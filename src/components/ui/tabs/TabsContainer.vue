<template>
	<div 
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn('w-full', $attrs.class as string)"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { InjectionKey, Ref, provide, ref } from 'vue';

const props = defineProps({
	value: { type: String, required: true }
});

const selectedTab = ref(props.value);
const selectTab = (tab: string) => {
	selectedTab.value = tab;
};

provide<TabsProvideValue>(TABS_INJECTION_KEY, {
	value: selectedTab,
	changeValue: selectTab
});
</script>

<script lang="ts">
export interface TabsProvideValue {
  value: Readonly<Ref<string>>;
  changeValue: (value: string) => void;
}

export const TABS_INJECTION_KEY = Symbol() as InjectionKey<TabsProvideValue>;

export default {
	inheritAttrs: false
}
</script>