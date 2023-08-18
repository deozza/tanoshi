<script lang="ts">

    import '../../../app.css';

	import { TanoshiPillModel } from '$atoms';
	import TanoshiPill from '$atoms/pill/TanoshiPill.svelte';
	import { THEMES } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)

    const secondaryPill: TanoshiPillModel = new TanoshiPillModel('Secondary')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
    
    const whitePill: TanoshiPillModel = new TanoshiPillModel('White')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.White)
        .setBorderTheme(THEMES.White)

    const blackPill: TanoshiPillModel = new TanoshiPillModel('Black')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
    
    const successPill: TanoshiPillModel = new TanoshiPillModel('Success')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)

    const dangerPill: TanoshiPillModel = new TanoshiPillModel('Danger')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
    
    const warningPill: TanoshiPillModel = new TanoshiPillModel('Warning')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)

    const infoPill: TanoshiPillModel = new TanoshiPillModel('Info')
        .setBackgroundTheme(THEMES.Transparent)
        .setTextTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)

</script>
  
<Hst.Story title="atoms/pill/outlined" layout={{ type: 'grid', width: 200}}>
    <Hst.Variant title="primary">
        <TanoshiPill tanoshiPillModel={primaryPill} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiPill tanoshiPillModel={secondaryPill} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiPill tanoshiPillModel={whitePill} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiPill tanoshiPillModel={blackPill} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiPill tanoshiPillModel={successPill} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiPill tanoshiPillModel={dangerPill} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiPill tanoshiPillModel={warningPill} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiPill tanoshiPillModel={infoPill} />
    </Hst.Variant>

</Hst.Story>