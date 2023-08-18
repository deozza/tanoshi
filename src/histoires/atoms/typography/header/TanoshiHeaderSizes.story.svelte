<script lang="ts">

    import '../../../../app.css';

	import { SIZES, TanoshiHeaderModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
    export let Hst: Hst;

    const smallHeader: TanoshiHeaderModel = new TanoshiHeaderModel('small')
        .setSize(SIZES.Sm)

    const mediumHeader: TanoshiHeaderModel = new TanoshiHeaderModel('medium')
        .setSize(SIZES.Md)

    const largeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('large')
        .setSize(SIZES.Lg)

    const xlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xlarge')
        .setSize(SIZES.Xl)

    const xxlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xxlarge')
        .setSize(SIZES['2Xl'])

    const xxxlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xxxlarge')
        .setSize(SIZES['3Xl'])

    const xxxxlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xxxxlarge')
        .setSize(SIZES['4Xl'])

    const xxxxxlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xxxxxlarge')
        .setSize(SIZES['5Xl'])

    const xxxxxxlargeHeader: TanoshiHeaderModel = new TanoshiHeaderModel('xxxxxxlarge')
        .setSize(SIZES['6Xl'])

</script>
  
<Hst.Story title="atoms/typography/header/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiHeader tanoshiHeaderModel={smallHeader} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiHeader tanoshiHeaderModel={mediumHeader} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiHeader tanoshiHeaderModel={largeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xlarge">
        <TanoshiHeader tanoshiHeaderModel={xlargeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xxlarge">
        <TanoshiHeader tanoshiHeaderModel={xxlargeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xxxlarge">
        <TanoshiHeader tanoshiHeaderModel={xxxlargeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xxxxlarge">
        <TanoshiHeader tanoshiHeaderModel={xxxxlargeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxlarge">
        <TanoshiHeader tanoshiHeaderModel={xxxxxlargeHeader} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxxlarge">
        <TanoshiHeader tanoshiHeaderModel={xxxxxxlargeHeader} />
    </Hst.Variant>

</Hst.Story>