<script lang="ts">

    import '../../../../app.css';

	import { TanoshiPillModel } from '$atoms';
	import { BUTTON_SIZES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPillGlass from '$atoms/pill/TanoshiPillGlass.svelte';
    export let Hst: Hst;

    const smallPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largePill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Lg)
</script>
  
<Hst.Story title="atoms/pill/glass/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiPillGlass tanoshiPillModel={smallPill} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiPillGlass tanoshiPillModel={mediumPill} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiPillGlass tanoshiPillModel={largePill} />
    </Hst.Variant>
</Hst.Story>