import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

type Profile = {
	email: string,
	name: string,
	telegramId: string,
	isAmazonConnected: boolean,
	isRunning: 0 | 1,
	settings: {
		tap_interval: number[],
		auto_stop: 0 | 1
	}
}

export const useProfileStore = defineStore('profile', () => {
	const state = ref<Profile>();

	const setValue = (newValue: Profile) => {
		state.value = newValue;
	}

	const isAuth = computed(() => {
		return state.value;
	});

	return {
		state,
		setValue,
		isAuth
	}
});