<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';
	import { CONTAINER_BORDERS, CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const defaultTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('default')
        .setPlaceholder('default')

    const squareTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.None)

    const roundedTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.Md)

    const circleTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('circle')
        .setPlaceholder('circle')
        .setBorderShape(CONTAINER_BORDERS.Full)

</script>
  
<Hst.Story title="atoms/input/text/border shapes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={defaultTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="square">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={squareTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="rounded">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={roundedTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="circled">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={circleTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

   
</Hst.Story>