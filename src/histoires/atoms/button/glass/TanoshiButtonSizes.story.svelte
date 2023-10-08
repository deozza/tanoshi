<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import { BUTTON_SIZES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiButtonGlass from '$atoms/button/TanoshiButtonGlass.svelte';
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
  
<Hst.Story title="atoms/button/glass/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiButtonGlass tanoshiButtonModel={smallButton} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiButtonGlass tanoshiButtonModel={mediumButton} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiButtonGlass tanoshiButtonModel={largeButton} />
    </Hst.Variant>

    <Hst.Variant title="block">
        <TanoshiButtonGlass tanoshiButtonModel={blockButton} />
    </Hst.Variant>
</Hst.Story>