<script lang="ts">
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInput from '$atoms/input/number/TanoshiNumberInput.svelte';
    import { INPUT_TEXT_TYPES, INPUT_CHOICES_TYPES } from '$lib';
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

    const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('Password')
        .setType(INPUT_TEXT_TYPES.Password)
        .setRequired(true)
    const passwordInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput)
    const passwordLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput)

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('Age')
        .setRequired(true)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput)
    const ageLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput)

    const descriptionInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('Description')
        .setRequired(true)
    const descriptionInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(descriptionInput)
    const descriptionLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(descriptionInputLabel, descriptionInput, TanoshiTextareaInput)

    const radioChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 1').setRequired(true)
    const radioChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 2').setRequired(true)
    const radioChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 3').setRequired(true)
    
    const radioChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 1').setSpacing(false)
    const radioChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 2').setSpacing(false)
    const radioChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 3').setSpacing(false)

    const tanoshiRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('radio')
        .addChoice({label: radioChoice1InputLabel, input: radioChoice1Input})
        .addChoice({label: radioChoice2InputLabel, input: radioChoice2Input})
        .addChoice({label: radioChoice3InputLabel, input: radioChoice3Input})

    const tanoshiRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'Radio choices')

    const tanoshiRadioChoiceGroupLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiRadioChoiceGroupLabelModel, tanoshiRadioChoiceGroupModel, TanoshiChoiceGroup)

    const checkboxChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 1').setType(INPUT_CHOICES_TYPES.Checkbox).setRequired(true)
    const checkboxChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 2').setType(INPUT_CHOICES_TYPES.Checkbox).setRequired(true)
    const checkboxChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 3').setType(INPUT_CHOICES_TYPES.Checkbox).setRequired(true)
    
    const checkboxChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 1').setSpacing(false)
    const checkboxChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 2').setSpacing(false)
    const checkboxChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 3').setSpacing(false)

    const tanoshiCheckboxChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('checkbox')
        .addChoice({label: checkboxChoice1InputLabel, input: checkboxChoice1Input})
        .addChoice({label: checkboxChoice2InputLabel, input: checkboxChoice2Input})
        .addChoice({label: checkboxChoice3InputLabel, input: checkboxChoice3Input})

    const tanoshiCheckboxChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'Checkbox choices')

    const tanoshiCheckboxChoiceGroupLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiCheckboxChoiceGroupLabelModel, tanoshiCheckboxChoiceGroupModel, TanoshiChoiceGroup)

    
    const selectOption1: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 1', 'select 1')
    const selectOption2: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 2', 'select 2')
    const selectOption3: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 3', 'select 3')

    const tanoshiSelectInputModel: TanoshiSelectInputModel = new TanoshiSelectInputModel('Select')
        .addOption(selectOption1)
        .addOption(selectOption2)
        .addOption(selectOption3)
        .setRequired(true)
    
    const tanoshiSelectInputLabelModel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(tanoshiSelectInputModel)

    const tanoshiSelectLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(tanoshiSelectInputLabelModel, tanoshiSelectInputModel, TanoshiSelectInput)

    const fileInput: TanoshiFileInputModel = new TanoshiFileInputModel('File')
        .setRequired(true)
    const fileInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(fileInput)
    const fileLabelAndInput: TanoshiLabelAndInputModel = new TanoshiLabelAndInputModel(fileInputLabel, fileInput, TanoshiFileInput)
</script>
  
<Hst.Story title="molecules/label and input/required" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="text">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={emailLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="password">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={passwordLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="number">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={ageLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="textarea">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={descriptionLabelAndInput}/>
    </Hst.Variant>

    <Hst.Variant title="radio">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={tanoshiRadioChoiceGroupLabelAndInput} />
    </Hst.Variant>

    <Hst.Variant title="checkbox">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={tanoshiCheckboxChoiceGroupLabelAndInput} />
    </Hst.Variant>

    <Hst.Variant title="select">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={tanoshiSelectLabelAndInput} />
    </Hst.Variant>

    <Hst.Variant title="file">
        <TanoshiLabelAndInput tanoshiLabelAndInputModel={fileLabelAndInput} />
    </Hst.Variant>
</Hst.Story>