<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type TanoshiNumberInputModel from './TanoshiNumberInputModel';

	export let tanoshiInputModel: TanoshiNumberInputModel;

	const dispatch = createEventDispatcher();

	function handleInput(e: any) {
		tanoshiInputModel.setValue(e.target.value);
		dispatch('input', {value: tanoshiInputModel.value, id: tanoshiInputModel.id});
	}
</script>

<div class="input-container">
	<input
		class:border-danger={tanoshiInputModel.error === true}
		class:text-danger={tanoshiInputModel.error === true}
		id={tanoshiInputModel.id}
		max={tanoshiInputModel.max}
		min={tanoshiInputModel.min}
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		on:input={handleInput}
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		type='number'
		value={tanoshiInputModel.value}
	/>

	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>
	
div.input-container {
	margin: 0.5rem/* 8px */;
	flex: 2;
}

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

input:read-only:hover {
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