<script lang="ts">
	import TanoshiFormMaterial from '$molecules/form/TanoshiFormMaterial.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInputMaterial from '$atoms/input/number/TanoshiNumberInputMaterial.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES, INPUT_CHOICES_TYPES } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiChoiceInputModel from '$atoms/input/choice/TanoshiChoiceInputModel';
	import TanoshiChoiceGroupModel from '$molecules/input/choiceGroup/TanoshiChoiceGroupModel';
	import TanoshiChoiceGroup from '$molecules/input/choiceGroup/TanoshiChoiceGroup.svelte';
	import TanoshiSelectOptionModel from '$atoms/input/select/option/TanoshiSelectOptionModel';
	import TanoshiSelectInput from '$molecules/input/select/TanoshiSelectInput.svelte';
	import TanoshiSelectInputModel from '$molecules/input/select/TanoshiSelectInputModel';
	import TanoshiTextareaInputModel from '$atoms/input/textarea/TanoshiTextareaInputModel';
	import TanoshiTextareaInputMaterial from '$atoms/input/textarea/TanoshiTextareaInputMaterial.svelte';
	import TanoshiFileInputModel from '$atoms/input/file/TanoshiFileInputModel';
	import TanoshiFileInput from '$atoms/input/file/TanoshiFileInput.svelte';
    export let Hst: Hst;

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setName('email')
        .setId('email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput)

    const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('Password')
        .setName('password')
        .setId('password')
        .setType(INPUT_TEXT_TYPES.Password)
        .setRequired(true)
        .setMinLength(8)
    const passwordInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput)

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('Age')
        .setName('age')
        .setId('age')
        .setMin(18)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput)

    const descriptionInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('Description')
        .setName('description')
        .setId('description')

    const descriptionInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(descriptionInput)

    const radioChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 1')
        .setName('radio')
        .setId('radio1')
        .setChecked(true)

    const radioChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 2')
        .setName('radio')
        .setId('radio2')

    const radioChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('radio 3')
        .setName('radio')
        .setId('radio3')
    
    const radioChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 1').setSpacing(false)
    const radioChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 2').setSpacing(false)
    const radioChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'choice 3').setSpacing(false)

    const tanoshiRadioChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('radio')
        .addChoice({label: radioChoice1InputLabel, input: radioChoice1Input})
        .addChoice({label: radioChoice2InputLabel, input: radioChoice2Input})
        .addChoice({label: radioChoice3InputLabel, input: radioChoice3Input})
        .setValue([radioChoice1Input.value])

    const tanoshiRadioChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('radio', 'Radio choices')

    const checkboxChoice1Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 1')
        .setId('checkbox1')
        .setName('checkbox')
        .setType(INPUT_CHOICES_TYPES.Checkbox)
        .setChecked(true)

    const checkboxChoice2Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 2')
    .setId('checkbox2')
    .setName('checkbox')
    .setType(INPUT_CHOICES_TYPES.Checkbox)

    const checkboxChoice3Input: TanoshiChoiceInputModel = new TanoshiChoiceInputModel('checkbox 3')
        .setId('checkbox3')
        .setName('checkbox')
        .setType(INPUT_CHOICES_TYPES.Checkbox)

    const checkboxChoice1InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 1').setSpacing(false)
    const checkboxChoice2InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 2').setSpacing(false)
    const checkboxChoice3InputLabel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'choice 3').setSpacing(false)

    const tanoshiCheckboxChoiceGroupModel: TanoshiChoiceGroupModel = new TanoshiChoiceGroupModel('checkbox')
        .addChoice({label: checkboxChoice1InputLabel, input: checkboxChoice1Input})
        .addChoice({label: checkboxChoice2InputLabel, input: checkboxChoice2Input})
        .addChoice({label: checkboxChoice3InputLabel, input: checkboxChoice3Input})
        .setValue([checkboxChoice1Input.value])

    const tanoshiCheckboxChoiceGroupLabelModel: TanoshiLabelModel = new TanoshiLabelModel('checkbox', 'Checkbox choices')

    const selectOption1: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 1', 'select 1')
        .setId('select')

    const selectOption2: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 2', 'select 2')
        .setId('select')
        .setSelected(true)

    const selectOption3: TanoshiSelectOptionModel = new TanoshiSelectOptionModel('select 3', 'select 3')
        .setId('select')

    const tanoshiSelectInputModel: TanoshiSelectInputModel = new TanoshiSelectInputModel('Select')
        .setId('select')
        .setName('select')
        .addOption(selectOption1)
        .addOption(selectOption2)
        .addOption(selectOption3)
        .setValue(selectOption2.value)
    
    const tanoshiSelectInputLabelModel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(tanoshiSelectInputModel)

    const tanoshiSelectMultipleInputModel: TanoshiSelectInputModel = new TanoshiSelectInputModel('Select multiple')
        .setId('selectMultiple')
        .setName('selectMultiple')
        .addOption(selectOption1)
        .addOption(selectOption2)
        .addOption(selectOption3)
        .setMultiple(true)
        .setValue([selectOption2.value])

    const tanoshiSelectInputMultipleLabelModel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(tanoshiSelectMultipleInputModel)

    const fileInput: TanoshiFileInputModel = new TanoshiFileInputModel('File')
    const fileInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(fileInput)


    const submitButton: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Success)
        .setType(BUTTON_TYPES.Submit)

    const defaultForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'default-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(descriptionInputLabel, descriptionInput, TanoshiTextareaInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiRadioChoiceGroupLabelModel, tanoshiRadioChoiceGroupModel, TanoshiChoiceGroup))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiCheckboxChoiceGroupLabelModel, tanoshiCheckboxChoiceGroupModel, TanoshiChoiceGroup))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiSelectInputLabelModel, tanoshiSelectInputModel, TanoshiSelectInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiSelectInputMultipleLabelModel, tanoshiSelectMultipleInputModel, TanoshiSelectInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(fileInputLabel, fileInput, TanoshiFileInput))
        .setAction('')

    function handleForm(e: any){
		console.log(defaultForm.values)
        console.log(defaultForm.formData)
        console.log(new URLSearchParams(defaultForm.formData).toString())

        console.log(e.detail.formData)
        console.log(new URLSearchParams(e.detail.formData).toString())

	}

</script>
  
<Hst.Story title="molecules/form/material/basic">
        <TanoshiFormMaterial tanoshiFormModel={defaultForm} on:submit={(e) => handleForm(e)}/>
</Hst.Story>