<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const rowContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)

    const columnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)

    const columnReverseContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.CReverse)

</script>
  
<Hst.Story title="molecules/container/material/orientations" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="row">
        <TanoshiContainerMaterial tanoshiContainerModel={rowContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="column">
        <TanoshiContainerMaterial tanoshiContainerModel={columnContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="column reverse">
        <TanoshiContainerMaterial tanoshiContainerModel={columnReverseContainer} >
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