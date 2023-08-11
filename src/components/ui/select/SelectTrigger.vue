<template>
	<button
		ref="selectTriggerRef"
		:aria-expanded="injectedValue?.isOpen.value || false"
		:data-state="injectedValue?.isOpen.value ? 'open' : 'closed'"
		style="position: relative;"
		@click="handleClick"
		@keydown.prevent="handleKeydown"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { SELECT_INJECTION_KEY, type SelectProvideValue } from "./Select.vue";

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
  // await nextTick();
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