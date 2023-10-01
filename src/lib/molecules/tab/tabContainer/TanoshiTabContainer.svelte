<script lang='ts'>
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, WIDTHS } from "$lib/enums";
	import TanoshiContainer from "$molecules/container/TanoshiContainerMaterial.svelte";
	import TanoshiContainerModel from "$molecules/container/TanoshiContainerModel";
	import TanoshiTabTitle from "../tabTitle/TanoshiTabTitle.svelte";
	import type TanoshiTabContainerModel from "./TanoshiTabContainerModel";

    export let tanoshiTabContainerModel: TanoshiTabContainerModel;

    const containerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.WAuto)

    const titleContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)

    const contentContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
        .setWidth(WIDTHS.WAuto)


    if(tanoshiTabContainerModel.isSideBar === true){
        containerModel.setDesktopOrientation(CONTAINER_ORIENTATIONS.R)
        titleContainerModel.setDesktopOrientation(CONTAINER_ORIENTATIONS.C).setWidth(WIDTHS.WAuto)
    }

    export let activeIndex: number = 0
</script>

<TanoshiContainer tanoshiContainerModel={containerModel}>
    <TanoshiContainer tanoshiContainerModel={titleContainerModel}>
        {#each tanoshiTabContainerModel.tabs as tab, index}
            <TanoshiTabTitle tanoshiTabTitleModel={tab} {index} bind:activeIndex={activeIndex} />
        {/each}
        <hr class="border-{tanoshiTabContainerModel.theme}">

    </TanoshiContainer>
    <TanoshiContainer tanoshiContainerModel={contentContainerModel}>
        <slot />
    </TanoshiContainer>
</TanoshiContainer>

<style>
hr{
    margin: 0;
    border: 0;
    width: 100%;
}

hr.border-white{
	border: 1px solid rgba(var(--white-border-container, var(--white)));
}

hr.border-black {
	border: 1px solid rgba(var(--black-border-container, var(--black)));
}

hr.border-primary {
	border: 1px solid rgba(var(--primary-border-container, var(--primary)));
}

hr.border-secondary {
	border: 1px solid rgba(var(--secondary-border-container, var(--secondary)));
}

hr.border-success {
	border: 1px solid rgba(var(--success-border-container, var(--success)));
}

hr.border-warning {
	border: 1px solid rgba(var(--warning-border-container, var(--warning)));
}

hr.border-danger {
	border: 1px solid rgba(var(--danger-border-container, var(--danger)));
}

hr.border-info {
	border: 1px solid rgba(var(--info-border-container, var(--info)));
}
</style>