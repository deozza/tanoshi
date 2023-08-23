<script lang="ts">
	import type TanoshiFileInputModel from './TanoshiFileInputModel';

	export let tanoshiInputModel: TanoshiFileInputModel;

	function handleInput(e: any) {
		tanoshiInputModel.setValue(e.target.value);
	}
</script>

<div class="input-container">
	<input
		class:border-danger={tanoshiInputModel.error === true}
		class:text-danger={tanoshiInputModel.error === true}
		id={tanoshiInputModel.id}
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		on:input={handleInput}
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		type='file'
		multiple={tanoshiInputModel.multiple}
		accept={tanoshiInputModel.accept}
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