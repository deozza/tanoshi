<script lang="ts">
	import { TanoshiTextInputModel } from '$atoms';
	import TanoshiTextInputNeumorphism from '$atoms/input/text/TanoshiTextInputNeumorphism.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const primaryTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('primary')
        .setPlaceholder('primary')
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Secondary)

    const secondaryTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('secondary')
        .setPlaceholder('secondary')
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Success)

    const successTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('success')
        .setPlaceholder('success')
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)

    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Danger)
    
    const dangerTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('danger')
        .setPlaceholder('danger')
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Warning)

    const warningTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('warning')
        .setPlaceholder('warning')
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Info)

    const infoTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('info')
        .setPlaceholder('info')
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.White)

    const whiteTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('white')
        .setPlaceholder('white')
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

    const blackTextInput: TanoshiTextInputModel = new TanoshiTextInputModel('black')
        .setPlaceholder('black')
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)


</script>
  
<Hst.Story title="atoms/input/text/neumorphism" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={primaryTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={secondaryTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={successTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={dangerTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={warningTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={infoTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={whiteTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer}>
            <TanoshiTextInputNeumorphism tanoshiInputModel={blackTextInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>