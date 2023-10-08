<script lang="ts">
	import { TanoshiNumberInputModel } from '$atoms';
	import TanoshiNumberInputMaterial from '$atoms/input/number/TanoshiNumberInputMaterial.svelte';
	import { CONTAINER_BORDERS, CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const defaultTextInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('default')
        .setPlaceholder('default')

    const squareTextInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.None)

    const roundedTextInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.Md)

    const circleTextInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('circle')
        .setPlaceholder('circle')
        .setBorderShape(CONTAINER_BORDERS.Full)

</script>
  
<Hst.Story title="atoms/input/number/border shapes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={defaultTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="square">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={squareTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="rounded">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={roundedTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="circled">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiNumberInputMaterial tanoshiInputModel={circleTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

   
</Hst.Story>