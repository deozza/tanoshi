<script lang="ts">
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
	import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import type TanoshiFormModel from './TanoshiFormModel';
	import { createEventDispatcher } from 'svelte';
	import TanoshiContainer from '$molecules/container/TanoshiContainer.svelte';
	import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

	const inputContainerModel: TanoshiContainerModel = new TanoshiContainerModel('r');
	const buttonContainerModel: TanoshiContainerModel = new TanoshiContainerModel('r').setItemsAlignment('center').setDesktopSpacing('centered');

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
