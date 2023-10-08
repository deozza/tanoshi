<script lang="ts">
	import TanoshiFormMaterial from '$molecules/form/TanoshiFormMaterial.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInputMaterial from '$atoms/input/text/TanoshiTextInputMaterial.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInputMaterial from '$atoms/input/number/TanoshiNumberInputMaterial.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../../app.css';

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

    const defaultForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'default-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))

    const primaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'primary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    primaryForm.container.setBackgroundTheme(THEMES.Primary)

    const secondaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'secondary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    secondaryForm.container.setBackgroundTheme(THEMES.Secondary)

    const blackForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'black-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    blackForm.container.setBackgroundTheme(THEMES.Black)

    const whiteForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'white-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputBlackLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputBlackLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputBlackLabel, ageInput, TanoshiNumberInputMaterial))
    whiteForm.container.setBackgroundTheme(THEMES.White)

    const successForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'success-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    successForm.container.setBackgroundTheme(THEMES.Success)


    const dangerForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'danger-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    dangerForm.container.setBackgroundTheme(THEMES.Danger)
    

    const warningForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'warning-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    warningForm.container.setBackgroundTheme(THEMES.Warning)

    const infoForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'info-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputMaterial))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputMaterial))
    infoForm.container.setBackgroundTheme(THEMES.Info)
</script>
  
<Hst.Story title="molecules/form/material/background theme" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiFormMaterial tanoshiFormModel={defaultForm} />
    </Hst.Variant>

    <Hst.Variant title="primary">
        <TanoshiFormMaterial tanoshiFormModel={primaryForm} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiFormMaterial tanoshiFormModel={secondaryForm} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiFormMaterial tanoshiFormModel={blackForm} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiFormMaterial tanoshiFormModel={whiteForm} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiFormMaterial tanoshiFormModel={successForm} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiFormMaterial tanoshiFormModel={dangerForm} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiFormMaterial tanoshiFormModel={warningForm} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiFormMaterial tanoshiFormModel={infoForm} />
    </Hst.Variant>
</Hst.Story>