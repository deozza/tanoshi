<script lang="ts">
	import { TanoshiTextareaInputModel } from '$atoms';
	import TanoshiTextareaInputNeumorphism from '$atoms/input/textarea/TanoshiTextareaInputNeumorphism.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Primary)

    const primaryTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('primary')
        .setPlaceholder('primary')
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)

    const secondaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Secondary)

    const secondaryTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('secondary')
        .setPlaceholder('secondary')
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)

    const successContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Success)

    const successTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('success')
        .setPlaceholder('success')
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)

    const dangerContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Danger)
    
    const dangerTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('danger')
        .setPlaceholder('danger')
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)

    const warningContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Warning)

    const warningTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('warning')
        .setPlaceholder('warning')
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)

    const infoContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Info)

    const infoTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('info')
        .setPlaceholder('info')
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)

    const whiteContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.White)

    const whiteTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('white')
        .setPlaceholder('white')
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)

    const blackContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

    const blackTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('black')
        .setPlaceholder('black')
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)


</script>
  
<Hst.Story title="atoms/input/textarea/neumorphism" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={primaryTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={secondaryContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={secondaryTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={successContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={successTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={dangerContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={dangerTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={warningContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={warningTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={infoContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={infoTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={whiteContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={whiteTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={blackContainer}>
            <TanoshiTextareaInputNeumorphism tanoshiInputModel={blackTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>