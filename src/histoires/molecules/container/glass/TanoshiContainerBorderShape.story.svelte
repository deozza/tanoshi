<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_BORDERS, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
    export let Hst: Hst;

    const noneContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.None)

    const mdContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Md)

    const fullContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderShape(CONTAINER_BORDERS.Full)

</script>
  
<Hst.Story title="molecules/container/glass/border shape" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="none">
        <TanoshiContainerGlass tanoshiContainerModel={noneContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="md">
        <TanoshiContainerGlass tanoshiContainerModel={mdContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant> 

    <Hst.Variant title="full">
        <TanoshiContainerGlass tanoshiContainerModel={fullContainer} >
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