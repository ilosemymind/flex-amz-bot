import profileService from '@/services/profile.service';
import { useProfileStore } from '@/stores/profile';
import { createRouter, createWebHistory } from 'vue-router/auto';
import Cookies from "js-cookie";

export const router = createRouter({
  history: createWebHistory(),
});

const openRoutes = [ "/signup", "/login" ];

router.beforeEach(async (from, _, next) => {
	const accessToken = Cookies.get('accessToken');
	const profileStore = useProfileStore();
	const isProtectedRoute = (openRoutes.filter(route => 
		from.path.startsWith(route) || from.path === "/").length === 0);

	if(accessToken) {
		const userProfile = await profileService.getProfile();
		console.log(userProfile);

		if(userProfile) profileStore.setValue(userProfile);
	}

	if(profileStore.state) {
		if(isProtectedRoute 
			&& (!profileStore.state.telegramId || !profileStore.state.isAmazonConnected)
			&& !from.path.startsWith("/connections")
		) {
			next({ path: "/connections" });
		}
	} else {
		if(isProtectedRoute) {
			next({ path: "/login" });
		}
	}

	next();
});