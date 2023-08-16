<script lang="ts">

    import '../../../app.css';

	import { CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
    export let Hst: Hst;

    const rowContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)

    const columnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)

    const columnReverseContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.CReverse)

</script>
  
<Hst.Story title="molecules/container/orientations" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="row">
        <TanoshiContainer tanoshiContainerModel={rowContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="column">
        <TanoshiContainer tanoshiContainerModel={columnContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainer>
    </Hst.Variant>

    <Hst.Variant title="column reverse">
        <TanoshiContainer tanoshiContainerModel={columnReverseContainer} >
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