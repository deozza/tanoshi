<script lang="ts">

	import './tanoshiNavigation.css';
	import type TanoshiNavigationModel from './TanoshiNavigationModel';
    import TanoshiContainerModel from '../container/TanoshiContainerModel';
    import TanoshiContainer from '../container/TanoshiContainer.svelte';
    import TanoshiLink from '../../atoms/link/TanoshiLink.svelte';

	export let tanoshiNavigationModel: TanoshiNavigationModel
	const navigationContainer = new TanoshiContainerModel('r').setTheme(tanoshiNavigationModel.theme).setDesktopSpacing('start')
    
    if(tanoshiNavigationModel.orientation === "vertical") {
        navigationContainer.setDesktopOrientation('c').setDesktopSpacing('around')
    }


</script>

{#if tanoshiNavigationModel.orientation === "horizontal"}

<TanoshiContainer tanoshiContainerModel={navigationContainer} customClasses="h-16">
    {#each tanoshiNavigationModel.items as tanoshiLinkModel}
        <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
    {/each}
</TanoshiContainer>

{:else}

<TanoshiContainer tanoshiContainerModel={navigationContainer} customClasses="min-h-screen w-3/12">
    {#each tanoshiNavigationModel.items as tanoshiLinkModel}
        <TanoshiLink  tanoshiLinkModel="{tanoshiLinkModel}" />
    {/each}
</TanoshiContainer>
{/if}