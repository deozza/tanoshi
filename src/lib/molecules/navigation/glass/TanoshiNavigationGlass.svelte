<script lang="ts">
	import type TanoshiNavigationModel from '../TanoshiDesktopNavigationModel';

	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue, HEIGHTS, THEMES, WIDTHS } from '$lib/enums';
	import TanoshiMobileNavigationGlass from './TanoshiMobileNavigationGlass.svelte';
	import TanoshiDesktopNavigationGlass from './TanoshiDesktopNavigationGlass.svelte';
	import type TanoshiDesktopNavigationModel from '../TanoshiMobileNavigationModel';

	export let tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel;
	export let tanoshiMobileNavigationModel: TanoshiNavigationModel;

	$: desktopTheme = getThemeEnumKeyByEnumValue(tanoshiDesktopNavigationModel.theme)
	const mobileTheme: THEMES | undefined = getThemeEnumKeyByEnumValue(tanoshiMobileNavigationModel.theme)
	
	$: navigationDesktopContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(desktopTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
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
