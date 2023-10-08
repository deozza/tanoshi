<script lang="ts">
	import type TanoshiTextInputModel from './TanoshiTextInputModel';

	export let tanoshiInputModel: TanoshiTextInputModel;

	function handleInput(e: any) {
		tanoshiInputModel.setValue(e.target.value);
	}
</script>

<div class="input-container">
	<input
		class="bg-{tanoshiInputModel.backgroundTheme} border-{tanoshiInputModel.borderTheme} text-{tanoshiInputModel.textTheme} rounded-{tanoshiInputModel.borderShape}"
		id={tanoshiInputModel.id}
		maxlength={tanoshiInputModel.maxLength}
		minlength={tanoshiInputModel.minLength}
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		on:input={handleInput}
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		type={tanoshiInputModel.type}
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
	width: 100%;

}

input {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
}

input:read-only:hover {
	cursor: not-allowed;
}

input.bg-transparent {
	background-color: transparent;
}

input.bg-primary {
	background-color: var(--primary-bg-input, var(--primary));
}

input.text-primary {
	color: var(--primary-text-input, var(--primary));
}

input.border-primary {
	border: 1px solid var(--primary-border-input, var(--primary));
}

input.bg-secondary {
	background-color: var(--secondary-bg-input, var(--secondary));
}

input.text-secondary {
	color: var(--secondary-text-input, var(--secondary));
}

input.border-secondary {
	border: 1px solid var(--secondary-border-input, var(--secondary));
}

input.bg-success {
	background-color: var(--success-bg-input, var(--success));
}

input.text-success {
	color: var(--success-text-input, var(--success));
}

input.border-success {
	border: 1px solid var(--success-border-input, var(--success));
}

input.bg-info {
	background-color: var(--info-bg-input, var(--info));
}

input.text-info {
	color: var(--info-text-input, var(--info));
}

input.border-info {
	border: 1px solid var(--info-border-input, var(--info));
}

input.bg-warning {
	background-color: var(--warning-bg-input, var(--warning));
}

input.text-warning {
	color: var(--warning-text-input, var(--warning));
}

input.border-warning {
	border: 1px solid var(--warning-border-input, var(--warning));
}

input.bg-danger {
	background-color: var(--danger-bg-input, var(--danger));
}

input.text-danger, input.text-danger:focus {
	border: 1px solid var(--danger-border-input, var(--danger));
}

input.border-danger {
	border: 1px solid var(--danger-border-input, var(--danger));
}

input.bg-white {
	background-color: var(--white-bg-input, var(--white));
}

input.text-white {
	color: var(--white-text-input, var(--white));
}

input.border-white {
	border: 1px solid var(--white-border-input, var(--white));
}

input.bg-black {
	background-color: var(--black-bg-input, var(--black));
}

input.text-black {
	color: var(--black-text-input, var(--black));
}

input.border-black {
	border: 1px solid var(--black-border-input, var(--black));
}

span.text-danger {
	color: var(--danger-text-input, var(--danger));
}

@media (max-width: 639px) {
	div.input-container {
		margin: 0.5rem 0/* 8px */;
		flex: 2;
	}
}
</style>