<script lang="ts">
	import { TanoshiTextareaInputModel } from '$atoms';
	import TanoshiTextareaInputMaterial from '$atoms/input/textarea/TanoshiTextareaInputMaterial.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    
    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
     .setBackgroundTheme(THEMES.Primary)

    const defaultTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('default')

    const defaultValueTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('default value')
        .setValue('default value')

    const placeholderTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('placeholder')
        .setPlaceholder('placeholder')

    const readonlyTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('readonly')
        .setReadonly(true)

    const requiredTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('required')
        .setRequired(true)

    const errorTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('error')
        .setError(true)

    const errorWithMessageTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('error with message')
        .setError(true)
        .setErrorMessage('error message')

</script>
  
<Hst.Story title="atoms/input/textarea/input customisation" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={defaultTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>


    <Hst.Variant title="default value">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={defaultValueTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={placeholderTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={readonlyTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={requiredTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={errorTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputMaterial tanoshiInputModel={errorWithMessageTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>