<script lang="ts">
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getNavigationOrientationEnumKeyByEnumValue, getThemeEnumKeyByEnumValue, HEIGHTS, NAVIGATION_ORIENTATIONS, THEMES, WIDTHS } from '$lib/enums';
	import TanoshiMobileNavigationMaterial from './TanoshiMobileNavigationMaterial.svelte';
	import TanoshiDesktopNavigationMaterial from './TanoshiDesktopNavigationMaterial.svelte';
	import type TanoshiMobileNavigationModel from '../TanoshiMobileNavigationModel';
	import type TanoshiDesktopNavigationModel from '../TanoshiDesktopNavigationModel';

	export let tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel;
	export let tanoshiMobileNavigationModel: TanoshiMobileNavigationModel;

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

<TanoshiDesktopNavigationMaterial bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} bind:navigationDesktopContainerModel={navigationDesktopContainerModel} />

<TanoshiMobileNavigationMaterial {tanoshiMobileNavigationModel} {navigationMobileContainerModel} {mobileTheme}/>
