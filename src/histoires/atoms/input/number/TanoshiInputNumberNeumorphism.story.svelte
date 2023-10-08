<script lang="ts">
	import { TanoshiNumberInputModel } from '$atoms';
	import TanoshiNumberInputNeumorphism from '$atoms/input/number/TanoshiNumberInputNeumorphism.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const primaryNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('primary')
        .setPlaceholder('primary')
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Secondary)

    const secondaryNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('secondary')
        .setPlaceholder('secondary')
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Success)

    const successNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('success')
        .setPlaceholder('success')
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)

    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Danger)
    
    const dangerNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('danger')
        .setPlaceholder('danger')
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Warning)

    const warningNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('warning')
        .setPlaceholder('warning')
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Info)

    const infoNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('info')
        .setPlaceholder('info')
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.White)

    const whiteNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('white')
        .setPlaceholder('white')
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

    const blackNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('black')
        .setPlaceholder('black')
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)


</script>
  
<Hst.Story title="atoms/input/number/neumorphism" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={primaryNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={secondaryNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={successNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={dangerNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={warningNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={infoNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={whiteNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer}>
            <TanoshiNumberInputNeumorphism tanoshiInputModel={blackNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>