<script lang="ts">
	import TanoshiIcon from '$atoms/icon/TanoshiIcon.svelte';
	import TanoshiIconModel from '$atoms/icon/TanoshiIconModel';
	import { getThemeEnumKeyByEnumValue } from '$lib/enums';
	import type TanoshiButtonModel from './TanoshiButtonModel';
	import 'iconify-icon';

	export let tanoshiButtonModel: TanoshiButtonModel;

	const loadingIcon: TanoshiIconModel = new TanoshiIconModel('mdi:loading')
		.setIsSpinning(true)
		.setColor(getThemeEnumKeyByEnumValue(tanoshiButtonModel.textTheme))
		.setHeight(16)
		.setWidth(16);
</script>

<button
	class=" 
	btn-{tanoshiButtonModel.backgroundTheme}
	btn-text-{tanoshiButtonModel.textTheme}
	btn-border-{tanoshiButtonModel.borderTheme}
	btn-hover-{tanoshiButtonModel.backgroundHoverTheme}
	btn-text-hover-{tanoshiButtonModel.textHoverTheme}
	btn-border-hover-{tanoshiButtonModel.borderHoverTheme}
	btn-{tanoshiButtonModel.size}
	btn-rounded-{tanoshiButtonModel.shape}
	"
	class:disabled:opacity-50={tanoshiButtonModel.isDisabled === true}
	class:pointer-events-none={tanoshiButtonModel.isDisabled === true}
	class:no-padding={tanoshiButtonModel.hasPadding === false}
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	type={tanoshiButtonModel.type}
	label={tanoshiButtonModel.content}
>
	{#if tanoshiButtonModel.isLoading === true}
		<TanoshiIcon tanoshiIconModel={loadingIcon} />
	{/if}
	{#if tanoshiButtonModel.iconAtLeft !== null && tanoshiButtonModel.isLoading === false}
		<TanoshiIcon tanoshiIconModel={tanoshiButtonModel.iconAtLeft} />
	{/if}
	{tanoshiButtonModel.content}
	{#if tanoshiButtonModel.iconAtRight !== null && tanoshiButtonModel.isLoading === false}
		<TanoshiIcon tanoshiIconModel={tanoshiButtonModel.iconAtRight} />
	{/if}

	<slot />
	
</button>


<style>
button {
	margin: 0.5rem;
	border-width: 1px;
	border-radius: 0.375rem;
	cursor: pointer;
}

button.btn-sm {
	height: 2rem/* 32px */;
	padding-left: 1rem/* 16px */;
	padding-right: 1rem/* 16px */;
	font-size: 0.875rem/* 14px */;
	line-height: 1.25rem/* 20px */;
}

button.btn-md {
	height: 2.5rem/* 40px */;
	padding-left: 1.25rem/* 20px */;
	padding-right: 1.25rem/* 20px */;
	font-size: 1rem/* 16px */;
}

button.btn-lg {
	height: 3rem/* 48px */;
	padding-left: 1.5rem/* 24px */;
	padding-right: 1.5rem/* 24px */;
	font-size: 1.125rem/* 18px */;
	line-height: 1.75rem/* 28px */;
}

button.btn-block {
	width: 100%;
	height: 3rem/* 48px */;
	padding-left: 1.5rem/* 24px */;
	padding-right: 1.5rem/* 24px */;
	font-size: 1.125rem/* 18px */;
	line-height: 1.75rem/* 28px */;
	margin: 0px;
}

button.btn-rounded-full {
	border-radius: 9999px;
}

button:disabled {
    cursor: not-allowed;
}


button.btn-primary {
    background-color: rgba(var(--primary-bg-button, var(--primary)));
	box-shadow:  8px 8px 15px rgba(var(--primary-dark-bg-button, var(--primary-dark))), -8px -8px 15px rgba(var(--primary-light-bg-button, var(--primary-light)));
}

button.btn-text-primary {
    color: rgba(var(--primary-text-button, var(--primary)));
}

button.btn-border-primary {
    border: 1px solid rgba(var(--primary-border-button, var(--primary)));
}

button.btn-hover-primary:active:not([disabled]), button.btn-hover-primary:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--primary-dark-bg-button, var(--primary-dark))), inset -8px -8px 15px rgba(var(--primary-light-bg-button, var(--primary-light)));
}

button.btn-text-hover-primary:hover:not([disabled]) {
    color: rgba(var(--primary-text-button-hover, var(--primary-dark)));
}

button.btn-secondary {
    background-color: rgba(var(--secondary-bg-button, var(--secondary)));
	box-shadow:  8px 8px 15px rgba(var(--secondary-dark-bg-button, var(--secondary-dark))), -8px -8px 15px rgba(var(--secondary-light-bg-button, var(--secondary-light)));
}

button.btn-text-secondary {
    color: rgba(var(--secondary-text-button, var(--secondary)));
}

button.btn-border-secondary {
    border: 1px solid rgba(var(--secondary-border-button, var(--secondary)));
}

button.btn-hover-secondary:active:not([disabled]), button.btn-hover-secondary:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--secondary-dark-bg-button, var(--secondary-dark))), inset -8px -8px 15px rgba(var(--secondary-light-bg-button, var(--secondary-light)));
}

button.btn-text-hover-secondary:hover:not([disabled]) {
    color: rgba(var(--secondary-text-button-hover, var(--secondary-dark)));
}

button.btn-success {
    background-color: rgba(var(--success-bg-button, var(--success)));
	box-shadow:  8px 8px 15px rgba(var(--success-dark-bg-button, var(--success-dark))), -8px -8px 15px rgba(var(--success-light-bg-button, var(--success-light)));
}

button.btn-text-success {
    color: rgba(var(--success-text-button, var(--success)));
}

button.btn-border-success {
    border: 1px solid rgba(var(--success-border-button, var(--success)));
}

button.btn-hover-success:active:not([disabled]), button.btn-hover-success:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--success-dark-bg-button, var(--success-dark))), inset -8px -8px 15px rgba(var(--success-light-bg-button, var(--success-light)));
}

button.btn-text-hover-success:hover:not([disabled]) {
    color: rgba(var(--success-text-button-hover, var(--success-dark)));
}

button.btn-warning {
    background-color: rgba(var(--warning-bg-button, var(--warning)));
	box-shadow:  8px 8px 15px rgba(var(--warning-dark-bg-button, var(--warning-dark))), -8px -8px 15px rgba(var(--warning-light-bg-button, var(--warning-light)));
}

button.btn-text-warning {
    color: rgba(var(--warning-text-button, var(--warning)));
}

button.btn-border-warning {
    border: 1px solid rgba(var(--warning-border-button, var(--warning)));
}

button.btn-hover-warning:active:not([disabled]), button.btn-hover-warning:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--warning-dark-bg-button, var(--warning-dark))), inset -8px -8px 15px rgba(var(--warning-light-bg-button, var(--warning-light)));
}

button.btn-text-hover-warning:hover:not([disabled]) {
    color: rgba(var(--warning-text-button-hover, var(--warning-dark)));
}

button.btn-danger {
    background-color: rgba(var(--danger-bg-button, var(--danger)));
	box-shadow:  8px 8px 15px rgba(var(--danger-dark-bg-button, var(--danger-dark))), -8px -8px 15px rgba(var(--danger-light-bg-button, var(--danger-light)));
}

button.btn-text-danger {
    color: rgba(var(--danger-text-button, var(--danger)));
}

button.btn-border-danger {
    border: 1px solid rgba(var(--danger-border-button, var(--danger)));
}

button.btn-hover-danger:active:not([disabled]), button.btn-hover-danger:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--danger-dark-bg-button, var(--danger-dark))), inset -8px -8px 15px rgba(var(--danger-light-bg-button, var(--danger-light)));
}

button.btn-text-hover-danger:hover:not([disabled]) {
    color: rgba(var(--danger-text-button-hover, var(--danger-dark)));
}

button.btn-info {
    background-color: rgba(var(--info-bg-button, var(--info)));
	box-shadow:  8px 8px 15px rgba(var(--info-dark-bg-button, var(--info-dark))), -8px -8px 15px rgba(var(--info-light-bg-button, var(--info-light)));
}

button.btn-text-info {
    color: rgba(var(--info-text-button, var(--info)));
}

button.btn-border-info {
    border: 1px solid rgba(var(--info-border-button, var(--info)));
}

button.btn-hover-info:active:not([disabled]), button.btn-hover-info:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--info-dark-bg-button, var(--info-dark))), inset -8px -8px 15px rgba(var(--info-light-bg-button, var(--info-light)));
}

button.btn-text-hover-info:hover:not([disabled]) {
    color: rgba(var(--info-text-button-hover, var(--info-dark)));
}

button.btn-white {
    background-color: rgba(var(--white-bg-button, var(--white)));
	box-shadow:  8px 8px 15px rgba(var(--white-dark-bg-button, var(--white-dark))), -8px -8px 15px rgba(var(--white-light-bg-button, var(--white-light)));
}

button.btn-text-white {
    color: rgba(var(--white-text-button, var(--white)));
}

button.btn-border-white {
    border: 1px solid rgba(var(--white-border-button, var(--white)));
}

button.btn-hover-white:active:not([disabled]), button.btn-hover-white:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--white-dark-bg-button, var(--white-dark))), inset -8px -8px 15px rgba(var(--white-light-bg-button, var(--white-light)));
}

button.btn-text-hover-white:hover:not([disabled]) {
    color: rgba(var(--white-text-button-hover, var(--white)));
}

button.btn-black {
    background-color: rgba(var(--black-bg-button, var(--black)));
	box-shadow:  8px 8px 15px rgba(var(--black-dark-bg-button, var(--black-dark))), -8px -8px 15px rgba(var(--black-light-bg-button, var(--black-light)));
}

button.btn-text-black {
    color: rgba(var(--black-text-button, var(--black)));
}

button.btn-border-black {
    border: 1px solid rgba(var(--black-border-button, var(--black)));
}

button.btn-hover-black:active:not([disabled]), button.btn-hover-black:disabled {
	box-shadow: inset 8px 8px 15px rgba(var(--black-dark-bg-button, var(--black-dark))), inset -8px -8px 15px rgba(var(--black-light-bg-button, var(--black-light)));
}

button.btn-text-hover-black:hover:not([disabled]) {
    color: rgba(var(--black-text-button-hover, var(--black)));
}

:global(button > iconify-icon) {
    display: inline-block;
}

@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>