<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import { BUTTON_SIZES, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiButtonNeumorphism from '$atoms/button/TanoshiButtonNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const smallButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largeButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Lg)

    const blockButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Block)
</script>
  
<Hst.Story title="atoms/button/neumorphism/sizes">
    <Hst.Variant title="small">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={smallButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={mediumButton} />
        </TanoshiContainerMaterial>    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={largeButton} />
        </TanoshiContainerMaterial>    </Hst.Variant>

    <Hst.Variant title="block">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={blockButton} />
        </TanoshiContainerMaterial>    </Hst.Variant>
</Hst.Story>