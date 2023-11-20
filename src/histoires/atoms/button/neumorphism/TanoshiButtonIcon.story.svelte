<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import { CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiButtonNeumorphism from '$atoms/button/TanoshiButtonNeumorphism.svelte';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;

    const primaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBasicTheme(THEMES.Primary)

    const accountIcon: TanoshiIconModel = new TanoshiIconModel('mdi:account')
        .setColor('white')
		.setHeight(20)
		.setWidth(20);

    const buttonWithIconAtLeft: TanoshiButtonModel = new TanoshiButtonModel('Icon at left')
        .setBasicTheme(THEMES.Primary)
        .setIconAtLeft(accountIcon)

    const buttonWithIconAtRight: TanoshiButtonModel = new TanoshiButtonModel('Icon at right')
        .setBasicTheme(THEMES.Primary)
        .setIconAtRight(accountIcon)

    const buttonWithIconAtBothSides: TanoshiButtonModel = new TanoshiButtonModel('Icon at both sides')
        .setBasicTheme(THEMES.Primary)
        .setIconAtLeft(accountIcon)
        .setIconAtRight(accountIcon)
        

</script>
  
<Hst.Story title="atoms/button/neumorphism/icons" >
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={defaultButton} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="icon at left">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={buttonWithIconAtLeft} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>

    <Hst.Variant title="icon at right">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={buttonWithIconAtRight} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>

    <Hst.Variant title="icon at both sides">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiButtonNeumorphism tanoshiButtonModel={buttonWithIconAtBothSides} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>
</Hst.Story>