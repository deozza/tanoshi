<script lang="ts">

    import '../../../app.css';

	import { HEIGHTS, TanoshiImageModel, WIDTHS } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
    export let Hst: Hst;

    const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    const defaultImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'default')

    const quarterImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'quarter')
        .setWidth(WIDTHS.W3)

    const halfImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'half')
        .setWidth(WIDTHS.W6)

</script>
  
<Hst.Story title="atoms/image/size" >
    <Hst.Variant title="default">
        <TanoshiImage tanoshiImageModel={defaultImage} />
    </Hst.Variant>

    <Hst.Variant title="quarter">
        <TanoshiImage tanoshiImageModel={quarterImage} />
    </Hst.Variant>

    <Hst.Variant title="half">
        <TanoshiImage tanoshiImageModel={halfImage} />
    </Hst.Variant>
</Hst.Story>