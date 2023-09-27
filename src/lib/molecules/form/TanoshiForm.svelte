<script lang="ts">
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import type TanoshiFormModel from './TanoshiFormModel';
	import { createEventDispatcher } from 'svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';
	import { CONTAINER_ITEMS_ALIGNMENTS, CONTAINER_ITEMS_SPACING, CONTAINER_ORIENTATIONS } from '$lib/enums';
	import TanoshiLabelAndInput from '$molecules/labelAndInput/TanoshiLabelAndInput.svelte';
	import type TanoshiLabelAndInputModel from '$molecules/labelAndInput/TanoshiLabelAndInputModel';

	export let tanoshiFormModel: TanoshiFormModel;
	
	const buttonContainerModel: TanoshiContainerModel = new TanoshiContainerModel(CONTAINER_ORIENTATIONS.R)
		.setItemsAlignment(CONTAINER_ITEMS_ALIGNMENTS.Center)
		.setDesktopSpacing(CONTAINER_ITEMS_SPACING.Centered);

	const dispatch = createEventDispatcher();

	function handleForm(e: any) {
		
		const form: HTMLFormElement = e.target as HTMLFormElement
		const formData: FormData = new FormData(form)
		tanoshiFormModel.setFormData(formData)
		tanoshiFormModel.setValues(tanoshiFormModel.labelsAndInputs.map((labelAndInput: TanoshiLabelAndInputModel) => {return {id: labelAndInput.input.id, value: labelAndInput.input.value}}));

		dispatch('submit', tanoshiFormModel)
	}
</script>

<TanoshiContainer tanoshiContainerModel={tanoshiFormModel.container}>

	{#if tanoshiFormModel.preventDefault === true}
		<form 
			on:submit|preventDefault={(e) => handleForm(e)}
			name="{tanoshiFormModel.name}"
			>
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
	{:else}
		<form 
			method="{tanoshiFormModel.method}" 
			action="{tanoshiFormModel.action}"
			name="{tanoshiFormModel.name}"
			>
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
	{/if}

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