<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerMaterial, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerNeumorphism from '$molecules/container/TanoshiContainerNeumorphism.svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
    
    const itemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.White)
        .setWidth(WIDTHS.W1)

    const rowContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)

    const columnContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.C)
        .setBackgroundTheme(THEMES.Primary)

    const columnReverseContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.CReverse)
      .setBackgroundTheme(THEMES.Primary)

</script>
  
<Hst.Story title="molecules/container/neumorphism/orientations" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="row">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={rowContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="column">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={columnContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="column reverse">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={columnReverseContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>