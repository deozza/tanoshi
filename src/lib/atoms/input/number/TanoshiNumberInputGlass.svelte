<script lang="ts">
	import type TanoshiNumberInputModel from './TanoshiNumberInputModel';

	export let tanoshiInputModel: TanoshiNumberInputModel;
</script>

<div class="input-container">
	<input
		class="bg-{tanoshiInputModel.backgroundTheme} border-{tanoshiInputModel.borderTheme} text-{tanoshiInputModel.textTheme} rounded-{tanoshiInputModel.borderShape}"
		id={tanoshiInputModel.id}
		max={tanoshiInputModel.max}
		min={tanoshiInputModel.min}
		name={tanoshiInputModel.name}
		on:change
		on:focusout
		placeholder={tanoshiInputModel.placeholder}
		readonly={tanoshiInputModel.readonly}
		required={tanoshiInputModel.required}
		type='number'
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

input {
	width: 100%;
	padding-top: 0.5rem/* 8px */;
	padding-bottom: 0.5rem/* 8px */;
	padding-left: 0.75rem/* 12px */;
	padding-right: 0.75rem/* 12px */;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}

input:focus {
	outline: none;
}

input:read-only:hover {
	cursor: not-allowed;
}

input.bg-transparent {
	background-color: transparent;
}

input.bg-primary {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--primary-bg-input, var(--primary)), 0.3);}

input.text-primary {
	color: rgba(var(--primary-text-input, var(--primary)));
}

input.border-primary {
	border: 1px solid rgba(var(--primary-border-input, var(--primary)), 0.5);
}

input.bg-secondary {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--secondary-bg-input, var(--secondary)), 0.3);
}

input.text-secondary {
	color: rgba(var(--secondary-text-input, var(--secondary)));
}

input.border-secondary {
	border: 1px solid rgba(var(--secondary-border-input, var(--secondary)), 0.5);
}

input.bg-success {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--success-bg-input, var(--success)), 0.3);
}

input.text-success {
	color: rgba(var(--success-text-input, var(--success)));
}

input.border-success {
	border: 1px solid rgba(var(--success-border-input, var(--success)), 0.5);
}

input.bg-info {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--info-bg-input, var(--info)), 0.3);
}

input.text-info {
	color: rgba(var(--info-text-input, var(--info)));
}

input.border-info {
	border: 1px solid rgba(var(--info-border-input, var(--info)), 0.5);
}

input.bg-warning {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--warning-bg-input, var(--warning)), 0.3);
}

input.text-warning {
	color: rgba(var(--warning-text-input, var(--warning)));
}

input.border-warning {
	border: 1px solid rgba(var(--warning-border-input, var(--warning)), 0.5);
}

input.bg-danger {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--danger-bg-input, var(--danger)), 0.3);
}

input.text-danger {
	color: rgba(var(--danger-text-input, var(--danger)));
}

input.border-danger {
	border: 1px solid rgba(var(--danger-border-input, var(--danger)), 0.5);
}

input.bg-white {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--white-bg-input, var(--white)), 0.3);
}

input.text-white {
	color: rgba(var(--white-text-input, var(--white)));
}

input.border-white {
	border: 1px solid rgba(var(--white-border-input, var(--white)), 0.5);
}

input.bg-black {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--black-bg-input, var(--black)), 0.3);
}

input.text-black {
	color: rgba(var(--black-text-input, var(--black)));
}

input.border-black {
	border: 1px solid rgba(var(--black-border-input, var(--black)), 0.5);
}

span.text-danger {
	color: rgba(var(--danger-text-input, var(--danger)));
}

@media (max-width: 639px) {
	div.input-container {
		margin: 0.5rem 0/* 8px */;
		flex: 2;
	}
}
</style>