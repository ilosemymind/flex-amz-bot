import profileService from '@/services/profile.service';
import { useProfileStore } from '@/stores/profile';
import { createRouter, createWebHistory } from 'vue-router/auto';

export const router = createRouter({
  history: createWebHistory(),
});

const openRoutes = [ "/signup", "/login" ];

router.beforeEach(async (from, _, next) => {
	const profileStore = useProfileStore();
	const isProtectedRoute = (openRoutes.filter(route => 
		from.path.startsWith(route) || from.path === "/").length === 0);

	const userProfile = await profileService.getProfile();
	console.log(userProfile, 'userProfile')

	if(userProfile) {
		profileStore.setValue(userProfile);
	} else {
		profileStore.reset();
	}

	if(profileStore.state) {
		if(isProtectedRoute 
			&& (!profileStore.state.telegramId || !profileStore.state.isAmazonConnected)
			&& !from.path.startsWith("/connections")
		) {
			next({ path: "/connections" });
			return;
		}
	} else {
		if(isProtectedRoute) {
			console.log(profileStore.state)
			next({ path: "/login" });
			return;
		}
	}

	next();
});