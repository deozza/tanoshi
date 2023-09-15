<script lang="ts">
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import type TanoshiFormModel from './TanoshiFormModel';
	import { createEventDispatcher } from 'svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS, getThemeEnumKeyByEnumValue } from '$lib/enums';
	import TanoshiLabelAndInput from '$molecules/labelAndInput/TanoshiLabelAndInput.svelte';
	import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

	export let tanoshiFormModel: TanoshiFormModel;

	const formContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setBackgroundTheme(getThemeEnumKeyByEnumValue(tanoshiFormModel.backgroundTheme))
		.setBorderTheme(getThemeEnumKeyByEnumValue(tanoshiFormModel.borderTheme))
	
	const buttonContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered);

	const dispatch = createEventDispatcher();

	function handleForm() {
		
		tanoshiFormModel.setValues(tanoshiFormModel.labelsAndInputs.map((labelAndInput: TanoshiLabelAndInputModel) => {return {id: labelAndInput.input.id, value: labelAndInput.input.value}}));

		dispatch('submit')
	}
</script>

<TanoshiContainer tanoshiContainerModel={formContainerModel}>
	<form on:submit|preventDefault={handleForm} method="POST">
		<ul>
			{#each tanoshiFormModel.labelsAndInputs as tanoshiLabelAndInputModel}
				<li>
					<TanoshiLabelAndInput {tanoshiLabelAndInputModel}/>
				</li>
			{/each}
			<li class='space-y-2'>
				<TanoshiContainer tanoshiContainerModel={buttonContainerModel}>
					<TanoshiButton tanoshiButtonModel={tanoshiFormModel.submitButton} />
				</TanoshiContainer>
			</li>
		</ul>
	</form>
</TanoshiContainer>

<style>
form{
    min-width: 100%;
}

form > ul{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

form > ul > li.space-y-2{
    margin-right: 1.5rem;
    margin-left: 1.5rem;
}
</style>