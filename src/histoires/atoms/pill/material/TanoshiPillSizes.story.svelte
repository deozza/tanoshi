<script lang="ts">

    import '../../../../app.css';

	import { TanoshiPillModel } from '$atoms';
	import { BUTTON_SIZES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPillMaterial from '$atoms/pill/TanoshiPillMaterial.svelte';
    export let Hst: Hst;

    const smallPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Sm)

    const mediumPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Md)

    const largePill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setSize(BUTTON_SIZES.Lg)
</script>
  
<Hst.Story title="atoms/pill/material/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiPillMaterial tanoshiPillModel={smallPill} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiPillMaterial tanoshiPillModel={mediumPill} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiPillMaterial tanoshiPillModel={largePill} />
    </Hst.Variant>
</Hst.Story>