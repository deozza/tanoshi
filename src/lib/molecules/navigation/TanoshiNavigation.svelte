<script lang="ts">
	import './tanoshiNavigation.css';
	import type TanoshiNavigationModel from './TanoshiNavigationModel';

	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue, HEIGHTS, THEMES } from '$lib/enums';
	import TanoshiDesktopNavigation from './TanoshiDesktopNavigation.svelte';
	import TanoshiMobileNavigation from './TanoshiMobileNavigation.svelte';

	export let tanoshiNavigationModel: TanoshiNavigationModel;

	const theme: THEMES | undefined = getThemeEnumKeyByEnumValue(tanoshiNavigationModel.theme)
	
	if(!theme) {
		throw new Error('Theme is not defined');
	}

	const navigationContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

</script>

<TanoshiDesktopNavigation {tanoshiNavigationModel} {navigationContainerModel} {theme} />

<TanoshiMobileNavigation {tanoshiNavigationModel} {navigationContainerModel} {theme}/>
