<script lang="ts">
	import { TanoshiLink } from "$atoms";
	import { CONTAINER_ORIENTATIONS, CONTAINER_ITEMS_SPACING, CONTAINER_ITEMS_ALIGNMENTS, WIDTHS, THEMES } from "$lib/enums";
	import { TanoshiContainer, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";

    export let tanoshiDesktopNavigationModel: TanoshiNavigationModel;
    export let navigationDesktopContainerModel: TanoshiContainerModel;

	$: desktopNavigationLeftModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	$: desktopNavigationCenterModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	$: desktopNavigationRightModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(THEMES.Transparent)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

</script>


<nav class="sticky-nav">
	<TanoshiContainer bind:tanoshiContainerModel={navigationDesktopContainerModel}>
		<TanoshiContainer bind:tanoshiContainerModel={desktopNavigationLeftModuleContainer} >
			{#each tanoshiDesktopNavigationModel.itemsAtLeft as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer bind:tanoshiContainerModel={desktopNavigationCenterModuleContainer} >
			{#each tanoshiDesktopNavigationModel.itemsAtCenter as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer bind:tanoshiContainerModel={desktopNavigationRightModuleContainer} >
			{#each tanoshiDesktopNavigationModel.itemsAtRight as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
	</TanoshiContainer>
</nav>