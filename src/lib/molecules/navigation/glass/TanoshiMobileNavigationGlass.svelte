<script lang="ts">
    import { onMount, onDestroy, type ComponentType } from 'svelte';
	import 'iconify-icon';

	import { CONTAINER_ORIENTATIONS, THEMES, CONTAINER_ITEMS_ALIGNMENTS, HEIGHTS, getThemeEnumKeyByEnumValue } from "$lib/enums";
	import { TanoshiContainerModel } from "$molecules";
	import TanoshiButtonMaterial from "$atoms/button/TanoshiButtonMaterial.svelte";
	import { TanoshiButtonModel } from '$atoms';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
	import type TanoshiMobileNavigationModel from '../TanoshiMobileNavigationModel';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
	import TanoshiIcon from '$atoms/icon/TanoshiIcon.svelte';

    export let tanoshiMobileNavigationModel: TanoshiMobileNavigationModel;
    export let navigationMobileContainerModel: TanoshiContainerModel;
    export let mobileTheme: THEMES;
	export let tanoshiButtonComponent: ComponentType = TanoshiButtonMaterial;


	const expandedMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setBackgroundTheme(mobileTheme)
		.setHeight(HEIGHTS.H100VH);

	const expandedCenterMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setBackgroundTheme(THEMES.Transparent)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(HEIGHTS.MINH25PRCT);

	const mobileMenuButton: TanoshiButtonModel = new TanoshiButtonModel('')
    	.setBasicTheme(THEMES.Transparent);

	const closeIcon: TanoshiIconModel = new TanoshiIconModel('mdi:close')
		.setColor('white')
		.setHeight(20)
		.setWidth(20);

	const menuIcon: TanoshiIconModel = new TanoshiIconModel('mdi:menu')
		.setColor(getThemeEnumKeyByEnumValue(tanoshiMobileNavigationModel.itemsWhenClosed[0].link.theme))
		.setHeight(20)
		.setWidth(20);

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

<nav >
	<TanoshiContainerGlass tanoshiContainerModel={navigationMobileContainerModel} >
		<svelte:component this={tanoshiButtonComponent}  tanoshiButtonModel={mobileMenuButton} on:click={mobileMenuHandler}>
			<span class="sr-only">Open main menu</span>
			{#if showMobileMenu === false}
				<TanoshiIcon tanoshiIconModel={menuIcon} />
			{:else}
				<TanoshiIcon tanoshiIconModel={closeIcon} />
			{/if}
		</svelte:component>

		{#each tanoshiMobileNavigationModel.itemsWhenClosed as tanoshiNavigationLinkModel}
			<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
		{/each}
	</TanoshiContainerGlass>

	{#if showMobileMenu === true}
		<div id="mobile-menu">
			<TanoshiContainerGlass tanoshiContainerModel={expandedMobileNavigationContainer}>
				<TanoshiContainerMaterial tanoshiContainerModel={expandedCenterMobileNavigationContainer}>
					{#each tanoshiMobileNavigationModel.itemsWhenOpened as tanoshiNavigationLinkModel}
						<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
					{/each}
				</TanoshiContainerMaterial>

			</TanoshiContainerGlass>
		</div>
	{/if}
</nav>

<style>

nav {
  display: none;
  position: fixed;
  width: 100vw;
  z-index: 10;
  top: 0

}

nav > div{
  height: 4rem!important;
}

nav > div#mobile-menu{
  height: 100vh!important;
  z-index: 10;
}

@media (max-width: 639px) {
  nav {
    display: block;
  }
}

</style>