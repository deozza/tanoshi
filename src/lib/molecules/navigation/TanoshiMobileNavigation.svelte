<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	import { TanoshiButton, TanoshiButtonModel, TanoshiLink } from "$atoms";
	import { CONTAINER_ORIENTATIONS, THEMES } from "$lib/enums";
	import { TanoshiContainer, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";

    export let tanoshiMobileNavigationModel: TanoshiNavigationModel;

    export let navigationMobileContainerModel: TanoshiContainerModel;

    export let mobileTheme: THEMES;

    const expandedMobileNavigationContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
    .setTheme(mobileTheme);

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

<nav class="burger-nav" class:z-10={showMobileMenu === true}>
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
				{#each [...tanoshiMobileNavigationModel.itemsAtLeft, ...tanoshiMobileNavigationModel.itemsAtCenter, ...tanoshiMobileNavigationModel.itemsAtRight,] as tanoshiLinkModel}
					<TanoshiLink {tanoshiLinkModel} />
				{/each}
			</TanoshiContainer>
		</div>
	{/if}
</nav>
