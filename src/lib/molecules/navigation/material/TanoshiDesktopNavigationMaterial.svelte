<script lang="ts">
	import { CONTAINER_ORIENTATIONS, CONTAINER_ITEMS_SPACING, CONTAINER_ITEMS_ALIGNMENTS, WIDTHS, NAVIGATION_ORIENTATIONS, HEIGHTS} from "$lib/enums";
	import { TanoshiContainerMaterial, TanoshiContainerModel } from "$molecules";
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import type TanoshiDesktopNavigationModel from "../TanoshiDesktopNavigationModel";

    export let tanoshiDesktopNavigationModel: TanoshiDesktopNavigationModel;
    export let navigationDesktopContainerModel: TanoshiContainerModel;

	$: desktopNavigationLeftModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	$: desktopNavigationCenterModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	$: desktopNavigationRightModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	const tanoshiNavWidthContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setWidth(WIDTHS.W12)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)

	const tanoshiNavVerticalContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
		.setWidth(WIDTHS.W12)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)

	if(tanoshiDesktopNavigationModel.orientation === NAVIGATION_ORIENTATIONS.Vertical){
		navigationDesktopContainerModel.setHeight(HEIGHTS.H100PRCT)
	}

</script>


{#if tanoshiDesktopNavigationModel.orientation === NAVIGATION_ORIENTATIONS.Horizontal}
	<nav class="{tanoshiDesktopNavigationModel.orientation}">
		<TanoshiContainerMaterial tanoshiContainerModel={navigationDesktopContainerModel}>
			<TanoshiContainerMaterial tanoshiContainerModel={tanoshiNavWidthContainerModel}>
				{#if tanoshiDesktopNavigationModel.itemsAtLeft.length > 0}
					<TanoshiContainerMaterial tanoshiContainerModel={desktopNavigationLeftModuleContainer}>
						{#each tanoshiDesktopNavigationModel.itemsAtLeft as navbarItemModel }
							{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
							<div class="dropdown">
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							</div>
							{:else}
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							{/if}
						{/each}
					</TanoshiContainerMaterial>				
				{/if}
				{#if tanoshiDesktopNavigationModel.itemsAtCenter.length > 0}
					<TanoshiContainerMaterial tanoshiContainerModel={desktopNavigationCenterModuleContainer}>
						{#each tanoshiDesktopNavigationModel.itemsAtCenter as navbarItemModel }
							{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
							<div class="dropdown">
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							</div>
							{:else}
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							{/if}
						{/each}
					</TanoshiContainerMaterial>
				{/if}
				{#if tanoshiDesktopNavigationModel.itemsAtRight.length > 0}
					<TanoshiContainerMaterial tanoshiContainerModel={desktopNavigationRightModuleContainer}>
						{#each tanoshiDesktopNavigationModel.itemsAtRight as navbarItemModel }
							{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
							<div class="dropdown">
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							</div>
							{:else}
								<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
							{/if}
						{/each}
					</TanoshiContainerMaterial>
				{/if}

			</TanoshiContainerMaterial>
		</TanoshiContainerMaterial>
	</nav>
{:else}
	<nav class="{tanoshiDesktopNavigationModel.orientation}">
		<TanoshiContainerMaterial tanoshiContainerModel={navigationDesktopContainerModel}>
			<TanoshiContainerMaterial tanoshiContainerModel={tanoshiNavVerticalContainerModel}>
				{#if tanoshiDesktopNavigationModel.itemsAtLeft.length > 0}
					{#each tanoshiDesktopNavigationModel.itemsAtLeft as navbarItemModel }
						{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
						<div class="dropdown">
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						</div>
						{:else}
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						{/if}
					{/each}
				{/if}
				{#if tanoshiDesktopNavigationModel.itemsAtCenter.length > 0}
					{#each tanoshiDesktopNavigationModel.itemsAtCenter as navbarItemModel }
						{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
						<div class="dropdown">
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						</div>
						{:else}
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						{/if}
					{/each}
				{/if}
				{#if tanoshiDesktopNavigationModel.itemsAtRight.length > 0}
					{#each tanoshiDesktopNavigationModel.itemsAtRight as navbarItemModel }
						{#if navbarItemModel.component === TanoshiLinkAsNavbarDropdown}
						<div class="dropdown">
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						</div>
						{:else}
							<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
						{/if}
					{/each}
				{/if}
			</TanoshiContainerMaterial>
		</TanoshiContainerMaterial>

	</nav>
{/if}



<style>


nav.horizontal{
	position: fixed;
	width: 100vw;
	display: block;
    inset: 0;
	z-index: 1;
	max-height: 64px;
}

nav.vertical {
	position: fixed;
	width: 25%;
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: auto;

}


@media (max-width: 639px) {
  nav {
    display: none;
  }
}
</style>