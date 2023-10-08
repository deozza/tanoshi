<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    
    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
     .setBackgroundTheme(THEMES.Primary)

    const defaultTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('default')

    const defaultValueTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('default value')
        .setValue('default value')

    const placeholderTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('placeholder')
        .setPlaceholder('placeholder')

    const readonlyTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('readonly')
        .setReadonly(true)

    const requiredTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('required')
        .setRequired(true)

    const errorTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('error')
        .setError(true)

    const errorWithMessageTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('error with message')
        .setError(true)
        .setErrorMessage('error message')

</script>
  
<Hst.Story title="atoms/input/text/input customisation" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={defaultTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>


    <Hst.Variant title="default value">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={defaultValueTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={placeholderTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={readonlyTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={requiredTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={errorTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputMaterial tanoshiInputModel={errorWithMessageTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>