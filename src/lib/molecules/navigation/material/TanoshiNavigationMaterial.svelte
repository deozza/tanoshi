<script lang="ts">
	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue, HEIGHTS, THEMES } from '$lib/enums';
	import TanoshiMobileNavigationMaterial from './TanoshiMobileNavigationMaterial.svelte';
	import TanoshiDesktopNavigationMaterial from './TanoshiDesktopNavigationMaterial.svelte';
	import type TanoshiMobileNavigationModel from '../TanoshiDesktopNavigationModel';
	import type TanoshiDesktopNavigationModel from '../TanoshiMobileNavigationModel';

	export let tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel;
	export let tanoshiMobileNavigationModel: TanoshiMobileNavigationModel;

	$: desktopTheme = getThemeEnumKeyByEnumValue(tanoshiDesktopNavigationModel.theme)
	const mobileTheme: THEMES | undefined = getThemeEnumKeyByEnumValue(tanoshiMobileNavigationModel.theme)
	
	$: navigationDesktopContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(desktopTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.HAUTO)

	const navigationMobileContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setBackgroundTheme(mobileTheme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.HAUTO)

</script>

<TanoshiDesktopNavigationMaterial bind:tanoshiDesktopNavigationModel={tanoshiDesktopNavigationModel} bind:navigationDesktopContainerModel={navigationDesktopContainerModel} />

<TanoshiMobileNavigationMaterial {tanoshiMobileNavigationModel} {navigationMobileContainerModel} {mobileTheme}/>
