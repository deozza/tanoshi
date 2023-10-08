<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

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
  
<Hst.Story title="atoms/input/text/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiTextInputMaterial tanoshiInputModel={defaultTextInput} />
    </Hst.Variant>


    <Hst.Variant title="default value">
        <TanoshiTextInputMaterial tanoshiInputModel={defaultValueTextInput} />
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiTextInputMaterial tanoshiInputModel={placeholderTextInput} />
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiTextInputMaterial tanoshiInputModel={readonlyTextInput} />
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiTextInputMaterial tanoshiInputModel={requiredTextInput} />
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiTextInputMaterial tanoshiInputModel={errorTextInput} />
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiTextInputMaterial tanoshiInputModel={errorWithMessageTextInput} />
    </Hst.Variant>

</Hst.Story>