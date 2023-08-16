<script lang="ts">

    import '../../../../app.css';

	import { SIZES, TanoshiParagraphModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
    export let Hst: Hst;

    const smallParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('small')
        .setSize(SIZES.Sm)

    const mediumParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('medium')
        .setSize(SIZES.Md)

    const largeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('large')
        .setSize(SIZES.Lg)

    const xlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xlarge')
        .setSize(SIZES.Xl)

    const xxlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xxlarge')
        .setSize(SIZES['2Xl'])

    const xxxlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xxxlarge')
        .setSize(SIZES['3Xl'])

    const xxxxlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xxxxlarge')
        .setSize(SIZES['4Xl'])

    const xxxxxlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xxxxxlarge')
        .setSize(SIZES['5Xl'])

    const xxxxxxlargeParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('xxxxxxlarge')
        .setSize(SIZES['6Xl'])

</script>
  
<Hst.Story title="atoms/typography/paragraph/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiParagraph tanoshiParagraphModel={smallParagraph} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiParagraph tanoshiParagraphModel={mediumParagraph} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiParagraph tanoshiParagraphModel={largeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xlarge">
        <TanoshiParagraph tanoshiParagraphModel={xlargeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xxlarge">
        <TanoshiParagraph tanoshiParagraphModel={xxlargeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xxxlarge">
        <TanoshiParagraph tanoshiParagraphModel={xxxlargeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xxxxlarge">
        <TanoshiParagraph tanoshiParagraphModel={xxxxlargeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxlarge">
        <TanoshiParagraph tanoshiParagraphModel={xxxxxlargeParagraph} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxxlarge">
        <TanoshiParagraph tanoshiParagraphModel={xxxxxxlargeParagraph} />
    </Hst.Variant>

</Hst.Story>