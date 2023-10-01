<script lang="ts">

    import '../../../../app.css';

	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, TanoshiPillModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPillNeumorphism from '$atoms/pill/TanoshiPillNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setBasicTheme(THEMES.Primary)

    const primaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const secondaryPill: TanoshiPillModel = new TanoshiPillModel('Secondary')
        .setBasicTheme(THEMES.Secondary)

    const secondaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Secondary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const whitePill: TanoshiPillModel = new TanoshiPillModel('White')
        .setBasicTheme(THEMES.White)

    const whiteContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.White)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const blackPill: TanoshiPillModel = new TanoshiPillModel('Black')
        .setBasicTheme(THEMES.Black)

    const blackContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Black)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const successPill: TanoshiPillModel = new TanoshiPillModel('Success')
        .setBasicTheme(THEMES.Success)

    const successContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Success)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const dangerPill: TanoshiPillModel = new TanoshiPillModel('Danger')
        .setBasicTheme(THEMES.Danger)

    const dangerContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Danger)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const warningPill: TanoshiPillModel = new TanoshiPillModel('Warning')
        .setBasicTheme(THEMES.Warning)

    const warningContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Warning)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const infoPill: TanoshiPillModel = new TanoshiPillModel('Info')
        .setBasicTheme(THEMES.Info)

    const infoContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Info)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)
</script>
  
<Hst.Story title="atoms/pill/neumorphism/basic" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={primaryPill} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={secondaryPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={whitePill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={blackPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={successPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={dangerPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={warningPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={infoPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>