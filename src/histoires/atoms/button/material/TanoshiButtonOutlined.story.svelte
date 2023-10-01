<script lang="ts">

    import '../../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButtonMaterial from '$atoms/button/TanoshiButtonMaterial.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Primary)
        .setTextTheme(THEMES.Primary)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Primary)
        .setBorderHoverTheme(THEMES.Primary)

    const secondaryButton: TanoshiButtonModel = new TanoshiButtonModel('Secondary')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Secondary)
        .setTextTheme(THEMES.Secondary)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Secondary)
        .setBorderHoverTheme(THEMES.Secondary)
    
    const whiteButton: TanoshiButtonModel = new TanoshiButtonModel('White')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.White)
        .setTextTheme(THEMES.White)
        .setTextHoverTheme(THEMES.Black)
        .setBorderTheme(THEMES.White)
        .setBorderHoverTheme(THEMES.White)

    const blackButton: TanoshiButtonModel = new TanoshiButtonModel('Black')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Black)
        .setTextTheme(THEMES.Black)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Black)
        .setBorderHoverTheme(THEMES.Black)
    
    const successButton: TanoshiButtonModel = new TanoshiButtonModel('Success')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Success)
        .setTextTheme(THEMES.Success)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Success)
        .setBorderHoverTheme(THEMES.Success)

    const dangerButton: TanoshiButtonModel = new TanoshiButtonModel('Danger')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Danger)
        .setTextTheme(THEMES.Danger)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Danger)
        .setBorderHoverTheme(THEMES.Danger)
    
    const warningButton: TanoshiButtonModel = new TanoshiButtonModel('Warning')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Warning)
        .setTextTheme(THEMES.Warning)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Warning)
        .setBorderHoverTheme(THEMES.Warning)

    const infoButton: TanoshiButtonModel = new TanoshiButtonModel('Info')
        .setBackgroundTheme(THEMES.Transparent)
        .setBackgroundHoverTheme(THEMES.Info)
        .setTextTheme(THEMES.Info)
        .setTextHoverTheme(THEMES.White)
        .setBorderTheme(THEMES.Info)
        .setBorderHoverTheme(THEMES.Info)

</script>
  
<Hst.Story title="atoms/button/material/outlined" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiButtonMaterial tanoshiButtonModel={primaryButton} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiButtonMaterial tanoshiButtonModel={secondaryButton} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiButtonMaterial tanoshiButtonModel={whiteButton} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiButtonMaterial tanoshiButtonModel={blackButton} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiButtonMaterial tanoshiButtonModel={successButton} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiButtonMaterial tanoshiButtonModel={dangerButton} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiButtonMaterial tanoshiButtonModel={warningButton} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiButtonMaterial tanoshiButtonModel={infoButton} />
    </Hst.Variant>

</Hst.Story>