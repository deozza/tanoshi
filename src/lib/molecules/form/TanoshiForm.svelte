<script lang="ts">
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
	import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import type TanoshiFormModel from './TanoshiFormModel';
	import { createEventDispatcher } from 'svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS } from '$lib/enums';

	const inputContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center);
	
	const buttonContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered);

	const dispatch = createEventDispatcher();

	function handleForm() {
		dispatch('submit')
	}

	export let tanoshiFormModel: TanoshiFormModel;
</script>

<form on:submit|preventDefault={handleForm} method="POST">
	<ul>
		{#each tanoshiFormModel.labelsAndInputs as { tanoshiLabelModel, tanoshiInputModel }}
			<li>
				<TanoshiContainer tanoshiContainerModel={inputContainerModel}>
					<TanoshiLabel {tanoshiLabelModel} />

					{#if tanoshiInputModel instanceof TanoshiTextInputModel}
						<TanoshiTextInput tanoshiTextInputModel={tanoshiInputModel} />
					{/if}
				</TanoshiContainer>
			</li>
		{/each}
		<li class='space-y-2'>
			<TanoshiContainer tanoshiContainerModel={buttonContainerModel}>
				<TanoshiButton tanoshiButtonModel={tanoshiFormModel.submitButton} />
			</TanoshiContainer>
		</li>
	</ul>
</form>


<style>
form{
    min-width: 100%;
}

form > ul{
    --tw-space-y-reverse: 0;
    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

form > ul > li.space-y-2{
    --tw-space-x-reverse: 0;
    margin-right: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
    margin-left: calc(1.5rem * var(--tw-space-x-reverse));
}
</style>