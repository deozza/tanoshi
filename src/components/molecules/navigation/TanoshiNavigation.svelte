<script lang="ts">
  import { onMount, onDestroy } from "svelte";

	import './tanoshiNavigation.css';

    import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons/index.es'

	import type TanoshiNavigationModel from './TanoshiNavigationModel';
    import TanoshiContainerModel from '../container/TanoshiContainerModel';
    import TanoshiContainer from '../container/TanoshiContainer.svelte';
    import TanoshiLink from '../../atoms/link/TanoshiLink.svelte';
    import TanoshiButton from "../../atoms/button/TanoshiButton.svelte";
    import TanoshiButtonModel from "../../atoms/button/TanoshiButtonModel";

	export let tanoshiNavigationModel: TanoshiNavigationModel
	const horizontalNavigationContainer = new TanoshiContainerModel('r').setTheme(tanoshiNavigationModel.theme).setDesktopSpacing('start')
    
	const desktopNavigationContainer = new TanoshiContainerModel('r').setTheme(tanoshiNavigationModel.theme).setDesktopSpacing('start')
    if(tanoshiNavigationModel.orientation === 'vertical') {
        desktopNavigationContainer.setDesktopOrientation('c')
    }

    const navigationMobileContainer = new TanoshiContainerModel('c').setTheme(tanoshiNavigationModel.theme)

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



<nav class="hidden sm:block">
    <TanoshiContainer tanoshiContainerModel={desktopNavigationContainer} customClasses="{tanoshiNavigationModel.orientation === "horizontal" ? "h-16" : "min-h-screen w-1/5"}">
        {#each tanoshiNavigationModel.items as tanoshiLinkModel}
            <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
        {/each}
    </TanoshiContainer>
</nav>

<nav class="sm:hidden">
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
            <TanoshiContainer tanoshiContainerModel={navigationMobileContainer}>
                {#each tanoshiNavigationModel.items as tanoshiLinkModel}
                    <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
                {/each}
            </TanoshiContainer>
        </div>
    {/if}

</nav>
<!--

<nav class="fixed w-full bg-sky-800">
	<div class="px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" on:click={mobileMenuHandler}>
					<span class="sr-only">Open main menu</span>
                	{#if showMobileMenu === false}
                        <Fa icon={faBars} />
                    {:else}
                        <Fa icon={faTimes} />
                    {/if}

				</button>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a  href='/' class='text-white font-bold text-2xl'>Appquarium</a>
				</div>
				<div class="w-full hidden sm:block sm:ml-6">
					<div class="w-full justify-center flex space-x-4">
                        {#each tanoshiNavigationModel.items as tanoshiLinkModel}
                            <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	{#if showMobileMenu === true}
		<div class="sm:hidden" id="mobile-menu">
            <TanoshiContainer tanoshiContainerModel={navigationMobileContainer}>
				{#each tanoshiNavigationModel.items as tanoshiLinkModel}
                    <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
				{/each}
			</TanoshiContainer>
		</div>
	{/if}
</nav>
-->
