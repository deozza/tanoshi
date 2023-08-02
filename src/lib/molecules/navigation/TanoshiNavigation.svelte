<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons/index.js';

	import './tanoshiNavigation.css';
	import type TanoshiNavigationModel from './TanoshiNavigationModel';

	import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
	import TanoshiContainer from '$lib/molecules/container/TanoshiContainer.svelte';

	import TanoshiLink from '$lib/atoms/link/TanoshiLink.svelte';

	import TanoshiButton from '$lib/atoms/button/TanoshiButton.svelte';
	import TanoshiButtonModel from '$lib/atoms/button/TanoshiButtonModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, WIDTHS } from '$lib/enums';

	export let tanoshiNavigationModel: TanoshiNavigationModel;

	const horizontalNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(tanoshiNavigationModel.theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)


	const mobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C).setTheme(
		tanoshiNavigationModel.theme
	);
	const desktopNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(tanoshiNavigationModel.theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight('');

	const desktopNavigationLeftModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(tanoshiNavigationModel.theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	const desktopNavigationCenterModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(tanoshiNavigationModel.theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	const desktopNavigationRightModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(tanoshiNavigationModel.theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	if (tanoshiNavigationModel.orientation === 'vertical') {
		desktopNavigationContainer.setDesktopOrientation(CONTAINER_ORIENTATIONS.C);
		desktopNavigationLeftModuleContainer.setDesktopOrientation(CONTAINER_ORIENTATIONS.C);
		desktopNavigationCenterModuleContainer.setDesktopOrientation(CONTAINER_ORIENTATIONS.C);
		desktopNavigationRightModuleContainer.setDesktopOrientation(CONTAINER_ORIENTATIONS.C);
	}


	const mobileMenuButton: TanoshiButtonModel = new TanoshiButtonModel('').setTheme(
		tanoshiNavigationModel.theme
	);

	let showMobileMenu: boolean = false;

	onMount(() => {
		showMobileMenu = false;
	});

	onDestroy(() => {
		showMobileMenu = false;
	});

	function mobileMenuHandler() {
		showMobileMenu = !showMobileMenu;
	}
</script>

<nav class="sticky-nav">
	<TanoshiContainer tanoshiContainerModel={desktopNavigationContainer}>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationLeftModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtLeft as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationCenterModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtCenter as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationRightModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtRight as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
	</TanoshiContainer>
</nav>

<nav class="burger-nav" class:z-10={showMobileMenu === true}>
	<TanoshiContainer tanoshiContainerModel={horizontalNavigationContainer} >
		<TanoshiButton tanoshiButtonModel={mobileMenuButton} on:click={mobileMenuHandler}>
			<span class="sr-only">Open main menu</span>
			{#if showMobileMenu === false}
				<Fa icon={faBars} />
			{:else}
				<Fa icon={faTimes} />
			{/if}
		</TanoshiButton>
	</TanoshiContainer>

	{#if showMobileMenu === true}
		<div id="mobile-menu">
			<TanoshiContainer tanoshiContainerModel={mobileNavigationContainer}>
				{#each [...tanoshiNavigationModel.itemsAtLeft, ...tanoshiNavigationModel.itemsAtCenter, ...tanoshiNavigationModel.itemsAtRight,] as tanoshiLinkModel}
					<TanoshiLink {tanoshiLinkModel} />
				{/each}
			</TanoshiContainer>
		</div>
	{/if}
</nav>
