<script lang="ts">

    import '../../../app.css';

	import { IMAGE_FILTERS, TanoshiImageModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
    export let Hst: Hst;

    const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    const defaultImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'default')

    const grayscaleImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'grayscale')
        .setFilter(IMAGE_FILTERS.Grayscale)

    const blurImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'blur')
        .setFilter(IMAGE_FILTERS.Blur)

    const sepiaImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'sepia')
        .setFilter(IMAGE_FILTERS.Sepia)

    const invertImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'invert')
        .setFilter(IMAGE_FILTERS.Invert)

</script>
  
<Hst.Story title="atoms/image/filter" layout={{ type: 'grid', width: 200 }}>
    <Hst.Variant title="default">
        <TanoshiImage tanoshiImageModel={defaultImage} />
    </Hst.Variant>

    <Hst.Variant title="grayscale">
        <TanoshiImage tanoshiImageModel={grayscaleImage} />
    </Hst.Variant>

    <Hst.Variant title="blur">
        <TanoshiImage tanoshiImageModel={blurImage} />
    </Hst.Variant>

    <Hst.Variant title="sepia">
        <TanoshiImage tanoshiImageModel={sepiaImage} />
    </Hst.Variant>

    <Hst.Variant title="invert">
        <TanoshiImage tanoshiImageModel={invertImage} />
    </Hst.Variant>
</Hst.Story>