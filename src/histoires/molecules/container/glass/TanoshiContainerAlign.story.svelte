<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
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
  
<Hst.Story title="molecules/container/glass/align" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="baseline">
        <TanoshiContainerGlass tanoshiContainerModel={baselineContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="start">
        <TanoshiContainerGlass tanoshiContainerModel={startContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="center">
        <TanoshiContainerGlass tanoshiContainerModel={centerContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="end">
        <TanoshiContainerGlass tanoshiContainerModel={endContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="stretch">
        <TanoshiContainerGlass tanoshiContainerModel={stretchContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>
</Hst.Story>

<style>
    span {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
    }
</style>