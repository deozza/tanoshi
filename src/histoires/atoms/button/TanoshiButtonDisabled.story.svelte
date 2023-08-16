<script lang="ts">

    import '../../../app.css';

	import { TanoshiButtonModel } from '$atoms';
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryButton: TanoshiButtonModel = new TanoshiButtonModel('Primary')
        .setBasicTheme(THEMES.Primary)
        .setIsDisabled(true)

    const secondaryButton: TanoshiButtonModel = new TanoshiButtonModel('Secondary')
        .setBasicTheme(THEMES.Secondary)
        .setIsDisabled(true)

    const whiteButton: TanoshiButtonModel = new TanoshiButtonModel('White')
        .setBasicTheme(THEMES.White)
        .setIsDisabled(true)

    const blackButton: TanoshiButtonModel = new TanoshiButtonModel('Black')
        .setBasicTheme(THEMES.Black)
        .setIsDisabled(true)

    const successButton: TanoshiButtonModel = new TanoshiButtonModel('Success')
        .setBasicTheme(THEMES.Success)
        .setIsDisabled(true)

    const dangerButton: TanoshiButtonModel = new TanoshiButtonModel('Danger')
        .setBasicTheme(THEMES.Danger)
        .setIsDisabled(true)

    const warningButton: TanoshiButtonModel = new TanoshiButtonModel('Warning')
        .setBasicTheme(THEMES.Warning)
        .setIsDisabled(true)

    const infoButton: TanoshiButtonModel = new TanoshiButtonModel('Info')
        .setBasicTheme(THEMES.Info)
        .setIsDisabled(true)

</script>
  
<Hst.Story title="atoms/button/disabled" layout={{ type: 'grid', width: 200 }}>
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