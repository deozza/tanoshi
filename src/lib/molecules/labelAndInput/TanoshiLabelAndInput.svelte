<script lang="ts">
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS } from '$lib/enums';
	import TanoshiContainer from '$molecules/container/TanoshiContainerMaterial.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import type TanoshiLabelAndInputModel from './TanoshiLabelAndInputModel';

	const inputContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setMobileOrientation(CONTAINER_ORIENTATIONS.C)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setMobileItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)

	export let tanoshiLabelAndInputModel: TanoshiLabelAndInputModel;
</script>

<TanoshiContainer tanoshiContainerModel={inputContainerModel}>
	<TanoshiLabel tanoshiLabelModel={tanoshiLabelAndInputModel.label} />
	<svelte:component this={tanoshiLabelAndInputModel.component} tanoshiInputModel={tanoshiLabelAndInputModel.input}/>
</TanoshiContainer>