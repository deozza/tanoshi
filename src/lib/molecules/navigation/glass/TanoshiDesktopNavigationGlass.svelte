<script lang="ts">
	import { CONTAINER_ORIENTATIONS, CONTAINER_ITEMS_SPACING, CONTAINER_ITEMS_ALIGNMENTS, WIDTHS} from "$lib/enums";
	import { TanoshiContainerModel } from "$molecules";
	import TanoshiLinkAsNavbarDropdown from '$molecules/link/TanoshiLinkAsNavbarDropdown/TanoshiLinkAsNavbarDropdown.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
	import type TanoshiDesktopNavigationModel from "../TanoshiMobileNavigationModel";

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

</script>

<nav>
	<TanoshiContainerGlass tanoshiContainerModel={navigationDesktopContainerModel}>
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
	</TanoshiContainerGlass>
</nav>

<style>


nav{
	position: fixed;
	width: 100vw;
	display: block;
    inset: 0;
	z-index: 1;
	max-height: 64px;
}


@media (max-width: 639px) {
  nav {
    display: none;
  }
}
</style>