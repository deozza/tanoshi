<script lang="ts">
	import TanoshiNumberInput from '$atoms/input/number/TanoshiNumberInput.svelte';
	import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';


    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('default')

    const defaultValueNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('default value')
        .setValue(100)

    const placeholderNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('placeholder')
        .setPlaceholder('placeholder')

    const readonlyNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('readonly')
        .setReadonly(true)

    const requiredNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('required')
        .setRequired(true)

    const errorNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('error')
        .setError(true)

    const errorWithMessageNumberInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('error with message')
        .setError(true)
        .setErrorMessage('error message')

</script>
  
<Hst.Story title="atoms/input/number/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiNumberInput tanoshiInputModel={defaultNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="default value">
        <TanoshiNumberInput tanoshiInputModel={defaultValueNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiNumberInput tanoshiInputModel={placeholderNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiNumberInput tanoshiInputModel={readonlyNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiNumberInput tanoshiInputModel={requiredNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiNumberInput tanoshiInputModel={errorNumberInput} />
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiNumberInput tanoshiInputModel={errorWithMessageNumberInput} />
    </Hst.Variant>

</Hst.Story>