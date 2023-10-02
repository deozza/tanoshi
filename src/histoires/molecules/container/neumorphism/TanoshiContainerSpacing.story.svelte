<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerNeumorphism from '$molecules/container/TanoshiContainerNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
    
    const itemContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.White)
        .setWidth(WIDTHS.W1)

    const startContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Start)
        .setBackgroundTheme(THEMES.Primary)

    const centerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setBackgroundTheme(THEMES.Primary)

    const endContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.End)
        .setBackgroundTheme(THEMES.Primary)

    const betweenContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Between)
        .setBackgroundTheme(THEMES.Primary)

    const aroundContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Around)
        .setBackgroundTheme(THEMES.Primary)

    const evenlyContainer = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Evenly)
        .setBackgroundTheme(THEMES.Primary)

</script>
  
<Hst.Story title="molecules/container/neumorphism/spacing" layout={{ type: 'grid', width: 600 }}>

    <Hst.Variant title="start">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={startContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="center">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={centerContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="end">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={endContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="between">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={betweenContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="around">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={aroundContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="evenly">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiContainerNeumorphism tanoshiContainerModel={evenlyContainer} >
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>1</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>2</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>3</TanoshiContainerMaterial>
                <TanoshiContainerMaterial tanoshiContainerModel={itemContainer} customClasses={'space'}>4</TanoshiContainerMaterial>
            </TanoshiContainerNeumorphism>
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>
