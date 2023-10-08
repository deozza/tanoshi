<script lang="ts">
	import '../../main.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel;
	export let customClasses: string = '';
	export let pushedStyled: boolean = false;
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
	class:no-padding={tanoshiContainerModel.hasPadding === false}
	class:pushed={pushedStyled === true}
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

div.white {
    background-color: rgba(var(--white-bg-container, var(--white)));
	box-shadow:  8px 8px 15px rgba(var(--white-dark-bg-container, var(--white-dark))), -8px -8px 15px rgba(var(--white-light-bg-container, var(--white-light)));
}

div.white.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--white-dark-bg-container, var(--white-dark))), inset -8px -8px 15px rgba(var(--white-light-bg-container, var(--white-light)));
}

div.border-white {
	border: 1px solid rgba(var(--white-border-container, var(--white)));
}

div.black {
    background-color: rgba(var(--black-bg-container, var(--black)));
	box-shadow:  8px 8px 15px rgba(var(--black-dark-bg-container, var(--black-dark))), -8px -8px 15px rgba(var(--black-light-bg-container, var(--black-light)));
}

div.black.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--black-dark-bg-container, var(--black-dark))), inset -8px -8px 15px rgba(var(--black-light-bg-container, var(--black-light)));
}

div.border-black {
	border: 1px solid rgba(var(--black-border-container, var(--black)));
}

div.primary {
    background-color: rgba(var(--primary-bg-container, var(--primary)));
	box-shadow:  8px 8px 15px rgba(var(--primary-dark-bg-container, var(--primary-dark))), -8px -8px 15px rgba(var(--primary-light-bg-container, var(--primary-light)));
}

div.primary.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--primary-dark-bg-container, var(--primary-dark))), inset -8px -8px 15px rgba(var(--primary-light-bg-container, var(--primary-light)));
}

div.border-primary {
	border: 1px solid rgba(var(--primary-border-container, var(--primary)));
}

div.secondary {
    background-color: rgba(var(--secondary-bg-container, var(--secondary)));
	box-shadow:  8px 8px 15px rgba(var(--secondary-dark-bg-container, var(--secondary-dark))), -8px -8px 15px rgba(var(--secondary-light-bg-container, var(--secondary-light)));
}

div.secondary.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--secondary-dark-bg-container, var(--secondary-dark))), inset -8px -8px 15px rgba(var(--secondary-light-bg-container, var(--secondary-light)));
}

div.border-secondary {
	border: 1px solid rgba(var(--secondary-border-container, var(--secondary)));
}

div.success {
    background-color: rgba(var(--success-bg-container, var(--success)));
	box-shadow:  8px 8px 15px rgba(var(--success-dark-bg-container, var(--success-dark))), -8px -8px 15px rgba(var(--success-light-bg-container, var(--success-light)));
}

div.success.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--success-dark-bg-container, var(--success-dark))), inset -8px -8px 15px rgba(var(--success-light-bg-container, var(--success-light)));
}

div.border-success {
	border: 1px solid rgba(var(--success-border-container, var(--success)));
}

div.warning {
    background-color: rgba(var(--warning-bg-container, var(--warning)));
	box-shadow:  8px 8px 15px rgba(var(--warning-dark-bg-container, var(--warning-dark))), -8px -8px 15px rgba(var(--warning-light-bg-container, var(--warning-light)));
}

div.warning.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--warning-dark-bg-container, var(--warning-dark))), inset -8px -8px 15px rgba(var(--warning-light-bg-container, var(--warning-light)));
}

div.border-warning {
	border: 1px solid rgba(var(--warning-border-container, var(--warning)));
}

div.danger {
    background-color: rgba(var(--danger-bg-container, var(--danger)));
	box-shadow:  8px 8px 15px rgba(var(--danger-dark-bg-container, var(--danger-dark))), -8px -8px 15px rgba(var(--danger-light-bg-container, var(--danger-light)));
}

div.danger.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--danger-dark-bg-container, var(--danger-dark))), inset -8px -8px 15px rgba(var(--danger-light-bg-container, var(--danger-light)));
}

div.border-danger {
	border: 1px solid rgba(var(--danger-border-container, var(--danger)));
}

div.info {
    background-color: rgba(var(--info-bg-container, var(--info)));
	box-shadow:  8px 8px 15px rgba(var(--info-dark-bg-container, var(--info-dark))), -8px -8px 15px rgba(var(--info-light-bg-container, var(--info-light)));
}

div.info.pushed {
	box-shadow: inset 8px 8px 15px rgba(var(--info-dark-bg-container, var(--info-dark))), inset -8px -8px 15px rgba(var(--info-light-bg-container, var(--info-light)));
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