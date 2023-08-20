<script lang="ts">
	import { INPUT_CHOICES_TYPES } from '$lib/enums';
	import { createEventDispatcher } from 'svelte';
	import type TanoshiChoiceInputModel from './TanoshiChoiceInputModel';

	export let tanoshiInputModel: TanoshiChoiceInputModel;

	const dispatch = createEventDispatcher();

	function handleChoiced() {
		dispatch('choiced', tanoshiInputModel.value);
	}
</script>

<div>
	{#if tanoshiInputModel.type === INPUT_CHOICES_TYPES.Radio}
		<input
			class:border-danger={tanoshiInputModel.error === true}
			class:text-danger={tanoshiInputModel.error === true}
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:change
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			type='radio'
			value={tanoshiInputModel.value}
			on:change={handleChoiced}
		/>
		{:else if tanoshiInputModel.type === INPUT_CHOICES_TYPES.Checkbox}
		<input
			class:border-danger={tanoshiInputModel.error === true}
			class:text-danger={tanoshiInputModel.error === true}
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:change
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			type='checkbox'
			value={tanoshiInputModel.value}
			bind:checked={tanoshiInputModel.checked}
		/>
	{/if}
	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>

input {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	border-width: 1px;
	border-radius: 0.375rem/* 6px */;
	color: var(--black-text-input, var(--black))
}

input.readonly:hover {
	cursor: not-allowed;
}

span.text-danger {
	color: var(--danger-text-input, var(--danger));
}

input.text-danger, input.text-danger:focus {
	border: 1px solid var(--danger-border-input, var(--danger));
}

@media (max-width: 639px) {
	input {
		width: 90%;
	}
}
</style>