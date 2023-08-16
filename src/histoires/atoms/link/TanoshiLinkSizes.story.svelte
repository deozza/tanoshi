<script lang="ts">

    import '../../../app.css';

	import { SIZES, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
    export let Hst: Hst;

    const smallLink: TanoshiLinkModel = new TanoshiLinkModel('small')
        .setDisplaySize(SIZES.Sm)

    const mediumLink: TanoshiLinkModel = new TanoshiLinkModel('medium')
        .setDisplaySize(SIZES.Md)

    const largeLink: TanoshiLinkModel = new TanoshiLinkModel('large')
        .setDisplaySize(SIZES.Lg)

    const xlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xlarge')
        .setDisplaySize(SIZES.Xl)

    const xxlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xxlarge')
        .setDisplaySize(SIZES['2Xl'])

    const xxxlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xxxlarge')
        .setDisplaySize(SIZES['3Xl'])

    const xxxxlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xxxxlarge')
        .setDisplaySize(SIZES['4Xl'])

    const xxxxxlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xxxxxlarge')
        .setDisplaySize(SIZES['5Xl'])

    const xxxxxxlargeLink: TanoshiLinkModel = new TanoshiLinkModel('xxxxxxlarge')
        .setDisplaySize(SIZES['6Xl'])

</script>
  
<Hst.Story title="atoms/link/sizes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="small">
        <TanoshiLink tanoshiLinkModel={smallLink} />
    </Hst.Variant>

    <Hst.Variant title="medium">
        <TanoshiLink tanoshiLinkModel={mediumLink} />
    </Hst.Variant>

    <Hst.Variant title="large">
        <TanoshiLink tanoshiLinkModel={largeLink} />
    </Hst.Variant>

    <Hst.Variant title="xlarge">
        <TanoshiLink tanoshiLinkModel={xlargeLink} />
    </Hst.Variant>

    <Hst.Variant title="xxlarge">
        <TanoshiLink tanoshiLinkModel={xxlargeLink} />
    </Hst.Variant>

    <Hst.Variant title="xxxlarge">
        <TanoshiLink tanoshiLinkModel={xxxlargeLink} />
    </Hst.Variant>

    <Hst.Variant title="xxxxlarge">
        <TanoshiLink tanoshiLinkModel={xxxxlargeLink} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxlarge">
        <TanoshiLink tanoshiLinkModel={xxxxxlargeLink} />
    </Hst.Variant>

    <Hst.Variant title="xxxxxxlarge">
        <TanoshiLink tanoshiLinkModel={xxxxxxlargeLink} />
    </Hst.Variant>

</Hst.Story>