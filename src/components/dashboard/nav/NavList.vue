<template>
	<ul>
		<NavItem 
			@click="router.push('/dashboard')"
		>
			<span>Dashboard</span>
			<!-- <SvgIcon/> -->
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/calendar')"
		>
			<span>Calendar</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/offers')"
		>
			<span>Offers</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/membership')"
		>
			<span>Membership</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/earnings')"
		>
			<span>Earnings</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/referrals')"
		>
			<span>Referrals</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/settings')"
		>
			<span>Settings</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/faq')"
		>
			<span>F.A.Q.</span>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/help')"
		>
			<span>Help</span>
		</NavItem>
	</ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router/auto';

import NavItem from './NavItem.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const router = useRouter();
</script>