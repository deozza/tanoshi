<script lang="ts">

    import '../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
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
  
<Hst.Story title="atoms/button/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiButton tanoshiButtonModel={smallButton} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiButton tanoshiButtonModel={mediumButton} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiButton tanoshiButtonModel={largeButton} />
    </Hst.Variant>

    <Hst.Variant title="block">
        <TanoshiButton tanoshiButtonModel={blockButton} />
    </Hst.Variant>
</Hst.Story>