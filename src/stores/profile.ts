import { ref } from 'vue';
import { defineStore } from 'pinia';

type Profile = {
	email: string,
	name: string,
	telegramId: string,
	isAmazonConnected: boolean,
	isBotRunning: 0 | 1,
	settings: {
		tapInterval: { from: number, to: number },
		autoStop: 0 | 1
	}
}

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