<script lang="ts">
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS } from '$lib/enums';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import type TanoshiLabelAndInputModel from './TanoshiLabelAndInputModel';

	const inputContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)

export let tanoshiLabelAndInputModel: TanoshiLabelAndInputModel;
</script>

<TanoshiContainer tanoshiContainerModel={inputContainerModel}>
	<TanoshiLabel tanoshiLabelModel={tanoshiLabelAndInputModel.label} />
	<svelte:component this={tanoshiLabelAndInputModel.component} tanoshiInputModel={tanoshiLabelAndInputModel.input} on:input/>
</TanoshiContainer>