<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerGlass from '$molecules/container/TanoshiContainerGlass.svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Primary)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Secondary)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.White)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Black)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Success)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Warning)
        
    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Danger)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBorderTheme(THEMES.Info)
</script>
  
<Hst.Story title="molecules/container/glass/border color" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="primary">
        <TanoshiContainerGlass tanoshiContainerModel={primaryContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerGlass tanoshiContainerModel={secondaryContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant> 

    <Hst.Variant title="white">
        <TanoshiContainerGlass tanoshiContainerModel={whiteContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerGlass tanoshiContainerModel={blackContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerGlass tanoshiContainerModel={successContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerGlass tanoshiContainerModel={warningContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerGlass tanoshiContainerModel={dangerContainer} >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
        </TanoshiContainerGlass>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerGlass tanoshiContainerModel={infoContainer} >
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