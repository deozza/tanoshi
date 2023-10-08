<script lang="ts">
	import TanoshiFormNeumorphism from '$molecules/form/TanoshiFormNeumorphism.svelte';
	import TanoshiFormModel from '$molecules/form/TanoshiFormModel';
    import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';
    import TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';
    import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
    import TanoshiTextInputNeumorphism from '$atoms/input/text/TanoshiTextInputNeumorphism.svelte';
    import { THEMES, BUTTON_TYPES, INPUT_TEXT_TYPES, TanoshiContainerModel, CONTAINER_ORIENTATIONS, TanoshiButtonNeumorphism, CONTAINER_BORDERS } from '$lib';
	import TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';
    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const submitButtonPrimary: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Primary)
        .setType(BUTTON_TYPES.Submit)

    const emailInputPrimary: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputPrimaryLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputPrimary)

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const primaryForm: TanoshiFormModel = new TanoshiFormModel(submitButtonPrimary, 'primary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputPrimaryLabel, emailInputPrimary, TanoshiTextInputNeumorphism))
    primaryForm.container.setBackgroundTheme(THEMES.Primary).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonSecondary: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Secondary)
        .setType(BUTTON_TYPES.Submit)

    const emailInputSecondary: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputSecondaryLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputSecondary)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Secondary)

    const secondaryForm: TanoshiFormModel = new TanoshiFormModel(submitButtonSecondary, 'secondary-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputSecondaryLabel, emailInputSecondary, TanoshiTextInputNeumorphism))
    secondaryForm.container.setBackgroundTheme(THEMES.Secondary).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonBlack: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Black)
        .setType(BUTTON_TYPES.Submit)

    const emailInputBlack: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputBlackLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputBlack)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

    const blackForm: TanoshiFormModel = new TanoshiFormModel(submitButtonBlack, 'black-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputBlackLabel, emailInputBlack, TanoshiTextInputNeumorphism))
    blackForm.container.setBackgroundTheme(THEMES.Black).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonWhite: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.White)
        .setType(BUTTON_TYPES.Submit)

    const emailInputWhite: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputWhiteLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputWhite)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.White)

    const whiteForm: TanoshiFormModel = new TanoshiFormModel(submitButtonWhite, 'white-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputWhiteLabel, emailInputWhite, TanoshiTextInputNeumorphism))
    whiteForm.container.setBackgroundTheme(THEMES.White).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonSuccess: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Success)
        .setType(BUTTON_TYPES.Submit)

    const emailInputSuccess: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputSuccessLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputSuccess)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Success)

    const successForm: TanoshiFormModel = new TanoshiFormModel(submitButtonSuccess, 'success-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputSuccessLabel, emailInputSuccess, TanoshiTextInputNeumorphism))
    successForm.container.setBackgroundTheme(THEMES.Success).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonDanger: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Danger)
        .setType(BUTTON_TYPES.Submit)

    const emailInputDanger: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputDangerLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputDanger)

    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Danger)

    const dangerForm: TanoshiFormModel = new TanoshiFormModel(submitButtonDanger, 'danger-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputDangerLabel, emailInputDanger, TanoshiTextInputNeumorphism))
    dangerForm.container.setBackgroundTheme(THEMES.Danger).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonWarning: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Warning)
        .setType(BUTTON_TYPES.Submit)

    const emailInputWarning: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputWarningLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputWarning)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Warning)

    const warningForm: TanoshiFormModel = new TanoshiFormModel(submitButtonWarning, 'warning-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputWarningLabel, emailInputWarning, TanoshiTextInputNeumorphism))
    warningForm.container.setBackgroundTheme(THEMES.Warning).setBorderShape(CONTAINER_BORDERS.Md)

    const submitButtonInfo: TanoshiButtonModel = new TanoshiButtonModel('submit')
        .setBasicTheme(THEMES.Info)
        .setType(BUTTON_TYPES.Submit)

    const emailInputInfo: TanoshiTextInputModel = new TanoshiTextInputModel('Email')
        .setType(INPUT_TEXT_TYPES.Email)
        .setRequired(true)
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)
        .setBorderShape(CONTAINER_BORDERS.Full)
    const emailInputInfoLabel: TanoshiLabelModel = new TanoshiLabelModel().initWithInput(emailInputInfo)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Info)

    const infoForm: TanoshiFormModel = new TanoshiFormModel(submitButtonInfo, 'info-form')
        .addLabelAndInput(new TanoshiLabelAndInputModel(emailInputInfoLabel, emailInputInfo, TanoshiTextInputNeumorphism))
    infoForm.container.setBackgroundTheme(THEMES.Info).setBorderShape(CONTAINER_BORDERS.Md)
</script>
  
<Hst.Story title="molecules/form/neumorphism/background theme" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={primaryForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={secondaryForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={blackForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={whiteForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={successForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={dangerForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={warningForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer}>
            <TanoshiFormNeumorphism tanoshiFormModel={infoForm} tanoshiButtonComponent={TanoshiButtonNeumorphism}/>
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>