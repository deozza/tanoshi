<script lang="ts">

    import '../../../app.css';

	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
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
  
<Hst.Story title="molecules/container/align" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="baseline">
        <TanoshiContainer tanoshiContainerModel={baselineContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="start">
        <TanoshiContainer tanoshiContainerModel={startContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="center">
        <TanoshiContainer tanoshiContainerModel={centerContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="end">
        <TanoshiContainer tanoshiContainerModel={endContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="stretch">
        <TanoshiContainer tanoshiContainerModel={stretchContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>
</Hst.Story>

<style>
    span {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
    }
</style>