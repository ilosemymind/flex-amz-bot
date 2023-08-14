<template>
	<button
		v-bind="excludeAttrs($attrs, ['class', 'type', 'role'])"
		:class="cn(``, $attrs.class as string)"
		type="button"
		:aria-expanded="injectedValue?.isOpen.value || false"
		:data-state="injectedValue?.isOpen.value ? 'open' : 'closed'"
		style="position: relative;"
		ref="selectTriggerRef"
		@click="handleClick"
		@keydown.prevent="handleKeydown"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { SELECT_INJECTION_KEY, type SelectProvideValue } from "./Select.vue";
import { cn, excludeAttrs } from "@/components/utils";

const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const selectTriggerRef = ref();

onMounted(() => {
  injectedValue!.triggerElement.value = selectTriggerRef.value;
});

async function handleClick() {
	if(injectedValue) {
		if(injectedValue.isOpen.value) {
			injectedValue.hideOptions();
		} else {
			injectedValue.showOptions();
		}
	}
}

function handleKeydown(event: KeyboardEvent) {
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowUp" ||
    event.key === "Enter" ||
    event.keyCode === 32
  ) {
    handleClick();
  }
}
</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>