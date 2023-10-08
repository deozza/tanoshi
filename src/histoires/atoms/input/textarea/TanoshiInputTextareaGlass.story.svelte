<script lang="ts">
	import { TanoshiTextareaInputModel } from '$atoms';
	import TanoshiTextareaInputGlass from '$atoms/input/textarea/TanoshiTextareaInputGlass.svelte';
	import { CONTAINER_ORIENTATIONS, THEMES } from '$lib';
	import { TanoshiContainerModel } from '$molecules';
	import TanoshiContainerMaterial from '$molecules/container/TanoshiContainerMaterial.svelte';

    import '../../../../app.css';

    import type { Hst } from '@histoire/plugin-svelte';
    export let Hst: Hst;

    const primaryContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
         .setBackgroundTheme(THEMES.Black)

    const defaultTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('default')
        .setPlaceholder('default')

    const primaryTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('primary')
        .setPlaceholder('primary')
        .setBackgroundTheme(THEMES.Primary)
        .setBorderTheme(THEMES.Primary)
        .setTextTheme(THEMES.White)

    const secondaryTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('secondary')
        .setPlaceholder('secondary')
        .setBackgroundTheme(THEMES.Secondary)
        .setBorderTheme(THEMES.Secondary)
        .setTextTheme(THEMES.White)

    const successTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('success')
        .setPlaceholder('success')
        .setBackgroundTheme(THEMES.Success)
        .setBorderTheme(THEMES.Success)
        .setTextTheme(THEMES.White)
    
    const dangerTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('danger')
        .setPlaceholder('danger')
        .setBackgroundTheme(THEMES.Danger)
        .setBorderTheme(THEMES.Danger)
        .setTextTheme(THEMES.White)

    const warningTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('warning')
        .setPlaceholder('warning')
        .setBackgroundTheme(THEMES.Warning)
        .setBorderTheme(THEMES.Warning)
        .setTextTheme(THEMES.White)

    const infoTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('info')
        .setPlaceholder('info')
        .setBackgroundTheme(THEMES.Info)
        .setBorderTheme(THEMES.Info)
        .setTextTheme(THEMES.White)

    const whiteTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('white')
        .setPlaceholder('white')
        .setBackgroundTheme(THEMES.White)
        .setBorderTheme(THEMES.White)
        .setTextTheme(THEMES.Black)

    const blackTextareaInput: TanoshiTextareaInputModel = new TanoshiTextareaInputModel('black')
        .setPlaceholder('black')
        .setBackgroundTheme(THEMES.Black)
        .setBorderTheme(THEMES.Black)
        .setTextTheme(THEMES.White)


</script>
  
<Hst.Story title="atoms/input/textarea/glass" layout={{ type: 'grid', width: 600 }}>
    <Hst.Variant title="default">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={defaultTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="primary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={primaryTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="secondary">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={secondaryTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="success">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={successTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="danger">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={dangerTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="warning">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={warningTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="info">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={infoTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="white">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={whiteTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

    <Hst.Variant title="black">
        <TanoshiContainerMaterial tanoshiContainerModel={primaryContainer}>
            <TanoshiTextareaInputGlass tanoshiInputModel={blackTextareaInput} />
        </TanoshiContainerMaterial>
    </Hst.Variant>

</Hst.Story>