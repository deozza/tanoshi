<script lang="ts">
	import TanoshiButton from '$atoms/button/TanoshiButton.svelte';
	import TanoshiTextInput from '$atoms/input/text/TanoshiTextInput.svelte';
	import TanoshiTextInputModel from '$atoms/input/text/TanoshiTextInputModel';
	import TanoshiLabel from '$atoms/label/TanoshiLabel.svelte';
	import type TanoshiFormModel from './TanoshiFormModel';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleForm() {
		dispatch('submit')
	}

	export let tanoshiFormModel: TanoshiFormModel;
</script>

<form class="min-w-full" on:submit|preventDefault={handleForm} method="POST">
	<ul class="space-y-6">
		{#each tanoshiFormModel.labelsAndInputs as { tanoshiLabelModel, tanoshiInputModel }}
			<li>
				<div class="flex-container flex-r">
					<TanoshiLabel {tanoshiLabelModel} />

					{#if tanoshiInputModel instanceof TanoshiTextInputModel}
						<TanoshiTextInput tanoshiTextInputModel={tanoshiInputModel} />
					{/if}

				</div>
			</li>
		{/each}
		<li>
			<div class="flex-container flex-r space-y-2 centered items-center">
				<TanoshiButton tanoshiButtonModel={tanoshiFormModel.submitButton} />
			</div>
		</li>
	</ul>
</form>
