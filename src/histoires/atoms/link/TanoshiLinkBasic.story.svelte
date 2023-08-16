<script lang="ts">

    import '../../../app.css';

	import { THEMES, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLink from '$atoms/link/TanoshiLink.svelte';
    export let Hst: Hst;

    const primaryLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Primary)

    const secondaryLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Secondary)

    const whiteLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.White)

    const blackLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Black)

    const successLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Success)

    const dangerLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Danger)

    const warningLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Warning)

    const infoLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setTheme(THEMES.Info)


</script>
  
<Hst.Story title="atoms/link/basic" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiLink tanoshiLinkModel={primaryLink} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiLink tanoshiLinkModel={secondaryLink} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiLink tanoshiLinkModel={whiteLink} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiLink tanoshiLinkModel={blackLink} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiLink tanoshiLinkModel={successLink} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiLink tanoshiLinkModel={dangerLink} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiLink tanoshiLinkModel={warningLink} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiLink tanoshiLinkModel={infoLink} />
    </Hst.Variant>

</Hst.Story>