<script lang="ts">
	import './tanoshiTextInput.css';
	import type TanoshiTextInputModel from './TanoshiTextInputModel';

	export let tanoshiTextInputModel: TanoshiTextInputModel;

	function handleInput(e: any) {
		tanoshiTextInputModel.setValue(e.target.value);
	}
</script>

<div class="input-container">
	<input
		class:border-danger={tanoshiTextInputModel.error === true}
		class:text-danger={tanoshiTextInputModel.error === true}
		class="text-input"
		id={tanoshiTextInputModel.id}
		maxlength={tanoshiTextInputModel.maxLength}
		minlength={tanoshiTextInputModel.minLength}
		name={tanoshiTextInputModel.name}
		on:change
		on:focusout
		on:input={handleInput}
		placeholder={tanoshiTextInputModel.placeholder}
		readonly={tanoshiTextInputModel.readonly}
		required={tanoshiTextInputModel.required}
		type={tanoshiTextInputModel.type}
		value={tanoshiTextInputModel.value}
	/>

	{#if tanoshiTextInputModel.error}
		<span class="text-danger">{tanoshiTextInputModel.errorMessage}</span>
	{/if}
</div>


<style>
	
div.input-container {
	margin: 0.5rem/* 8px */;
	flex: 2;
}

input.text-input {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	border-width: 1px;
	border-radius: 0.375rem/* 6px */;
}

span.text-danger {
	color: var(--danger-color-text-span, var(--danger));
}

@media (max-width: 639px) {
	input.text-input {
		width: 90%;
	}
}
</style>