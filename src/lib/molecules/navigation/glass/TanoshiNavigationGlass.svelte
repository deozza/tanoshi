<script lang="ts">
	import type TanoshiNavigationModel from '../TanoshiMobileNavigationModel';

	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue, HEIGHTS, NAVIGATION_ORIENTATIONS, THEMES, WIDTHS } from '$lib/enums';
	import TanoshiMobileNavigationGlass from './TanoshiMobileNavigationGlass.svelte';
	import TanoshiDesktopNavigationGlass from './TanoshiDesktopNavigationGlass.svelte';
	import type TanoshiDesktopNavigationModel from '../TanoshiDesktopNavigationModel';

	export let tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel;
	export let tanoshiMobileNavigationModel: TanoshiNavigationModel;

	$: desktopTheme = getThemeEnumKeyByEnumValue(tanoshiDesktopNavigationModel.theme)
	const mobileTheme: THEMES | undefined = getThemeEnumKeyByEnumValue(tanoshiMobileNavigationModel.theme)
	let itemsAlignment: CONTAINER_ITEMS_ALIGNMENTS = CONTAINER_ITEMS_ALIGNMENTS.Center;

	if(tanoshiDesktopNavigationModel.orientation === NAVIGATION_ORIENTATIONS.Vertical) {
		itemsAlignment = CONTAINER_ITEMS_ALIGNMENTS.Start;
	}

	$: navigationDesktopContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(desktopTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(itemsAlignment)
		.setHeight(HEIGHTS.HAUTO)

	const navigationMobileContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(mobileTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setMobileSpacing(CONTAINER_ITEMS_SPACING.Between)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.HAUTO)
		.setMobileWidth(WIDTHS.W12)

</script>

<TanoshiDesktopNavigationGlass bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} bind:navigationDesktopContainerModel={navigationDesktopContainerModel} />

<TanoshiMobileNavigationGlass {tanoshiMobileNavigationModel} {navigationMobileContainerModel} {mobileTheme}/>
