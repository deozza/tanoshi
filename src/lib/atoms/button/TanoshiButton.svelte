<script lang="ts">
	import type TanoshiButtonModel from './TanoshiButtonModel';
	import 'iconify-icon';

	export let tanoshiButtonModel: TanoshiButtonModel;
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
	disabled={tanoshiButtonModel.isDisabled}
	on:click
	type={tanoshiButtonModel.type}
	label={tanoshiButtonModel.content}
>
	{#if tanoshiButtonModel.isLoading === true}
		<iconify-icon icon="mdi:loading" class="spin-icon" />
	{/if}
	{#if tanoshiButtonModel.iconAtLeft !== null && tanoshiButtonModel.isLoading === false}
		<iconify-icon icon={tanoshiButtonModel.iconAtLeft} />
	{/if}
	{tanoshiButtonModel.content}
	{#if tanoshiButtonModel.iconAtRight !== null && tanoshiButtonModel.isLoading === false}
		<iconify-icon icon={tanoshiButtonModel.iconAtRight} />
	{/if}

	<slot />
	
</button>


<style>
	button {
	margin: 0.5rem;
	border-width: 1px;
	border-radius: 0.375rem;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	transition-duration: 300ms;	
	cursor: pointer;
}

button.btn-md {
	height: 2.5rem/* 40px */;
	padding-left: 1.25rem/* 20px */;
	padding-right: 1.25rem/* 20px */;
}

button.btn-sm {
	height: 2rem/* 32px */;
	padding-left: 1rem/* 16px */;
	padding-right: 1rem/* 16px */;
	font-size: 0.875rem/* 14px */;
	line-height: 1.25rem/* 20px */;
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
    background-color: var(--primary-bg-button, var(--primary));
}

button.btn-text-primary {
    color: var(--primary-text-button, var(--primary));
}

button.btn-border-primary {
    border: 1px solid var(--primary-border-button, var(--primary));
}

button.btn-hover-primary:hover:not([disabled]){
    background-color: var(--primary-bg-button-hover, var(--primary-dark));
}

button.btn-text-hover-primary:hover:not([disabled]) {
    color: var(--primary-text-button-hover, var(--primary-dark));
}

button.btn-border-hover-primary:hover:not([disabled]) {
    border: 1px solid var(--primary-border-button-hover, var(--primary-dark));
}

button.btn-secondary {
    background-color: var(--secondary-bg-button, var(--secondary));
}

button.btn-text-secondary {
    color: var(--secondary-text-button, var(--secondary));
}

button.btn-border-secondary {
    border: 1px solid var(--secondary-border-button, var(--secondary));
}

button.btn-hover-secondary:hover:not([disabled]){
    background-color: var(--secondary-bg-button-hover, var(--secondary-dark));
}

button.btn-text-hover-secondary:hover:not([disabled]) {
    color: var(--secondary-text-button-hover, var(--secondary-dark));
}

button.btn-border-hover-secondary:hover:not([disabled]) {
    border: 1px solid var(--secondary-border-button-hover, var(--secondary-dark));
}

button.btn-success {
    background-color: var(--success-bg-button, var(--success));
}

button.btn-text-success {
    color: var(--success-text-button, var(--success));
}

button.btn-border-success {
    border: 1px solid var(--success-border-button, var(--success));
}

button.btn-hover-success:hover:not([disabled]){
    background-color: var(--success-bg-button-hover, var(--success-dark));
}

button.btn-text-hover-success:hover:not([disabled]) {
    color: var(--success-text-button-hover, var(--success-dark));
}

button.btn-border-hover-success:hover:not([disabled]) {
    border: 1px solid var(--success-border-button-hover, var(--success-dark));
}

button.btn-warning {
    background-color: var(--warning-bg-button, var(--warning));
}

button.btn-text-warning {
    color: var(--warning-text-button, var(--warning));
}

button.btn-border-warning {
    border: 1px solid var(--warning-border-button, var(--warning));
}

button.btn-hover-warning:hover:not([disabled]){
    background-color: var(--warning-bg-button-hover, var(--warning-dark));
}

button.btn-text-hover-warning:hover:not([disabled]) {
    color: var(--warning-text-button-hover, var(--warning-dark));
}

button.btn-border-hover-warning:hover:not([disabled]) {
    border: 1px solid var(--warning-border-button-hover, var(--warning-dark));
}

button.btn-danger {
    background-color: var(--danger-bg-button, var(--danger));
}

button.btn-text-danger {
    color: var(--danger-text-button, var(--danger));
}

button.btn-border-danger {
    border: 1px solid var(--danger-border-button, var(--danger));
}

button.btn-hover-danger:hover:not([disabled]){
    background-color: var(--danger-bg-button-hover, var(--danger-dark));
}

button.btn-text-hover-danger:hover:not([disabled]) {
    color: var(--danger-text-button-hover, var(--danger-dark));
}

button.btn-border-hover-danger:hover:not([disabled]) {
    border: 1px solid var(--danger-border-button-hover, var(--danger-dark));
}

button.btn-info {
    background-color: var(--info-bg-button, var(--info));
}

button.btn-text-info {
    color: var(--info-text-button, var(--info));
}

button.btn-border-info {
    border: 1px solid var(--info-border-button, var(--info));
}

button.btn-hover-info:hover:not([disabled]){
    background-color: var(--info-bg-button-hover, var(--info-dark));
}

button.btn-text-hover-info:hover:not([disabled]) {
    color: var(--info-text-button-hover, var(--info-dark));
}

button.btn-border-hover-info:hover:not([disabled]) {
    border: 1px solid var(--info-border-button-hover, var(--info-dark));
}

button.btn-white {
    background-color: var(--white-bg-button, var(--white));
}

button.btn-text-white {
    color: var(--white-text-button, var(--white));
}

button.btn-border-white {
    border: 1px solid var(--white-border-button, var(--white));
}

button.btn-hover-white:hover:not([disabled]){
    background-color: var(--white-bg-button-hover, var(--white));
}

button.btn-text-hover-white:hover:not([disabled]) {
    color: var(--white-text-button-hover, var(--white));
}

button.btn-border-hover-white:hover:not([disabled]) {
    border: 1px solid var(--white-border-button-hover, var(--white));
}

button.btn-black {
    background-color: var(--black-bg-button, var(--black));
}

button.btn-text-black {
    color: var(--black-text-button, var(--black));
}

button.btn-border-black {
    border: 1px solid var(--black-border-button, var(--black));
}

button.btn-hover-black:hover:not([disabled]){
    background-color: var(--black-bg-button-hover, var(--black));
}

button.btn-text-hover-black:hover:not([disabled]) {
    color: var(--black-text-button-hover, var(--black));
}

button.btn-border-hover-black:hover:not([disabled]) {
    border: 1px solid var(--black-border-button-hover, var(--black));
}

button.btn-transparent {
    background-color: transparent;
}

button.btn-border-transparent {
    border: none;
}

:global(button > iconify-icon) {
    display: inline-block;
}

.spin-icon {
	animation: spin 2s linear infinite;
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