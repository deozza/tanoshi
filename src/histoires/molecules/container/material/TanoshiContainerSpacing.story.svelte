<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const startContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)

    const centerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)

    const endContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)

    const betweenContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)

    const aroundContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)

    const evenlyContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Evenly)

</script>
  
<Hst.Story title="molecules/container/material/spacing" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="start">
        <TanoshiContainerMaterial tanoshiContainerModel={startContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="center">
        <TanoshiContainerMaterial tanoshiContainerModel={centerContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="end">
        <TanoshiContainerMaterial tanoshiContainerModel={endContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="between">
        <TanoshiContainerMaterial tanoshiContainerModel={betweenContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="around">
        <TanoshiContainerMaterial tanoshiContainerModel={aroundContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="evenly">
        <TanoshiContainerMaterial tanoshiContainerModel={evenlyContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>

<style>
    span {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
    }
</style>