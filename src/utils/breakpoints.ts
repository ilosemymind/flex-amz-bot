import { useMediaQuery } from '@vueuse/core';

const isXsScreen = useMediaQuery('(min-width: 480px)');
const isSmScreen = useMediaQuery('(min-width: 640px)');
const isMdScreen = useMediaQuery('(min-width: 768px)');
const isLgScreen = useMediaQuery('(min-width: 1024px)');
const isXlScreen = useMediaQuery('(min-width: 1280px)');
const is2XlScreen = useMediaQuery('(min-width: 1440px)');
const is3XlScreen = useMediaQuery('(min-width: 1600px)');

export {
	isXsScreen,
	isSmScreen,
	isMdScreen,
	isLgScreen,
	isXlScreen,
	is2XlScreen,
	is3XlScreen
}