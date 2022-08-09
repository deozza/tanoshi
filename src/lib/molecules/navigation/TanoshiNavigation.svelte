<script lang="ts">
  import { onMount, onDestroy } from "svelte";

    import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons/index.es'

    import './tanoshiNavigation.css';
	import type TanoshiNavigationModel from './TanoshiNavigationModel';

    import TanoshiContainerModel from '$lib/molecules/container/TanoshiContainerModel';
    import TanoshiContainer from '$lib/molecules/container/TanoshiContainer.svelte';

    import TanoshiLink from '$lib/atoms/link/TanoshiLink.svelte';

    import TanoshiButton from "$lib/atoms/button/TanoshiButton.svelte";
    import TanoshiButtonModel from "$lib/atoms/button/TanoshiButtonModel";	
    
	export let tanoshiNavigationModel: TanoshiNavigationModel

	const horizontalNavigationContainer = new TanoshiContainerModel('r').setTheme(tanoshiNavigationModel.theme).setDesktopSpacing('start')
    const mobileNavigationContainer = new TanoshiContainerModel('c').setTheme(tanoshiNavigationModel.theme)
    const desktopNavigationContainer = new TanoshiContainerModel('r').setTheme(tanoshiNavigationModel.theme).setDesktopSpacing('start')
    if(tanoshiNavigationModel.orientation === 'vertical') {
        desktopNavigationContainer.setDesktopOrientation('c')
    }

    const mobileMenuButton: TanoshiButtonModel = new TanoshiButtonModel("").setTheme(tanoshiNavigationModel.theme)

    let showMobileMenu: boolean = false

    onMount(()=>{
		showMobileMenu = false
	})

	onDestroy(()=>{
		showMobileMenu = false
	})

    function mobileMenuHandler() {
		showMobileMenu = !showMobileMenu;
	}

</script>


<nav class="z-10 inset-0 fixed hidden sm:block">
    <TanoshiContainer tanoshiContainerModel={desktopNavigationContainer} customClasses="{tanoshiNavigationModel.orientation === "horizontal" ? "h-16" : "min-h-screen w-1/5"}">
        {#each tanoshiNavigationModel.items as tanoshiLinkModel}
            <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
        {/each}
    </TanoshiContainer>
</nav>

<nav class="z-10 inset-0 fixed sm:hidden">
    <TanoshiContainer tanoshiContainerModel={horizontalNavigationContainer} customClasses="h-16">
        <TanoshiButton tanoshiButtonModel="{mobileMenuButton}"  on:click={mobileMenuHandler}>
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
                {#each tanoshiNavigationModel.items as tanoshiLinkModel}
                    <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
                {/each}
            </TanoshiContainer>
        </div>
    {/if}

</nav>