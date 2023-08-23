<script lang="ts">
	import TanoshiForm from '$molecules/form/TanoshiForm.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInput from '$atoms/input/number/TanoshiNumberInput.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES, INPUT_CHOICES_TYPES } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiChoiceInputModel from '$atoms/input/choice/TanoshiChoiceInputModel';
	import TanoshiChoiceGroupModel from '$molecules/input/choiceGroup/TanoshiChoiceGroupModel';
	import TanoshiChoiceGroup from '$molecules/input/choiceGroup/TanoshiChoiceGroup.svelte';
	import TanoshiSelectOptionModel from '$atoms/input/select/option/TanoshiSelectOptionModel';
	import TanoshiSelectInput from '$molecules/input/select/TanoshiSelectInput.svelte';
	import TanoshiSelectInputModel from '$molecules/input/select/TanoshiSelectInputModel';
	import TanoshiTextareaInputModel from '$atoms/input/textarea/TanoshiTextareaInputModel';
	import TanoshiTextareaInput from '$atoms/input/textarea/TanoshiTextareaInput.svelte';
	import TanoshiFileInputModel from '$atoms/input/file/TanoshiFileInputModel';
	import TanoshiFileInput from '$atoms/input/file/TanoshiFileInput.svelte';
	import TanoshiLabelAndInput from '$molecules/labelAndInput/TanoshiLabelAndInput.svelte';
    export let Hst: Hst;

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput)
    const emailLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput)

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('Age')
        .setMin(18)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput)
    const ageLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput)

    const descriptionInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('Description')
    const descriptionInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(descriptionInput)
    const descriptionLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(descriptionInputLabel, descriptionInput, TanoshiTextareaInput)

    const radioChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 1')
    const radioChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 2')
    const radioChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 3')
    const radioChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 1').setSpacing(false)
    const radioChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 2').setSpacing(false)
    const radioChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 3').setSpacing(false)

    const tanoshiRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('radio')
        .addChoice({label: radioChoice1InputLabel, input: radioChoice1Input})
        .addChoice({label: radioChoice2InputLabel, input: radioChoice2Input})
        .addChoice({label: radioChoice3InputLabel, input: radioChoice3Input})

    const tanoshiRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'Radio choices')
    const radioChoiceGroupLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiRadioChoiceGroupLabelModel, tanoshiRadioChoiceGroupModel, TanoshiChoiceGroup)

    const checkboxChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 1').setType(INPUT_CHOICES_TYPES.Checkbox)
    const checkboxChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 2').setType(INPUT_CHOICES_TYPES.Checkbox)
    const checkboxChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('choice 3').setType(INPUT_CHOICES_TYPES.Checkbox)
    const checkboxChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 1').setSpacing(false)
    const checkboxChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 2').setSpacing(false)
    const checkboxChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 3').setSpacing(false)

    const tanoshiCheckboxChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('checkbox')
        .addChoice({label: checkboxChoice1InputLabel, input: checkboxChoice1Input})
        .addChoice({label: checkboxChoice2InputLabel, input: checkboxChoice2Input})
        .addChoice({label: checkboxChoice3InputLabel, input: checkboxChoice3Input})

    const tanoshiCheckboxChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'Checkbox choices')
    const checkboxChoiceGroupLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiCheckboxChoiceGroupLabelModel, tanoshiCheckboxChoiceGroupModel, TanoshiChoiceGroup)

    const selectOption1: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('option 1', 'option 1')
    const selectOption2: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('option 2', 'option 2')
    const selectOption3: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('option 3', 'option 3')

    const tanoshiSelectInputModel: TanoshiSelectInputModel = new TanoshiSelectInputModel('Select')
        .addOption(selectOption1)
        .addOption(selectOption2)
        .addOption(selectOption3)
        .setMultiple(true)

    const tanoshiSelectInputLabelModel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(tanoshiSelectInputModel)
    const selectLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiSelectInputLabelModel, tanoshiSelectInputModel, TanoshiSelectInput)

    const fileInput: TanoshiFileInputModel = new TanoshiFileInputModel('File')
    const fileInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(fileInput)
    const fileLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(fileInputLabel, fileInput, TanoshiFileInput)


</script>
  
<Hst.Story title="molecules/label and input/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="text">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={emailLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="number">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={ageLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="textarea">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={descriptionLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="radio">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={radioChoiceGroupLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="checkbox">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={checkboxChoiceGroupLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="select">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={selectLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="file">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={fileLabelAndInput}/>
    </Hst.Variant>
</Hst.Story>