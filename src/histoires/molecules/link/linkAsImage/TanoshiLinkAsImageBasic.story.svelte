<script lang="ts">

    import '../../../../app.css';

	import { THEMES, TanoshiImageModel, TanoshiLinkModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiLinkAsImageModel from '$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImageModel';
	import TanoshiLinkAsImage from '$molecules/link/TanoshiLinkAsImage/TanoshiLinkAsImage.svelte';
    export let Hst: Hst;

    const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    const defaultImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'default')
    const defaultLink: TanoshiLinkModel = new TanoshiLinkModel('link')
        .setLink(catImageSource)
        .setIsInternal(false)
        .setTheme(THEMES.Primary)

    const defaultLinkAsImage: TanoshiLinkAsImageModel = new TanoshiLinkAsImageModel(defaultLink, defaultImage)

</script>
  
<Hst.Story title="molecules/link/link as image/basic" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="default">
        <TanoshiLinkAsImage tanoshiLinkModel={defaultLinkAsImage} />
    </Hst.Variant>
</Hst.Story>