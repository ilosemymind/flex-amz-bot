<template>
	<ul class="flex flex-col gap-4 text-white">
		<NavItem 
			@click="router.push('/dashboard')"
		>
			<span>{{ t('dashboard.nav.index') }}</span>
			<SvgIcon name="dashboard"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/calendar')"
		>
			<span>{{ t('dashboard.nav.calendar') }}</span>
			<SvgIcon name="calendar"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/offers')"
		>
			<span>{{ t('dashboard.nav.offers') }}</span>
			<SvgIcon name="offers"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/membership')"
		>
			<span>{{ t('dashboard.nav.membership') }}</span>
			<SvgIcon name="membership"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/earnings')"
		>
			<span>{{ t('dashboard.nav.earnings') }}</span>
			<SvgIcon name="earnings"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/referrals')"
		>
			<span>{{ t('dashboard.nav.referrals') }}</span>
			<SvgIcon name="referrals"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/settings')"
		>
			<span>{{ t('dashboard.nav.settings') }}</span>
			<SvgIcon name="settings"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/faq')"
		>
			<span>{{ t('dashboard.nav.faq') }}</span>
			<SvgIcon name="faq"/>
		</NavItem>
		<NavItem 
			@click="router.push('/dashboard/help')"
		>
			<span>{{ t('dashboard.nav.help') }}</span>
			<SvgIcon name="help"/>
		</NavItem>
	</ul>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router/auto';

import NavItem from './NavItem.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const { t } = useI18n();

const router = useRouter();
</script>