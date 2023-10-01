<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiButtonNeumorphism from '$atoms/button/TanoshiButtonNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBasicTheme(THEMES.Primary)
        .setLoaderOn()

    const primaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const secondaryButton: TanoshiButtonModel = new TanoshiButtonModel('Secondary')
        .setBasicTheme(THEMES.Secondary)
        .setLoaderOn()

    const secondaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Secondary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const whiteButton: TanoshiButtonModel = new TanoshiButtonModel('White')
        .setBasicTheme(THEMES.White)
        .setTextTheme(THEMES.Black)
        .setTextHoverTheme(THEMES.Black)
        .setLoaderOn()

    const whiteContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.White)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const blackButton: TanoshiButtonModel = new TanoshiButtonModel('Black')
        .setBasicTheme(THEMES.Black)
        .setLoaderOn()

    const blackContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Black)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const successButton: TanoshiButtonModel = new TanoshiButtonModel('Success')
        .setBasicTheme(THEMES.Success)
        .setLoaderOn()
    
    const successContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Success)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const dangerButton: TanoshiButtonModel = new TanoshiButtonModel('Danger')
        .setBasicTheme(THEMES.Danger)
        .setLoaderOn()

    const dangerContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Danger)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const warningButton: TanoshiButtonModel = new TanoshiButtonModel('Warning')
        .setBasicTheme(THEMES.Warning)
        .setLoaderOn()

    const warningContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Warning)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const infoButton: TanoshiButtonModel = new TanoshiButtonModel('Info')
        .setBasicTheme(THEMES.Info)
        .setLoaderOn()

    const infoContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Info)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

</script>
  
<Hst.Story title="atoms/button/neumorphism/loader">
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={primaryButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={secondaryButton} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={whiteButton} />
        </TanoshiContainerMaterial>   
     </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={blackButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={successButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={dangerButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={warningButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={infoButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>