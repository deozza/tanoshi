<script lang="ts">

    import '../../../app.css';

	import { THEMES, TanoshiPillModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPill from '$atoms/pill/TanoshiPill.svelte';
    export let Hst: Hst;

    const primaryPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setBasicTheme(THEMES.Primary)

    const secondaryPill: TanoshiPillModel = new TanoshiPillModel('Secondary')
        .setBasicTheme(THEMES.Secondary)

    const whitePill: TanoshiPillModel = new TanoshiPillModel('White')
        .setBasicTheme(THEMES.White)

    const blackPill: TanoshiPillModel = new TanoshiPillModel('Black')
        .setBasicTheme(THEMES.Black)

    const successPill: TanoshiPillModel = new TanoshiPillModel('Success')
        .setBasicTheme(THEMES.Success)

    const dangerPill: TanoshiPillModel = new TanoshiPillModel('Danger')
        .setBasicTheme(THEMES.Danger)

    const warningPill: TanoshiPillModel = new TanoshiPillModel('Warning')
        .setBasicTheme(THEMES.Warning)

    const infoPill: TanoshiPillModel = new TanoshiPillModel('Info')
        .setBasicTheme(THEMES.Info)
</script>
  
<Hst.Story title="atoms/pill/basic" layout={{ type: 'grid', width: 200 }}>
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