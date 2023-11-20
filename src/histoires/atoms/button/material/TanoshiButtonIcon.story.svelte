<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
    export let Hst: Hst;

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
  
<Hst.Story title="atoms/button/material/icons" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiButtonMaterial tanoshiButtonModel={defaultButton} />
    </Hst.Variant>

    <Hst.Variant title="icon at left">
        <TanoshiButtonMaterial tanoshiButtonModel={buttonWithIconAtLeft} />
    </Hst.Variant>

    <Hst.Variant title="icon at right">
        <TanoshiButtonMaterial tanoshiButtonModel={buttonWithIconAtRight} />
    </Hst.Variant>

    <Hst.Variant title="icon at both sides">
        <TanoshiButtonMaterial tanoshiButtonModel={buttonWithIconAtBothSides} />
    </Hst.Variant>
</Hst.Story>