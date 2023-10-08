<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_BORDERS, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerNeumorphism from '$molecules/container/TanoshiContainerNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;
    
    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)

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
  
<Hst.Story title="molecules/container/neumorphism/border shape" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="none">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={noneContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={noneContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={noneContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={noneContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="md">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={mdContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={mdContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={mdContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={mdContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="full">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer} >
            <TanoshiContainerNeumorphism tanoshiContainerModel={fullContainer} customClasses={'space'}>1</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={fullContainer} customClasses={'space'}>2</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={fullContainer} customClasses={'space'}>3</TanoshiContainerNeumorphism>
            <TanoshiContainerNeumorphism tanoshiContainerModel={fullContainer} customClasses={'space'}>4</TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>