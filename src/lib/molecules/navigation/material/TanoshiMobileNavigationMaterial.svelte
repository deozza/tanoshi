<script lang="ts">
    import { onMount, onDestroy, type ComponentType } from 'svelte';
	import 'iconify-icon';

	import { CONTAINER_ORIENTATIONS, THEMES, CONTAINER_ITEMS_ALIGNMENTS, HEIGHTS } from "$lib/enums";
	import { TanoshiContainerMaterial, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";
	import TanoshiButtonMaterial from "$atoms/button/TanoshiButtonMaterial.svelte";
	import { TanoshiButtonModel } from '$atoms';

    export let tanoshiMobileNavigationModel: TanoshiNavigationModel;
    export let navigationMobileContainerModel: TanoshiContainerModel;
    export let mobileTheme: THEMES;
	export let tanoshiButtonComponent: ComponentType = TanoshiButtonMaterial;


	const expandedMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setBackgroundTheme(mobileTheme)
		.setHeight(HEIGHTS.H100VH);

	const expandedCenterMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setBackgroundTheme(mobileTheme)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(tanoshiMobileNavigationModel.itemsWhenClosed.length > 0 ? HEIGHTS.MINH25PRCT : HEIGHTS.H25PRCT);

	const mobileMenuButton: TanoshiButtonModel = new TanoshiButtonModel('')
    	.setBasicTheme(mobileTheme);

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
	<TanoshiContainerMaterial tanoshiContainerModel={navigationMobileContainerModel} >
		<svelte:component this={tanoshiButtonComponent}  tanoshiButtonModel={mobileMenuButton} on:click={mobileMenuHandler}>
			<span class="sr-only">Open main menu</span>
			{#if showMobileMenu === false}
			<iconify-icon icon='mdi:menu' />
			{:else}
			<iconify-icon icon='mdi:close' />
			{/if}
		</svelte:component>

		{#each tanoshiMobileNavigationModel.itemsWhenClosed as tanoshiNavigationLinkModel}
			<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
		{/each}
	</TanoshiContainerMaterial>

	{#if showMobileMenu === true}
		<div id="mobile-menu">
			<TanoshiContainerMaterial tanoshiContainerModel={expandedMobileNavigationContainer}>
				<TanoshiContainerMaterial tanoshiContainerModel={expandedCenterMobileNavigationContainer}>
					{#each tanoshiMobileNavigationModel.itemsWhenClosed as tanoshiNavigationLinkModel}
						<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
					{/each}
				</TanoshiContainerMaterial>
			</TanoshiContainerMaterial>
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