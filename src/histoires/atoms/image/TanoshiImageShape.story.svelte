<script lang="ts">

    import '../../../app.css';

	import { IMAGE_SHAPES, TanoshiImageModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiImage from '$atoms/image/TanoshiImage.svelte';
    export let Hst: Hst;

    const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    const defaultImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'default')

    const roundedImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'rounded')
        .setShape(IMAGE_SHAPES.Rounded)

    const circleImage: TanoshiImageModel = new TanoshiImageModel(catImageSource, 'circle')
        .setCircle('circledSize')

</script>
  
<Hst.Story title="atoms/image/shape" >
    <Hst.Variant title="default">
        <TanoshiImage tanoshiImageModel={defaultImage} />
    </Hst.Variant>

    <Hst.Variant title="rounded">
        <TanoshiImage tanoshiImageModel={roundedImage} />
    </Hst.Variant>

    <Hst.Variant title="circle">
        <TanoshiImage tanoshiImageModel={circleImage} />
    </Hst.Variant>
</Hst.Story>