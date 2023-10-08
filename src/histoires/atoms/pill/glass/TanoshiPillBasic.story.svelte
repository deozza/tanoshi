<script lang="ts">

    import '../../../../app.css';

	import { THEMES, TanoshiPillModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiPillGlass from '$atoms/pill/TanoshiPillGlass.svelte';
    export let Hst: Hst;

    const primaryPill: TanoshiPillModel = new TanoshiPillModel('Primary')
        .setBasicTheme(THEMES.Primary)

    const secondaryPill: TanoshiPillModel = new TanoshiPillModel('Secondary')
        .setBasicTheme(THEMES.Secondary)

    const whitePill: TanoshiPillModel = new TanoshiPillModel('White')
        .setBasicTheme(THEMES.White)
        .setTextTheme(THEMES.White)

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
  
<Hst.Story title="atoms/pill/glass/basic" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="primary">
        <TanoshiPillGlass tanoshiPillModel={primaryPill} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiPillGlass tanoshiPillModel={secondaryPill} />
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiPillGlass tanoshiPillModel={whitePill} />
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiPillGlass tanoshiPillModel={blackPill} />
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiPillGlass tanoshiPillModel={successPill} />
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiPillGlass tanoshiPillModel={dangerPill} />
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiPillGlass tanoshiPillModel={warningPill} />
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiPillGlass tanoshiPillModel={infoPill} />
    </Hst.Variant>

</Hst.Story>