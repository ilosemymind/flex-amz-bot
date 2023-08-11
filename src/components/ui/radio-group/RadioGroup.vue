<template>
	<fieldset
		v-bind="excludeAttrs($attrs, ['class'])"
		:class="cn(`
			text-white
		`, $attrs.class as string)" 
	>
		<slot></slot>
	</fieldset>
</template>

<script setup lang="ts">
import { cn, excludeAttrs } from '@/components/utils';


</script>

<script lang="ts">
export default {
	inheritAttrs: false
}
</script>