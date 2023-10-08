<script lang="ts">
	import { TanoshiTextareaInputModel } from '$atoms';
	import TanoshiTextareaInputMaterial from '$atoms/input/textarea/TanoshiTextareaInputMaterial.svelte';
	import { CONTAINER_BORDERS, CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const defaultTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('default')
        .setPlaceholder('default')

    const squareTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.None)

    const roundedTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('rounded')
        .setPlaceholder('rounded')
        .setBorderShape(CONTAINER_BORDERS.Md)

    const circleTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('circle')
        .setPlaceholder('circle')
        .setBorderShape(CONTAINER_BORDERS.Full)

</script>
  
<Hst.Story title="atoms/input/textarea/border shapes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={defaultTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="square">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={squareTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="rounded">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={roundedTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="circled">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={circleTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

   
</Hst.Story>