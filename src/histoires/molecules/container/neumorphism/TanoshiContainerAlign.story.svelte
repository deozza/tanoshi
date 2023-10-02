<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerNeumorphism from '$molecules/container/TanoshiContainerNeumorphism.svelte';
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
  
<Hst.Story title="molecules/container/neumorphism/align" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="baseline">
        <TanoshiContainerNeumorphism tanoshiContainerModel={baselineContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerNeumorphism>
    </Hst.Variant>

    <Hst.Variant title="start">
        <TanoshiContainerNeumorphism tanoshiContainerModel={startContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerNeumorphism>
    </Hst.Variant>

    <Hst.Variant title="center">
        <TanoshiContainerNeumorphism tanoshiContainerModel={centerContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerNeumorphism>
    </Hst.Variant>

    <Hst.Variant title="end">
        <TanoshiContainerNeumorphism tanoshiContainerModel={endContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerNeumorphism>
    </Hst.Variant>

    <Hst.Variant title="stretch">
        <TanoshiContainerNeumorphism tanoshiContainerModel={stretchContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerNeumorphism>
    </Hst.Variant>
</Hst.Story>

<style>
    span {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
    }
</style>