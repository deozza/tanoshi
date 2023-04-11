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
