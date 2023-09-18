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

    const emailInput: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
    const emailInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput)
    const emailInputBlackLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInput).setTheme(THEMES.Black)

    const passwordInput: TanoshiTextInputModel = new TanoshiTextInputModel('Password')
        .setType(INPUT_TEXT_TYPES.Password)
        .setRequired(true)
        .setMinLength(8)
    const passwordInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput)
    const passwordInputBlackLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(passwordInput).setTheme(THEMES.Black)

    const ageInput: TanoshiNumberInputModel = new TanoshiNumberInputModel('Age')
        .setMin(18)
    const ageInputLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput)
    const ageInputBlackLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(ageInput).setTheme(THEMES.Black)

    const submitButton: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Success)
        .setType(BUTTON_TYPES.Submit)

    const defaultForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))

    const primaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    primaryForm.container.setBackgroundTheme(THEMES.Primary)

    const secondaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    secondaryForm.container.setBackgroundTheme(THEMES.Secondary)

    const blackForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    blackForm.container.setBackgroundTheme(THEMES.Black)

    const whiteForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputBlackLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputBlackLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputBlackLabel, ageInput, TanoshiNumberInput))
    whiteForm.container.setBackgroundTheme(THEMES.White)

    const successForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    successForm.container.setBackgroundTheme(THEMES.Success)


    const dangerForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    dangerForm.container.setBackgroundTheme(THEMES.Danger)
    

    const warningForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    warningForm.container.setBackgroundTheme(THEMES.Warning)

    const infoForm: TanoshiFormModel = new TanoshiFormModel(submitButton)
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInput))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInput))
    infoForm.container.setBackgroundTheme(THEMES.Info)
</script>
  
<Hst.Story title="molecules/form/background theme" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiForm tanoshiFormModel={defaultForm} />
    </Hst.Variant>

    <Hst.Variant title="primary">
        <TanoshiForm tanoshiFormModel={primaryForm} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiForm tanoshiFormModel={secondaryForm} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiForm tanoshiFormModel={blackForm} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiForm tanoshiFormModel={whiteForm} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiForm tanoshiFormModel={successForm} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiForm tanoshiFormModel={dangerForm} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiForm tanoshiFormModel={warningForm} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiForm tanoshiFormModel={infoForm} />
    </Hst.Variant>
</Hst.Story>