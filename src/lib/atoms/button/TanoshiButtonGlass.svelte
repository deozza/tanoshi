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
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-duration: 300ms;	
	cursor: pointer;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	transition-property: color, box-shadow, border, background-color;
	display: flex;
	align-items: center;
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

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

button.btn-primary {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--primary-bg-button, var(--primary)), 0.3);
}

button.btn-text-primary {
    color: rgba(var(--primary-text-button, var(--primary)));
}

button.btn-border-primary {
	border: 1px solid rgba(var(--primary-border-button, var(--primary)), 0.5);
}

button.btn-hover-primary:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--primary), 0.6);
}

button.btn-text-hover-primary:hover:not([disabled]) {
    color: rgba(var(--primary-text-button-hover, var(--primary-dark)));
}

button.btn-border-hover-primary:hover:not([disabled]) {
    border: 1px solid rgba(var(--primary-border-button-hover, var(--primary-dark)));
}

button.btn-secondary {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--secondary-bg-button, var(--secondary)), 0.3);
}

button.btn-text-secondary {
    color: rgba(var(--secondary-text-button, var(--secondary)));
}

button.btn-border-secondary {
	border: 1px solid rgba(var(--secondary-border-button, var(--secondary)), 0.5);
}

button.btn-hover-secondary:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--secondary), 0.6);
}

button.btn-text-hover-secondary:hover:not([disabled]) {
    color: rgba(var(--secondary-text-button-hover, var(--secondary-dark)));
}

button.btn-border-hover-secondary:hover:not([disabled]) {
    border: 1px solid rgba(var(--secondary-border-button-hover, var(--secondary-dark)));
}

button.btn-success {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--success-bg-button, var(--success)), 0.3);
}

button.btn-text-success {
    color: rgba(var(--success-text-button, var(--success)));
}

button.btn-border-success {
	border: 1px solid rgba(var(--success-border-button, var(--success)), 0.5);
}

button.btn-hover-success:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--success), 0.6);
}

button.btn-text-hover-success:hover:not([disabled]) {
    color: rgba(var(--success-text-button-hover, var(--success-dark)));
}

button.btn-border-hover-success:hover:not([disabled]) {
    border: 1px solid rgba(var(--success-border-button-hover, var(--success-dark)));
}

button.btn-warning {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--warning-bg-button, var(--warning)), 0.3);
}

button.btn-text-warning {
    color: rgba(var(--warning-text-button, var(--warning)));
}

button.btn-border-warning {
	border: 1px solid rgba(var(--warning-border-button, var(--warning)), 0.5);
}

button.btn-hover-warning:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--warning), 0.6);
}

button.btn-text-hover-warning:hover:not([disabled]) {
    color: rgba(var(--warning-text-button-hover, var(--warning-dark)));
}

button.btn-border-hover-warning:hover:not([disabled]) {
    border: 1px solid rgba(var(--warning-border-button-hover, var(--warning-dark)));
}

button.btn-danger {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--danger-bg-button, var(--danger)), 0.3);
}

button.btn-text-danger {
    color: rgba(var(--danger-text-button, var(--danger)));
}

button.btn-border-danger {
	border: 1px solid rgba(var(--danger-border-button, var(--danger)), 0.5);
}

button.btn-hover-danger:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--danger), 0.6);
}

button.btn-text-hover-danger:hover:not([disabled]) {
    color: rgba(var(--danger-text-button-hover, var(--danger-dark)));
}

button.btn-border-hover-danger:hover:not([disabled]) {
    border: 1px solid rgba(var(--danger-border-button-hover, var(--danger-dark)));
}

button.btn-info {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--info-bg-button, var(--info)), 0.3);
}

button.btn-text-info {
    color: rgba(var(--info-text-button, var(--info)));
}

button.btn-border-info {
	border: 1px solid rgba(var(--info-border-button, var(--info)), 0.5);
}

button.btn-hover-info:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--info), 0.6);
}

button.btn-text-hover-info:hover:not([disabled]) {
    color: rgba(var(--info-text-button-hover, var(--info-dark)));
}

button.btn-border-hover-info:hover:not([disabled]) {
    border: 1px solid rgba(var(--info-border-button-hover, var(--info-dark)));
}

button.btn-white {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--white-bg-button, var(--white)), 0.3);
}

button.btn-text-white {
    color: rgba(var(--white-text-button, var(--white)));
}

button.btn-border-white {
	border: 1px solid rgba(var(--white-border-button, var(--white)), 0.5);
}

button.btn-hover-white:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--white), 0.6);
}

button.btn-text-hover-white:hover:not([disabled]) {
    color: rgba(var(--white-text-button-hover, var(--white)));
}

button.btn-border-hover-white:hover:not([disabled]) {
    border: 1px solid rgba(var(--white-border-button-hover, var(--white)));
}

button.btn-black {
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 15px 2px rgba(var(--black-bg-button, var(--black)), 0.3);
}

button.btn-text-black {
    color: rgba(var(--black-text-button, var(--black)));
}

button.btn-border-black {
	border: 1px solid rgba(var(--black-border-button, var(--black)), 0.5);
}

button.btn-hover-black:hover:not([disabled]){
	background-color: rgba(255, 255, 255, 0.05);
	box-shadow: inset 0px 0px 20px 3px rgba(var(--black), 0.6);
}

button.btn-text-hover-black:hover:not([disabled]) {
    color: rgba(var(--black-text-button-hover, var(--black)));
}

button.btn-border-hover-black:hover:not([disabled]) {
    border: 1px solid rgba(var(--black-border-button-hover, var(--black)));
}

button.btn-transparent {
    background-color: transparent;
}

button.btn-border-transparent {
    border: none;
}
</style>