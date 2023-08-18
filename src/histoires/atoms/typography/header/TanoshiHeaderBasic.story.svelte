<script lang="ts">

    import '../../../../app.css';

	import { HEADER_TAGS, THEMES, TanoshiHeaderModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
    export let Hst: Hst;

    const h1Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h1>This is a header.</h1>')
        .setTag(HEADER_TAGS.H1)

    const h2Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h2>This is a header.</h2>')
        .setTag(HEADER_TAGS.H2)

    const h3Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h3>This is a header.</h3>')
        .setTag(HEADER_TAGS.H3)

    const h4Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h4>This is a header.</h4>')
        .setTag(HEADER_TAGS.H4)

    const h5Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h5>This is a header.</h5>')
        .setTag(HEADER_TAGS.H5)

    const h6Header: TanoshiHeaderModel = new TanoshiHeaderModel('<h6>This is a header.</h6>')
        .setTag(HEADER_TAGS.H6)

</script>
  
<Hst.Story title="atoms/typography/header/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiHeader tanoshiHeaderModel={h1Header} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiHeader tanoshiHeaderModel={h2Header} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiHeader tanoshiHeaderModel={h3Header} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiHeader tanoshiHeaderModel={h4Header} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiHeader tanoshiHeaderModel={h5Header} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiHeader tanoshiHeaderModel={h6Header} />
    </Hst.Variant>
</Hst.Story>