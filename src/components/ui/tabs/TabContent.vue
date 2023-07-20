<template>
	<div 
		v-if="selected"
		v-bind="excludeAttrs($attrs, ['class', 'role', 'tabindex'])"
		:class="cn(`
			text-white
		`, $attrs.class as string)"
		role="tabpanel"
		:tabindex="0"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';
import { Ref, computed, inject } from 'vue';

const props = defineProps({
	value: { type: String, required: true }
});

const selectedTab = inject('selectedTab') as Ref<string>;

const selected = computed(() => {
	return selectedTab.value === props.value;
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>