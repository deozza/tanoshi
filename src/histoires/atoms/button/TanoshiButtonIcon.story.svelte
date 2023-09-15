<script lang="ts">

    import '../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBasicTheme(THEMES.Primary)

    const buttonWithIconAtLeft: TanoshiButtonModel = new TanoshiButtonModel('Icon at left')
        .setBasicTheme(THEMES.Primary)
        .setIconAtLeft('mdi:account-circle')

    const buttonWithIconAtRight: TanoshiButtonModel = new TanoshiButtonModel('Icon at right')
        .setBasicTheme(THEMES.Primary)
        .setIconAtRight('mdi:account-circle')

    const buttonWithIconAtBothSides: TanoshiButtonModel = new TanoshiButtonModel('Icon at both sides')
        .setBasicTheme(THEMES.Primary)
        .setIconAtLeft('mdi:account-circle')
        .setIconAtRight('mdi:account-circle')
        

</script>
  
<Hst.Story title="atoms/button/icons" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiButton tanoshiButtonModel={defaultButton} />
    </Hst.Variant>

    <Hst.Variant title="icon at left">
        <TanoshiButton tanoshiButtonModel={buttonWithIconAtLeft} />
    </Hst.Variant>

    <Hst.Variant title="icon at right">
        <TanoshiButton tanoshiButtonModel={buttonWithIconAtRight} />
    </Hst.Variant>

    <Hst.Variant title="icon at both sides">
        <TanoshiButton tanoshiButtonModel={buttonWithIconAtBothSides} />
    </Hst.Variant>
</Hst.Story>