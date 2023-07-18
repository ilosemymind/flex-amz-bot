<template>
	<div>
		<span>Dashboard page</span>
		
		<RouterView v-slot="{ Component, route }">
			<Transition name="fade" appear mode="out-in">
				<component :is="Component" :key="route.fullPath"/>
			</Transition>
		</RouterView>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>