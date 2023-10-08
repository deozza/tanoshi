<script lang="ts">
	import { THEMES } from '$lib';
	import { TanoshiAlertModel } from '$molecules';
	import TanoshiAlertMaterial from '$molecules/alert/TanoshiAlertMaterial.svelte';
    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Primary)
        .setTitleTheme(THEMES.White)

    const secondaryAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Secondary)
        .setTitleTheme(THEMES.White)

    const whiteAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.White)
        .setTitleTheme(THEMES.Black)

    const blackAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Black)
        .setTitleTheme(THEMES.White)

    const successAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Success)
        .setTitleTheme(THEMES.White)

    const dangerAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Danger)
        .setTitleTheme(THEMES.White)

    const warningAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Warning)
        .setTitleTheme(THEMES.White)

    const infoAlert: TanoshiAlertModel = new TanoshiAlertModel('Alert title')
        .setBackgroundTheme(THEMES.Info)
        .setTitleTheme(THEMES.White)

</script>
  
<Hst.Story title="molecules/alert/material/basic">
    <Hst.Variant title="primary">
         <TanoshiAlertMaterial tanoshiAlertModel={primaryAlert} />
    </Hst.Variant>

    <Hst.Variant title="secondary">
         <TanoshiAlertMaterial tanoshiAlertModel={secondaryAlert} />
    </Hst.Variant>

    <Hst.Variant title="white">
         <TanoshiAlertMaterial tanoshiAlertModel={whiteAlert} />
    </Hst.Variant>

    <Hst.Variant title="black">
         <TanoshiAlertMaterial tanoshiAlertModel={blackAlert} />
    </Hst.Variant>

    <Hst.Variant title="success">
         <TanoshiAlertMaterial tanoshiAlertModel={successAlert} />
    </Hst.Variant>

    <Hst.Variant title="danger">
         <TanoshiAlertMaterial tanoshiAlertModel={dangerAlert} />
    </Hst.Variant>

    <Hst.Variant title="warning">
         <TanoshiAlertMaterial tanoshiAlertModel={warningAlert} />
    </Hst.Variant>

    <Hst.Variant title="info">
         <TanoshiAlertMaterial tanoshiAlertModel={infoAlert} />
    </Hst.Variant>

</Hst.Story>