import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', () => {
	const state = ref({
		name: "Christina",
		surname: "Makoviy",
		email: "christina.makoviy@gmail.com",
		phone: "0955888887",
		birthDate: "17.04.2000",
		gender: "woman",
		prefferedConnection: "telegram",
	});

	const setValue = (newValue) => {
		state.value = newValue;
	}

	const fullName = computed(() => {
		if(state.value) return `${state.value.name} ${state.value.surname}`;

		return "";
	});

	return {
		state,
		setValue,
		fullName,
	}
});