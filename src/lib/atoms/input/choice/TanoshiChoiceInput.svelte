<script lang="ts">
	import { INPUT_CHOICES_TYPES } from '$lib/enums';	
	import { createEventDispatcher } from 'svelte';
	import type TanoshiChoiceInputModel from './TanoshiChoiceInputModel';

	export let tanoshiInputModel: TanoshiChoiceInputModel;

	const dispatch = createEventDispatcher();

	function handleChoiced() {
		dispatch('choiced', tanoshiInputModel.value);
	}

	function handleChecked() {
		dispatch('checked', {value: tanoshiInputModel.value, checked: tanoshiInputModel.checked});
	}
</script>

<div>
	{#if tanoshiInputModel.type === INPUT_CHOICES_TYPES.Radio}
		<input
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			type='radio'
			value={tanoshiInputModel.value}
			on:change={handleChoiced}
			checked={tanoshiInputModel.checked}
		/>
		{:else if tanoshiInputModel.type === INPUT_CHOICES_TYPES.Checkbox}
		<input
			class:readonly={tanoshiInputModel.readonly}
			id={tanoshiInputModel.id}
			name={tanoshiInputModel.name}
			on:focusout
			readonly={tanoshiInputModel.readonly}
			required={tanoshiInputModel.required}
			type='checkbox'
			value={tanoshiInputModel.value}
			bind:checked={tanoshiInputModel.checked}
			on:change={handleChecked}
		/>
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
	color: rgba(var(--black-text-input, var(--black)))
}

input.readonly:hover {
	cursor: not-allowed;
}


</style>