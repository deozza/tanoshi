<script lang='ts'>
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, WIDTHS, getThemeEnumKeyByEnumValue } from "$lib/enums";
	import TanoshiContainerMaterial from "$molecules/container/TanoshiContainerMaterial.svelte";
	import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
	import TanoshiContainerNeumorphism from "$molecules/container/TanoshiContainerNeumorphism.svelte";
	import TanoshiTabTitleNeumorphism from "../tabTitle/TanoshiTabTitleNeumorphism.svelte";
	import type TanoshiTabContainerModel from "./TanoshiTabContainerModel";

    export let tanoshiTabContainerModel: TanoshiTabContainerModel;

    const containerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.WAuto)
        .setBackgroundTheme(getThemeEnumKeyByEnumValue(tanoshiTabContainerModel.theme))

    const titleContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)

    const contentContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.W12)
        .setBackgroundTheme(getThemeEnumKeyByEnumValue(tanoshiTabContainerModel.theme))



    if(tanoshiTabContainerModel.isSideBar === true){
        containerModel.setDesktopOrientation(CONTAINER_ORIENTATIONS.R)
        titleContainerModel.setDesktopOrientation(CONTAINER_ORIENTATIONS.C).setWidth(WIDTHS.WAuto)
    }

    export let activeIndex: number = 0
</script>

<TanoshiContainerMaterial tanoshiContainerModel={containerModel}>
    <TanoshiContainerMaterial tanoshiContainerModel={titleContainerModel}>
        {#each tanoshiTabContainerModel.tabs as tab, index}
            <TanoshiTabTitleNeumorphism tanoshiTabTitleModel={tab} {index} bind:activeIndex={activeIndex} />
        {/each}
    </TanoshiContainerMaterial>
    <TanoshiContainerNeumorphism tanoshiContainerModel={contentContainerModel} pushedStyled={true}>
        <slot />
    </TanoshiContainerNeumorphism>
</TanoshiContainerMaterial>