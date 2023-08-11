<template>
	<Select v-model="lang">
		<SelectTrigger>
			{{ lang }}
		</SelectTrigger>

		<SelectContent>
			<SelectGroup>
				<SelectItem v-for="option in i18n.availableLocales" :value="option">
					{{ option }}
				</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectGroup,
	SelectItem
} from '@/components/ui/select';

const i18n = useI18n();

const lang = ref(i18n.locale);
</script>