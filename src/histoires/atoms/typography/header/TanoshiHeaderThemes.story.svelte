<script lang="ts">

    import '../../../../app.css';

	import { THEMES, TanoshiHeaderModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiHeader from '$atoms/typography/header/TanoshiHeader.svelte';
    export let Hst: Hst;

    const primaryHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Primary)

    const secondaryHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Secondary)

    const whiteHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.White)

    const blackHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Black)

    const successHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Success)

    const dangerHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Danger)

    const warningHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Warning)

    const infoHeader: TanoshiHeaderModel = new TanoshiHeaderModel('This is a header.')
        .setTheme(THEMES.Info)


</script>
  
<Hst.Story title="atoms/typography/header/themes" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiHeader tanoshiHeaderModel={primaryHeader} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiHeader tanoshiHeaderModel={secondaryHeader} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiHeader tanoshiHeaderModel={whiteHeader} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiHeader tanoshiHeaderModel={blackHeader} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiHeader tanoshiHeaderModel={successHeader} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiHeader tanoshiHeaderModel={dangerHeader} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiHeader tanoshiHeaderModel={warningHeader} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiHeader tanoshiHeaderModel={infoHeader} />
    </Hst.Variant>

</Hst.Story>