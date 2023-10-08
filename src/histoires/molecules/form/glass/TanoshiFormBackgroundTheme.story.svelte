<script lang="ts">
	import TanoshiFormGlass from '$molecules/form/TanoshiFormGlass.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInputGlass from '$atoms/input/text/TanoshiTextInputGlass.svelte';
    import TanoshiNumberInputModel from '$atoms/input/number/TanoshiNumberInputModel';
    import TanoshiNumberInputGlass from '$atoms/input/number/TanoshiNumberInputGlass.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES, TanoshiContainerModel, CONTAINER_ORIENTATIONS } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

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
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))

    const primaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'primary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    primaryForm.container.setBackgroundTheme(THEMES.Primary)

    const secondaryForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'secondary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    secondaryForm.container.setBackgroundTheme(THEMES.Secondary)

    const blackForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'black-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    blackForm.container.setBackgroundTheme(THEMES.Black)

    const whiteForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'white-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputBlackLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputBlackLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputBlackLabel, ageInput, TanoshiNumberInputGlass))
    whiteForm.container.setBackgroundTheme(THEMES.White)

    const successForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'success-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    successForm.container.setBackgroundTheme(THEMES.Success)


    const dangerForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'danger-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    dangerForm.container.setBackgroundTheme(THEMES.Danger)
    

    const warningForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'warning-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    warningForm.container.setBackgroundTheme(THEMES.Warning)

    const infoForm: TanoshiFormModel = new TanoshiFormModel(submitButton, 'info-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputLabel, emailInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(passwordInputLabel, passwordInput, TanoshiTextInputGlass))
        .addLabelAndInput(new TanoshiLabelAndInputModel(ageInputLabel, ageInput, TanoshiNumberInputGlass))
    infoForm.container.setBackgroundTheme(THEMES.Info)
</script>
  
<Hst.Story title="molecules/form/glass/background theme" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={defaultForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={primaryForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={secondaryForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={blackForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={whiteForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={successForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={dangerForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={warningForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormGlass tanoshiFormModel={infoForm} />
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>