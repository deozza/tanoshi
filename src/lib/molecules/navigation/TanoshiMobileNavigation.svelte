<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/index.js";

	import { TanoshiButton, TanoshiButtonModel, TanoshiLink } from "$atoms";
	import { CONTAINER_ORIENTATIONS, THEMES, CONTAINER_ITEMS_ALIGNMENTS, HEIGHTS } from "$lib/enums";
	import { TanoshiContainer, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";

    export let tanoshiMobileNavigationModel: TanoshiNavigationModel;

    export let navigationMobileContainerModel: TanoshiContainerModel;

    export let mobileTheme: THEMES;

	const expandedMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setTheme(mobileTheme)
		.setHeight(HEIGHTS.H100VH);

    const expandedTopMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setTheme(mobileTheme)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(tanoshiMobileNavigationModel.itemsAtLeft.length > 0 ? HEIGHTS.MINH25PRCT : HEIGHTS.H25PRCT);

	const expandedCenterMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setTheme(mobileTheme)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(tanoshiMobileNavigationModel.itemsAtCenter.length > 0 ? HEIGHTS.MINH25PRCT : HEIGHTS.H25PRCT);


	const expandedBottomMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
	    .setTheme(mobileTheme)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setHeight(tanoshiMobileNavigationModel.itemsAtRight.length > 0 ? HEIGHTS.MINH25PRCT : HEIGHTS.H25PRCT);


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

<nav class:z-10={showMobileMenu === true}>
	<TanoshiContainer tanoshiContainerModel={navigationMobileContainerModel} >
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
			<TanoshiContainer tanoshiContainerModel={expandedMobileNavigationContainer}>
				<TanoshiContainer tanoshiContainerModel={expandedTopMobileNavigationContainer}>
					{#each tanoshiMobileNavigationModel.itemsAtLeft as tanoshiNavigationLinkModel}
					<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
				{/each}
				</TanoshiContainer>
				<TanoshiContainer tanoshiContainerModel={expandedCenterMobileNavigationContainer}>
					{#each tanoshiMobileNavigationModel.itemsAtCenter as tanoshiNavigationLinkModel}
					<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
				{/each}
				</TanoshiContainer>
				<TanoshiContainer tanoshiContainerModel={expandedBottomMobileNavigationContainer}>
					{#each tanoshiMobileNavigationModel.itemsAtRight as tanoshiNavigationLinkModel}
					<svelte:component this={tanoshiNavigationLinkModel.component} tanoshiLinkModel={tanoshiNavigationLinkModel.link} />
				{/each}
				</TanoshiContainer>
			</TanoshiContainer>
		</div>
	{/if}
</nav>

<style>

nav {
  display: none;
  position: fixed;
  width: 100vw;
  z-index: 10;

}

nav > div{
  height: 4rem!important;
}

nav > div#mobile-menu{
  height: 100vh!important;
  z-index: 10;
}

.sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

@media (max-width: 639px) {
  nav {
    display: block;
  }
}

</style>