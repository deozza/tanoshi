<script lang="ts">
	import { TanoshiNumberInputModel } from '$atoms';
	import TanoshiNumberInputMaterial from '$atoms/input/number/TanoshiNumberInputMaterial.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const defaultNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('default')
        .setPlaceholder('default')

    const primaryNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('primary')
        .setPlaceholder('primary')
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)

    const secondaryNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('secondary')
        .setPlaceholder('secondary')
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)

    const successNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('success')
        .setPlaceholder('success')
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)
    
    const dangerNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('danger')
        .setPlaceholder('danger')
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)

    const warningNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('warning')
        .setPlaceholder('warning')
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)

    const infoNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('info')
        .setPlaceholder('info')
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)

    const whiteNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('white')
        .setPlaceholder('white')
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)

    const blackNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('black')
        .setPlaceholder('black')
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)


</script>
  
<Hst.Story title="atoms/input/number/material" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={defaultNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={primaryNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={secondaryNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={successNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={dangerNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={warningNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={infoNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={whiteNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={blackNumberInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>