<script setup lang="ts">
import { RouterView } from 'vue-router/auto';
</script>

<template>
  <RouterView v-slot="{ Component, route }">
		<template v-if="Component">
			<Suspense>
				<component :is="Component" :key="route.fullPath"/>

				<template #fallback>
					<div class="w-full flex flex-1 justify-center items-center">Loading...</div>
				</template>
			</Suspense>
		</template>
	</RouterView>
</template>
