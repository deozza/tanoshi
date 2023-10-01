<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiButtonGlass from '$atoms/button/TanoshiButtonGlass.svelte';
    export let Hst: Hst;

    const primaryButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBasicTheme(THEMES.Primary)
        .setLoaderOn()

    const secondaryButton: TanoshiButtonModel = new TanoshiButtonModel('Secondary')
        .setBasicTheme(THEMES.Secondary)
        .setLoaderOn()

    const whiteButton: TanoshiButtonModel = new TanoshiButtonModel('White')
        .setBasicTheme(THEMES.White)
        .setTextTheme(THEMES.White)
        .setTextHoverTheme(THEMES.White)
        .setLoaderOn()

    const blackButton: TanoshiButtonModel = new TanoshiButtonModel('Black')
        .setBasicTheme(THEMES.Black)
        .setLoaderOn()

    const successButton: TanoshiButtonModel = new TanoshiButtonModel('Success')
        .setBasicTheme(THEMES.Success)
        .setLoaderOn()

    const dangerButton: TanoshiButtonModel = new TanoshiButtonModel('Danger')
        .setBasicTheme(THEMES.Danger)
        .setLoaderOn()

    const warningButton: TanoshiButtonModel = new TanoshiButtonModel('Warning')
        .setBasicTheme(THEMES.Warning)
        .setLoaderOn()

    const infoButton: TanoshiButtonModel = new TanoshiButtonModel('Info')
        .setBasicTheme(THEMES.Info)
        .setLoaderOn()

</script>
  
<Hst.Story title="atoms/button/glass/loader" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiButtonGlass tanoshiButtonModel={primaryButton} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiButtonGlass tanoshiButtonModel={secondaryButton} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiButtonGlass tanoshiButtonModel={whiteButton} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiButtonGlass tanoshiButtonModel={blackButton} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiButtonGlass tanoshiButtonModel={successButton} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiButtonGlass tanoshiButtonModel={dangerButton} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiButtonGlass tanoshiButtonModel={warningButton} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiButtonGlass tanoshiButtonModel={infoButton} />
    </Hst.Variant>

</Hst.Story>