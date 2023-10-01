<script lang="ts">
	import '../../main.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel;
	export let customClasses: string = '';
</script>

<div
	class="
		{tanoshiContainerModel.backgroundImage !== '' && tanoshiContainerModel.backgroundImage !== null ? 'bg-image' : ''}
		{tanoshiContainerModel.backgroundTheme}
		border-{tanoshiContainerModel.borderTheme}
		rounded-{tanoshiContainerModel.borderShape} 
		flex-{tanoshiContainerModel.desktopOrientation} 
		mobile-flex-{tanoshiContainerModel.mobileOrientation} 
		{tanoshiContainerModel.desktopSpacing}
		items-{tanoshiContainerModel.itemsAlignment}
		mobile-items-{tanoshiContainerModel.mobileItemsAlignment}
		{tanoshiContainerModel.width}
		mobile-{tanoshiContainerModel.mobileWidth}
		{tanoshiContainerModel.height}
		{customClasses}
	"
>
	<slot />
</div>

<style>
div {
	padding: 0.5rem 1rem/* 8px */;
	display: flex;
	box-sizing: border-box;
	transition: background-color 0.5s ease;
}

div.flex-c {
	flex-direction: column;
}

div.flex-c-reverse {
	flex-direction: column-reverse;
}

div.flex-r {
	flex-direction: row;
	justify-items: center;
	flex-wrap: wrap;
}

div.start {
	justify-content: flex-start;
}

div.centered {
	justify-content: center;
}

div.end {
	justify-content: flex-end;
}

div.between {
	justify-content: space-between;
}

div.around {
	justify-content: space-around;
}

div.evenly {
	justify-content: space-evenly;
}

div.transparent {
	background-color: transparent;
}

div.border-transparent {
	border-color: transparent;
}

div.white {
	background-color: rgba(var(--white-background-container, var(--white)));
}

div.border-white {
	border: 1px solid rgba(var(--white-border-container, var(--white)));
}

div.black {
	background-color: rgba(var(--black-background-container, var(--black)));
}

div.border-black {
	border: 1px solid rgba(var(--black-border-container, var(--black)));
}

div.primary {
	background-color: rgba(var(--primary-background-container, var(--primary)));
}

div.border-primary {
	border: 1px solid rgba(var(--primary-border-container, var(--primary)));
}

div.secondary {
	background-color: rgba(var(--secondary-background-container, var(--secondary)));
}

div.border-secondary {
	border: 1px solid rgba(var(--secondary-border-container, var(--secondary)));
}

div.success {
	background-color: rgba(var(--success-background-container, var(--success)));
}

div.border-success {
	border: 1px solid rgba(var(--success-border-container, var(--success)));
}

div.warning {
	background-color: rgba(var(--warning-background-container, var(--warning)));
}

div.border-warning {
	border: 1px solid rgba(var(--warning-border-container, var(--warning)));
}

div.danger {
	background-color: rgba(var(--danger-background-container, var(--danger)));
}

div.border-danger {
	border: 1px solid rgba(var(--danger-border-container, var(--danger)));
}

div.info {
	background-color: rgba(var(--info-background-container, var(--info)));
}

div.border-info {
	border: 1px solid rgba(var(--info-border-container, var(--info)));
}

@media (max-width: 639px) {
	div.mobile-flex-c {
		flex-direction: column;
	}

	div.mobile-flex-c-reverse {
		flex-direction: column-reverse;
	}

	div.mobile-flex-r {
		flex-direction: row;
		justify-items: center;
		flex-wrap: wrap;
	}

	div.flex-container{
		width: 100%;
	}
}
</style>