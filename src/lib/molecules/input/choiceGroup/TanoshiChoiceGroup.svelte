<script lang="ts">
	import TanoshiChoiceInput from '$atoms/input/choice/TanoshiChoiceInput.svelte';
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ORIENTATIONS, WIDTHS } from '$lib/enums';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import type TanoshiChoiceGroupModel from './TanoshiChoiceGroupModel';

	const inputGroupContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
	
	const inputContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Start)
		.setWidth(WIDTHS.WAuto)


	export let tanoshiInputModel: TanoshiChoiceGroupModel;

</script>

<div style="flex: 2">
	<TanoshiContainer tanoshiContainerModel={inputGroupContainerModel}>
		{#each tanoshiInputModel.choices as tanoshiChoiceAndLabelModel}
			<TanoshiContainer tanoshiContainerModel={inputContainerModel}>
				<TanoshiLabel tanoshiLabelModel={tanoshiChoiceAndLabelModel.label} />
				<TanoshiChoiceInput tanoshiInputModel={tanoshiChoiceAndLabelModel.input} on:choiced={(e) => tanoshiInputModel.setRadioValue(e.detail)}/>
			</TanoshiContainer>
		{/each}

	</TanoshiContainer>
	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>
span.text-danger {
	color: var(--danger-text-input, var(--danger));
}
</style>