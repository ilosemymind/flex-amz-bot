import { ref } from 'vue';
import { defineStore } from 'pinia';

import Profile from '@/types/Profile';

export const useProfileStore = defineStore('profile', () => {
	const state = ref<Profile>();

	const setValue = (newValue: Profile) => {
		state.value = newValue;
	}

	const reset = () => {
		state.value = undefined;
	}

	return {
		state,
		setValue,
		reset
	}
});