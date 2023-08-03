<script lang="ts">
	import { TanoshiLink } from "$atoms";
	import { CONTAINER_ORIENTATIONS, CONTAINER_ITEMS_SPACING, CONTAINER_ITEMS_ALIGNMENTS, WIDTHS, THEMES } from "$lib/enums";
	import { TanoshiContainer, TanoshiContainerModel, TanoshiNavigationModel } from "$molecules";

    export let tanoshiNavigationModel: TanoshiNavigationModel;

    export let navigationContainerModel: TanoshiContainerModel;

    export let theme: THEMES;

	const desktopNavigationLeftModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	const desktopNavigationCenterModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)

	const desktopNavigationRightModuleContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setTheme(theme)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setWidth(WIDTHS.MinW4)
</script>


<nav class="sticky-nav">
	<TanoshiContainer tanoshiContainerModel={navigationContainerModel}>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationLeftModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtLeft as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationCenterModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtCenter as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
		<TanoshiContainer tanoshiContainerModel={desktopNavigationRightModuleContainer} >
			{#each tanoshiNavigationModel.itemsAtRight as tanoshiLinkModel}
				<TanoshiLink {tanoshiLinkModel} />
			{/each}
		</TanoshiContainer>
	</TanoshiContainer>
</nav>