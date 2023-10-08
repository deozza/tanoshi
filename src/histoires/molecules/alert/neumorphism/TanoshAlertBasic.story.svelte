<script lang="ts">
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiAlertModel, TanoshiContainerModel } from '$molecules';
	import TanoshiAlertNeumorphism from '$molecules/alert/TanoshiAlertNeumorphism.svelte';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';
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

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Primary)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Secondary)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.White)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Black)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Success)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Warning)
        
    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Danger)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundTheme(THEMES.Info)

</script>
  
<Hst.Story title="molecules/alert/neumorphism/basic">
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={primaryAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={secondaryAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={whiteAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={blackAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={successAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={warningAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={dangerAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer} >
             <TanoshiAlertNeumorphism tanoshiAlertModel={infoAlert} />
        </TanoshiContainerMaterial>
    </Hst.Variant>
</Hst.Story>