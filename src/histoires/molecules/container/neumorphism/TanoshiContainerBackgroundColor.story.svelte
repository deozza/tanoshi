<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerNeumorphism from '$molecules/container/TanoshiContainerNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Secondary)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.White)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Black)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Success)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Warning)
        
    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Danger)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Info)
</script>
  
<Hst.Story title="molecules/container/neumorphism/background color" layout={{ type: 'grid', width: 600 }} >

    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={primaryContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={primaryContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={primaryContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={primaryContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={secondaryContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={secondaryContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={secondaryContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={secondaryContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={whiteContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={whiteContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={whiteContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={whiteContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={blackContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={blackContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={blackContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={blackContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={successContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={successContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={successContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={successContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={warningContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={warningContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={warningContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={warningContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={dangerContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={dangerContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={dangerContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={dangerContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={infoContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={infoContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={infoContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={infoContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>

<style>
    :global(.space) {
        padding: 1rem;
        margin: 1rem;
    }
</style>