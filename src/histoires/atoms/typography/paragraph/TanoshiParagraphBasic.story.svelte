<script lang="ts">

    import '../../../../app.css';

	import { THEMES, TanoshiParagraphModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiParagraph from '$atoms/typography/paragraph/TanoshiParagraph.svelte';
    export let Hst: Hst;

    const primaryParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Primary)

    const secondaryParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Secondary)

    const whiteParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.White)

    const blackParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Black)

    const successParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Success)

    const dangerParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Danger)

    const warningParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Warning)

    const infoParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('This is a paragraph.')
        .setTheme(THEMES.Info)


</script>
  
<Hst.Story title="atoms/typography/paragraph/basic" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiParagraph tanoshiParagraphModel={primaryParagraph} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiParagraph tanoshiParagraphModel={secondaryParagraph} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiParagraph tanoshiParagraphModel={whiteParagraph} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiParagraph tanoshiParagraphModel={blackParagraph} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiParagraph tanoshiParagraphModel={successParagraph} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiParagraph tanoshiParagraphModel={dangerParagraph} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiParagraph tanoshiParagraphModel={warningParagraph} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiParagraph tanoshiParagraphModel={infoParagraph} />
    </Hst.Variant>

</Hst.Story>