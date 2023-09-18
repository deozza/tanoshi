<script lang="ts">
	import type TanoshiTextInputModel from './TanoshiTextareaInputModel';

	export let tanoshiInputModel: TanoshiTextInputModel;
</script>

<div class="input-container">
	<textarea
		class:border-danger={tanoshiInputModel.error === true}
		class:text-danger={tanoshiInputModel.error === true}
		id={tanoshiInputModel.id}
		maxlength={tanoshiInputModel.maxLength}
		minlength={tanoshiInputModel.minLength}
		rows="{tanoshiInputModel.rows}"
		cols="{tanoshiInputModel.cols}"
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		bind:value={tanoshiInputModel.value}
	/>

	{#if tanoshiInputModel.error}
		<span class="text-danger">{tanoshiInputModel.errorMessage}</span>
	{/if}
</div>


<style>
	
div.input-container {
	margin: 0.5rem/* 8px */;
	flex: 2;
	width: 100%;
}

textarea {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	border-width: 1px;
	border-radius: 0.375rem/* 6px */;
	color: var(--black-text-input, var(--black))
}

textarea:read-only:hover {
	cursor: not-allowed;
}

span.text-danger {
	color: var(--danger-text-input, var(--danger));
}

textarea.text-danger, textarea.text-danger:focus {
	border: 1px solid var(--danger-border-input, var(--danger));
}

@media (max-width: 639px) {
	div.input-container {
		margin: 0.5rem 0/* 8px */;
	}
}
</style>