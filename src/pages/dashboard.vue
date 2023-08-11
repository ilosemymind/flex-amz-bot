<template>
	<DashboardLayout>	
		<RouterView v-slot="{ Component, route }">
			<template v-if="Component">
				<Transition name="fade" appear mode="out-in">
					<KeepAlive :include="keepAliveViews">
						<Suspense>
							<component :is="Component" :key="route.fullPath"/>

							<template #fallback>
								<div class="w-full flex flex-1 justify-center items-center">Loading...</div>
							</template>
						</Suspense>
					</KeepAlive>
				</Transition>
			</template>
		</RouterView>
	</DashboardLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import DashboardLayout from '@/components/layouts/DashboardLayout.vue';

const keepAliveViews = "index,settings";
</script>