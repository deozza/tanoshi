<script lang="ts">

    import '../../../app.css';

	import { TanoshiPillModel } from '$atoms';
	import TanoshiPill from '$atoms/pill/TanoshiPill.svelte';
	import { BUTTON_SIZES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const smallPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largePill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Lg)
</script>
  
<Hst.Story title="atoms/pill/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiPill tanoshiPillModel={smallPill} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiPill tanoshiPillModel={mediumPill} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiPill tanoshiPillModel={largePill} />
    </Hst.Variant>
</Hst.Story>