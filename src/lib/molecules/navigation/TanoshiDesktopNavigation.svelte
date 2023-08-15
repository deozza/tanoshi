<script lang="ts">
	import { CONTAINER_ORIENTATIONS, CONTAINER_ITEMS_SPACING, CONTAINER_ITEMS_ALIGNMENTS, WIDTHS, THEMES, HEIGHTS } from "$lib/enums";
	import { TanoshiContainer, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";
	import TanoshiLinkAsDropdown from '$molecules/link/TanoshiLinkAsDropdown/TanoshiLinkAsDropdown.svelte';

    export let tanoshiDesktopNavigationModel: TanoshiNavigationModel;
    export let navigationDesktopContainerModel: TanoshiContainerModel;

	$: desktopNavigationLeftModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	$: desktopNavigationCenterModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	$: desktopNavigationRightModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.WAuto)

	const tanoshiNavWidthContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setWidth(WIDTHS.W12)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)

</script>

<nav>
	<TanoshiContainer tanoshiContainerModel={navigationDesktopContainerModel}>
		<TanoshiContainer tanoshiContainerModel={tanoshiNavWidthContainerModel}>
			<TanoshiContainer tanoshiContainerModel={desktopNavigationLeftModuleContainer}>
				{#each tanoshiDesktopNavigationModel.itemsAtLeft as navbarItemModel }
					{#if navbarItemModel.component === TanoshiLinkAsDropdown}
					<div class="dropdown">
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					</div>
					{:else}
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					{/if}
				{/each}
			</TanoshiContainer>
			<TanoshiContainer tanoshiContainerModel={desktopNavigationCenterModuleContainer}>
				{#each tanoshiDesktopNavigationModel.itemsAtCenter as navbarItemModel }
					{#if navbarItemModel.component === TanoshiLinkAsDropdown}
					<div class="dropdown">
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					</div>
					{:else}
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					{/if}
				{/each}
			</TanoshiContainer>
			<TanoshiContainer tanoshiContainerModel={desktopNavigationRightModuleContainer}>
				{#each tanoshiDesktopNavigationModel.itemsAtRight as navbarItemModel }
					{#if navbarItemModel.component === TanoshiLinkAsDropdown}
					<div class="dropdown">
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					</div>
					{:else}
						<svelte:component this={navbarItemModel.component} tanoshiLinkModel={navbarItemModel.link} />
					{/if}
				{/each}
			</TanoshiContainer>
		</TanoshiContainer>
	</TanoshiContainer>
</nav>

<style>


nav{
	position: fixed;
	width: 100vw;
	z-index: 1;
	display: block;
	overflow: hidden;
    inset: 0;
}


@media (max-width: 639px) {
  nav {
    display: none;
  }
}
</style>