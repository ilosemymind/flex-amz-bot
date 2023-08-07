<template>
	<ul class="flex flex-col gap-4 text-white">
		<NavItem to="/dashboard">
			<span>{{ t('dashboard.nav.index') }}</span>
			<SvgIcon name="dashboard" />
		</NavItem>
		<NavItem to="/dashboard/filters">
			<span>{{ t('dashboard.nav.filters') }}</span>
			<SvgIcon name="funnel" />
		</NavItem>
		<NavItem to="/dashboard/calendar">
			<span>{{ t('dashboard.nav.calendar') }}</span>
			<SvgIcon name="calendar" />
		</NavItem>
		<NavItem to="/dashboard/offers">
			<span>{{ t('dashboard.nav.offers') }}</span>
			<SvgIcon name="offers" />
		</NavItem>
		<NavItem to="/dashboard/membership">
			<span>{{ t('dashboard.nav.membership') }}</span>
			<SvgIcon name="membership" />
		</NavItem>
		<NavItem to="/dashboard/earnings">
			<span>{{ t('dashboard.nav.earnings') }}</span>
			<SvgIcon name="earnings" />
		</NavItem>
		<NavItem to="/dashboard/referrals">
			<span>{{ t('dashboard.nav.referrals') }}</span>
			<SvgIcon name="referrals" />
		</NavItem>
		<NavItem to="/dashboard/settings">
			<span>{{ t('dashboard.nav.settings') }}</span>
			<SvgIcon name="settings" />
		</NavItem>
		<NavItem to="/dashboard/faq">
			<span>{{ t('dashboard.nav.faq') }}</span>
			<SvgIcon name="faq" />
		</NavItem>
		<NavItem to="/dashboard/help">
			<span>{{ t('dashboard.nav.help') }}</span>
			<SvgIcon name="help" />
		</NavItem>
	</ul>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import NavItem from './NavItem.vue';
import SvgIcon from '@/components/ui/SvgIcon.vue';

const { t } = useI18n();
</script>