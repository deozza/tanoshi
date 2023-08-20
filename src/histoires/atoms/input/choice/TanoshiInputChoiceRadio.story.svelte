<script lang="ts">
	import TanoshiChoiceInput from '$atoms/input/choice/TanoshiChoiceInput.svelte';
	import TanoshiChoiceInputModel from '$atoms/input/choice/TanoshiChoiceInputModel';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('default', 'value')

    const checkedChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checked', 'value')
        .setChecked(true)

    const readonlyChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('readonly', 'value')
        .setReadonly(true)

    const requiredChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('required', 'value')
        .setRequired(true)

    const errorChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('error', 'value')
        .setError(true)

    const errorWithMessageChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('error with message', 'value')
        .setError(true)
        .setErrorMessage('error message')

</script>
  
<Hst.Story title="atoms/input/choice/radio" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiChoiceInput tanoshiInputModel={defaultChoiceInput} />
    </Hst.Variant>

    <Hst.Variant title="checked">
        <TanoshiChoiceInput tanoshiInputModel={checkedChoiceInput} />
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiChoiceInput tanoshiInputModel={readonlyChoiceInput} />
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiChoiceInput tanoshiInputModel={requiredChoiceInput} />
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiChoiceInput tanoshiInputModel={errorChoiceInput} />
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiChoiceInput tanoshiInputModel={errorWithMessageChoiceInput} />
    </Hst.Variant>

</Hst.Story>