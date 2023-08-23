<script lang="ts">
	import TanoshiFileInput from '$atoms/input/file/TanoshiFileInput.svelte';
	import TanoshiFileInputModel from '$atoms/input/file/TanoshiFileInputModel';


    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('default')

    const multipleFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('multiple')
        .setMultiple(true)

    const acceptFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('accept')
        .setAccept('image/png')

    const placeholderFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('placeholder')
        .setPlaceholder('placeholder')

    const readonlyFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('readonly')
        .setReadonly(true)

    const requiredFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('required')
        .setRequired(true)

    const errorFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('error')
        .setError(true)

    const errorWithMessageFileInput: TanoshiFileInputModel = new TanoshiFileInputModel('error with message')
        .setError(true)
        .setErrorMessage('error message')

</script>
  
<Hst.Story title="atoms/input/file/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiFileInput tanoshiInputModel={defaultFileInput} />
    </Hst.Variant>

    <Hst.Variant title="multiple value">
        <TanoshiFileInput tanoshiInputModel={multipleFileInput} />
    </Hst.Variant>

    <Hst.Variant title="accept">
        <TanoshiFileInput tanoshiInputModel={acceptFileInput} />
    </Hst.Variant>

    <Hst.Variant title="placeholder">
        <TanoshiFileInput tanoshiInputModel={placeholderFileInput} />
    </Hst.Variant>

    <Hst.Variant title="readonly">
        <TanoshiFileInput tanoshiInputModel={readonlyFileInput} />
    </Hst.Variant>

    <Hst.Variant title="required">
        <TanoshiFileInput tanoshiInputModel={requiredFileInput} />
    </Hst.Variant>

    <Hst.Variant title="error">
        <TanoshiFileInput tanoshiInputModel={errorFileInput} />
    </Hst.Variant>

    <Hst.Variant title="error with message">
        <TanoshiFileInput tanoshiInputModel={errorWithMessageFileInput} />
    </Hst.Variant>

</Hst.Story>