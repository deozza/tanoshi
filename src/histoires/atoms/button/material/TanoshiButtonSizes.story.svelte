<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import { BUTTON_SIZES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const smallButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largeButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Lg)

    const blockButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setSize(BUTTON_SIZES.Block)
</script>
  
<Hst.Story title="atoms/button/material/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiButtonMaterial tanoshiButtonModel={smallButton} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiButtonMaterial tanoshiButtonModel={mediumButton} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiButtonMaterial tanoshiButtonModel={largeButton} />
    </Hst.Variant>

    <Hst.Variant title="block">
        <TanoshiButtonMaterial tanoshiButtonModel={blockButton} />
    </Hst.Variant>
</Hst.Story>