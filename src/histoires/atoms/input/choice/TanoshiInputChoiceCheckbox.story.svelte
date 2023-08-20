<script lang="ts">
	import TanoshiChoiceInput from '$atoms/input/choice/TanoshiChoiceInput.svelte';
	import TanoshiChoiceInputModel from '$atoms/input/choice/TanoshiChoiceInputModel';
	import { INPUT_CHOICES_TYPES } from '$lib';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('value')
        .setType(INPUT_CHOICES_TYPES.Checkbox)

    const checkedChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('value')
        .setType(INPUT_CHOICES_TYPES.Checkbox)
        .setChecked(true)

    const readonlyChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('value')
        .setType(INPUT_CHOICES_TYPES.Checkbox)
        .setReadonly(true)

    const requiredChoiceInput: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('value')
        .setType(INPUT_CHOICES_TYPES.Checkbox)
        .setRequired(true)

</script>
  
<Hst.Story title="atoms/input/choice/checkbox" layout={{ type: 'grid', width: 600 }}>
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
</Hst.Story>