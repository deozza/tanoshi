<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const baselineContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Baseline)

    const centerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

    const endContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.End)

    const startContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)

    const stretchContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Stretch)


</script>
  
<Hst.Story title="molecules/container/material/align" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="baseline">
        <TanoshiContainerMaterial tanoshiContainerModel={baselineContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

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

    <Hst.Variant title="stretch">
        <TanoshiContainerMaterial tanoshiContainerModel={stretchContainer} >
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