<script lang="ts">
	import type TanoshiTextInputModel from './TanoshiTextareaInputModel';

	export let tanoshiInputModel: TanoshiTextInputModel;
</script>

<div class="input-container">
	<textarea
		class="bg-{tanoshiInputModel.backgroundTheme} border-{tanoshiInputModel.borderTheme} text-{tanoshiInputModel.textTheme} rounded-{tanoshiInputModel.borderShape}"
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
	padding-left: 1rem/* 12px */;
	padding-right: 1rem/* 12px */;
}

textarea:read-only:hover {
	cursor: not-allowed;
}


textarea.bg-primary {
    background-color: rgba(var(--primary-bg-input, var(--primary)));
	box-shadow: inset 8px 8px 15px rgba(var(--primary-dark-bg-input, var(--primary-dark))), inset -8px -8px 15px rgba(var(--primary-light-bg-input, var(--primary-light)));
}

textarea.text-primary {
	color: rgba(var(--primary-text-input, var(--primary)));
}

textarea.border-primary {
	border: 1px solid rgba(var(--primary-border-input, var(--primary)));
}

textarea.bg-secondary {
    background-color: rgba(var(--secondary-bg-input, var(--secondary)));
	box-shadow: inset 8px 8px 15px rgba(var(--secondary-dark-bg-input, var(--secondary-dark))), inset -8px -8px 15px rgba(var(--secondary-light-bg-input, var(--secondary-light)));
}

textarea.text-secondary {
	color: rgba(var(--secondary-text-input, var(--secondary)));
}

textarea.border-secondary {
	border: 1px solid rgba(var(--secondary-border-input, var(--secondary)));
}

textarea.bg-success {
	background-color: rgba(var(--success-bg-input, var(--success)));
	box-shadow: inset 8px 8px 15px rgba(var(--success-dark-bg-input, var(--success-dark))), inset -8px -8px 15px rgba(var(--success-light-bg-input, var(--success-light)));
}

textarea.text-success {
	color: rgba(var(--success-text-input, var(--success)));
}

textarea.border-success {
	border: 1px solid rgba(var(--success-border-input, var(--success)));
}

textarea.bg-info {
	background-color: rgba(var(--info-bg-input, var(--info)));
	box-shadow: inset 8px 8px 15px rgba(var(--info-dark-bg-input, var(--info-dark))), inset -8px -8px 15px rgba(var(--info-light-bg-input, var(--info-light)));
}

textarea.text-info {
	color: rgba(var(--info-text-input, var(--info)));
}

textarea.border-info {
	border: 1px solid rgba(var(--info-border-input, var(--info)));
}

textarea.bg-warning {
	background-color: rgba(var(--warning-bg-input, var(--warning)));
	box-shadow: inset 8px 8px 15px rgba(var(--warning-dark-bg-input, var(--warning-dark))), inset -8px -8px 15px rgba(var(--warning-light-bg-input, var(--warning-light)));
}

textarea.text-warning {
	color: rgba(var(--warning-text-input, var(--warning)));
}

textarea.border-warning {
	border: 1px solid rgba(var(--warning-border-input, var(--warning)));
}

textarea.bg-danger {
	background-color: rgba(var(--danger-bg-input, var(--danger)));
	box-shadow: inset 8px 8px 15px rgba(var(--danger-dark-bg-input, var(--danger-dark))), inset -8px -8px 15px rgba(var(--danger-light-bg-input, var(--danger-light)));
}

textarea.text-danger, textarea.text-danger:focus {
	border: 1px solid rgba(var(--danger-border-input, var(--danger)));
}

textarea.border-danger {
	border: 1px solid rgba(var(--danger-border-input, var(--danger)));
}

textarea.bg-white {
	background-color: rgba(var(--white-bg-input, var(--white)));
	box-shadow: inset 8px 8px 15px rgba(var(--white-dark-bg-input, var(--white-dark))), inset -8px -8px 15px rgba(var(--white-light-bg-input, var(--white-light)));
}

textarea.text-white {
	color: rgba(var(--white-text-input, var(--white)));
}

textarea.border-white {
	border: 1px solid rgba(var(--white-border-input, var(--white)));
}

textarea.bg-black {
	background-color: rgba(var(--black-bg-input, var(--black)));
	box-shadow: inset 8px 8px 15px rgba(var(--black-dark-bg-input, var(--black-dark))), inset -8px -8px 15px rgba(var(--black-light-bg-input, var(--black-light)));
}

textarea.text-black {
	color: rgba(var(--black-text-input, var(--black)));
}

textarea.border-black {
	border: 1px solid rgba(var(--black-border-input, var(--black)));
}

span.text-danger {
	color: rgba(var(--danger-text-input, var(--danger)));
}

@media (max-width: 639px) {
	div.input-container {
		margin: 0.5rem 0/* 8px */;
	}
}
</style>