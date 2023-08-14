<template>
	<div 
		v-show="injectedValue?.isOpen.value"
		v-bind="excludeAttrs($attrs, ['class', 'role', 'style'])"
		:class="cn(``, $attrs.class as string)"
		style="position: absolute;"
		role="listbox"
		ref="selectContentRef"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { cn, excludeAttrs } from '@/components/utils';
import { SELECT_INJECTION_KEY, type SelectProvideValue } from "./Select.vue";

const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const selectContentRef = ref();

onMounted(() => {
  injectedValue!.triggerElement.value = selectContentRef.value;
});
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>