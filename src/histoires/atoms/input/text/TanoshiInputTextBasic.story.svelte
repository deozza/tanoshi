<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';

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
    <Hst.Variant title="primary">
        <TanoshiTextInput tanoshiTextInputModel={defaultTextInput} />
    </Hst.Variant>


    <Hst.Variant title="default value">
        <TanoshiTextInput tanoshiTextInputModel={defaultValueTextInput} />
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiTextInput tanoshiTextInputModel={placeholderTextInput} />
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiTextInput tanoshiTextInputModel={readonlyTextInput} />
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiTextInput tanoshiTextInputModel={requiredTextInput} />
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiTextInput tanoshiTextInputModel={errorTextInput} />
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiTextInput tanoshiTextInputModel={errorWithMessageTextInput} />
    </Hst.Variant>

</Hst.Story>