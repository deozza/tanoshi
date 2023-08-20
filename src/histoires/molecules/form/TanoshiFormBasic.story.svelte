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
	import TanoshiChoiceInput from '$atoms/input/choice/TanoshiChoiceInput.svelte';
	import TanoshiChoiceGroupModel from '$molecules/input/choiceGroup/TanoshiChoiceGroupModel';
	import TanoshiChoiceGroup from '$molecules/input/choiceGroup/TanoshiChoiceGroup.svelte';
    export let Hst: Hst;

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput)

    const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('Password')
        .setType(INPUT_TEXT_TYPES.Password)
        .setRequired(true)
        .setMinLength(8)
    const passwordInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput)

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('Age')
        .setMin(18)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput)

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

    const submitButton: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Success)
        .setType(BUTTON_TYPES.Submit)

    const defaultForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiRadioChoiceGroupLabelModel, tanoshiRadioChoiceGroupModel, TanoshiChoiceGroup))
        .addLabelAndInput(new TanoshiLabelAndInputModel(tanoshiCheckboxChoiceGroupLabelModel, tanoshiCheckboxChoiceGroupModel, TanoshiChoiceGroup))


    function handleForm(){
		console.log(defaultForm)
	}

</script>
  
<Hst.Story title="molecules/form/basic" layout={{ type: 'grid', width: 600 }}>
        <TanoshiForm tanoshiFormModel={defaultForm} on:submit={handleForm}/>
</Hst.Story>