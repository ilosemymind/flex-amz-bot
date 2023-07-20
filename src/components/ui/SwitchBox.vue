<template>
	<div class="switch-box-container">
		<input 
			:id="`switch-${uid}`" 
			type="checkbox" 
			@input="handleInput" 
			:checked="checked"
			:disabled="disabled"
			class="switch"
		>
		<label :for="`switch-${uid}`" class="switch-box"></label>
	</div>
</template>

<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue';

const uid = Math.random();

const props = defineProps({
	checked: { type: [Boolean, Number] as PropType<any>, required: true },
	disabled: { type: Boolean, default: false },
	width: { type: String, default: '44px' },
	height: { type: String, default: '25px' },
	colorScheme: { 
		type: Object, 
		default: {
			background: 'hsla(217, 4%, 41%, 1)',
			border: 'hsla(217, 4%, 41%, 1)',
			circle: 'hsla(0, 0%, 100%, 1)',
			checked: {
				background: 'hsla(0, 0%, 100%, 1)',
				border: 'hsla(0, 0%, 100%, 0.25)',
				circle: 'hsla(206, 14%, 20%, 1)',
			}
		}
	}
});

const { height, width, colorScheme, checked } = toRefs(props);

const emit = defineEmits(['update:checked', 'change']);
const handleInput = (event: Event) => {
	emit('update:checked', (event.target as HTMLInputElement).checked);
	emit('change');
}

let background = computed(() => {
	return checked.value ? colorScheme.value.checked.background : colorScheme.value.background;
});

let border = computed(() => {
	return checked.value ? colorScheme.value.checked.border : colorScheme.value.border;
});

let circle = computed(() => {
	return checked.value ? colorScheme.value.checked.circle : colorScheme.value.circle;
});
</script>

<style lang="scss" scoped>
.switch-box-container {
	--switch-box-circle-size: calc(v-bind(height) - 4px);

	.switch {
		display: none;
	}

	.switch-box {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
	}

	.switch + .switch-box,
	.switch + .switch-box::after {
		display: inline-block;
		position: relative;
		width: v-bind(width);
		height: v-bind(height);
		box-sizing: border-box;
		background: v-bind(background);
		border: 2px solid v-bind(border);
		border-radius: 9999px;
		transition: 250ms;
	}

	.switch + .switch-box::after {
		content: "";
		position: absolute;
		left: 0;
		background: v-bind(circle);
		width: var(--switch-box-circle-size);
		height: var(--switch-box-circle-size);
		border: none;
		box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.2), 0 0 0 2px v-bind(border);
	}

	.switch:checked + .switch-box {
		border: 2px solid v-bind(background);
		box-shadow: inset 0 0 0 calc((var(--switch-box-circle-size) / 2) + 2px) v-bind(background);
	}

	.switch:checked + .switch-box::after {
		left: calc(v-bind(width) - var(--switch-box-circle-size) - 4px);
		box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.2), 0 0 0 2px v-bind(background);
	}

	.switch:not(:checked) + .switch-box:hover:active {
		box-shadow: inset 0 0 0 calc((var(--switch-box-circle-size) / 2) + 2px + 2) v-bind(border);
	}
}
</style>