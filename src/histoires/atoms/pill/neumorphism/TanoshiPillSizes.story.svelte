<script lang="ts">

    import '../../../../app.css';

	import { TanoshiPillModel } from '$atoms';
	import { BUTTON_SIZES, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, THEMES, TanoshiContainerModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPillNeumorphism from '$atoms/pill/TanoshiPillNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
    export let Hst: Hst;
    
    const primaryContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)
        .setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered)
        .setWidth(WIDTHS.W12)

    const smallPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largePill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Lg)
</script>
  
<Hst.Story title="atoms/pill/neumorphism/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={smallPill} />
        </TanoshiContainerMaterial>    
    </Hst.Variant>
    
    <Hst.Variant title="medium">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={mediumPill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainerModel}>
            <TanoshiPillNeumorphism tanoshiPillModel={largePill} />
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>