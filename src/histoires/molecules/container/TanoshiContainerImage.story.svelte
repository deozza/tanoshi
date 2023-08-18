<script lang="ts">

    import '../../../app.css';

	import { CONTAINER_ORIENTATIONS, TanoshiContainerModel } from '$lib';
    import type { Hst } from '@histoire/plugin-svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
    export let Hst: Hst;
    const catImageSource = 'https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

    const imageBackgroundContainer: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
        .setBackgroundImage(catImageSource)

</script>
  
<Hst.Story title="molecules/container/image background">

    <TanoshiContainer tanoshiContainerModel={imageBackgroundContainer} >
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </TanoshiContainer>

</Hst.Story>

<style>
    span {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
    }
</style>