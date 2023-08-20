<script lang="ts">
	import TanoshiForm from '$molecules/form/TanoshiForm.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInput from '$atoms/input/number/TanoshiNumberInput.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;


    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel('email', 'Email')

    const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('password')
        .setType(INPUT_TEXT_TYPES.Password)
        .setRequired(true)
        .setMinLength(8)
    const passwordInputLabel: TanoshiLabelModel = new TanoshiLabelModel('password', 'Password')

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('age')
        .setMin(18)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel('age', 'Age')

    
    const submitButton: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Success)
        .setType(BUTTON_TYPES.Submit)

    const defaultForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))

</script>
  
<Hst.Story title="molecules/form/basic" layout={{ type: 'grid', width: 600 }}>
        <TanoshiForm tanoshiFormModel={defaultForm} />
</Hst.Story>