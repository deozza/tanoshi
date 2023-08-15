<script lang="ts">
	import '../../main.css';
	import './tanoshiContainer.css';
	import type TanoshiContainerModel from './TanoshiContainerModel';

	export let tanoshiContainerModel: TanoshiContainerModel;
	export let customClasses: string = '';
</script>

<div
	class="
		 
		{tanoshiContainerModel.theme} 
		rounded-{tanoshiContainerModel.borders} 
		flex-{tanoshiContainerModel.desktopOrientation} 
		{tanoshiContainerModel.desktopSpacing}
		items-{tanoshiContainerModel.itemsAlignment}
		{tanoshiContainerModel.width}
		{tanoshiContainerModel.height}
		{customClasses}
	"
>
	<slot />
</div>

<style>
div {
	padding: 0.5rem/* 8px */;
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

div.white {
	background-color: var(--white-container, var(--white));
}

div.black {
	background-color: var(--black-container, var(--black));
}

div.primary {
	background-color: var(--primary-container, var(--primary));
}

div.secondary {
	background-color: var(--secondary-container, var(--secondary));
}

div.success {
	background-color: var(--success-container, var(--success));
}

div.warning {
	background-color: var(--warning-container, var(--warning));
}

div.danger {
	background-color: var(--danger-container, var(--danger));
}

div.info {
	background-color: var(--info-container, var(--info));
}

@media (max-width: 640px) {
	div.flex-container{
		width: 100%;
	}
}
</style>