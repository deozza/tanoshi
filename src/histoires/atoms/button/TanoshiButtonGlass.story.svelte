<script lang="ts">

    import '../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setGlassTheme(THEMES.Primary)

    const secondaryButton: TanoshiButtonModel = new TanoshiButtonModel('Secondary')
        .setGlassTheme(THEMES.Secondary)

    const whiteButton: TanoshiButtonModel = new TanoshiButtonModel('White')
        .setGlassTheme(THEMES.White)
        .setTextTheme(THEMES.White)
        .setTextHoverTheme(THEMES.White)
        
    const blackButton: TanoshiButtonModel = new TanoshiButtonModel('Black')
        .setGlassTheme(THEMES.Black)

    const successButton: TanoshiButtonModel = new TanoshiButtonModel('Success')
        .setGlassTheme(THEMES.Success)

    const dangerButton: TanoshiButtonModel = new TanoshiButtonModel('Danger')
        .setGlassTheme(THEMES.Danger)

    const warningButton: TanoshiButtonModel = new TanoshiButtonModel('Warning')
        .setGlassTheme(THEMES.Warning)

    const infoButton: TanoshiButtonModel = new TanoshiButtonModel('Info')
        .setGlassTheme(THEMES.Info)
</script>
  
<Hst.Story title="atoms/button/glass" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiButton tanoshiButtonModel={primaryButton} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiButton tanoshiButtonModel={secondaryButton} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiButton tanoshiButtonModel={whiteButton} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiButton tanoshiButtonModel={blackButton} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiButton tanoshiButtonModel={successButton} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiButton tanoshiButtonModel={dangerButton} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiButton tanoshiButtonModel={warningButton} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiButton tanoshiButtonModel={infoButton} />
    </Hst.Variant>
</Hst.Story>